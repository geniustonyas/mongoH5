<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l d-btn" @click="closePopup">
        <span>取消</span>
      </div>
      <div class="d-m">
        <span>发布帖子</span>
      </div>
      <div class="d-r d-btn">
        <a class="btn btn1">发布</a>
      </div>
    </header>
    <main class="b-p-a">
      <div class="aui-card">
        <div class="item">
          <div class="i-t">板块</div>
          <div class="i-c">
            <input class="f-control" placeholder="请选择：" />
          </div>
        </div>

        <div class="item">
          <div class="i-t">标题</div>
          <div class="i-c">
            <textarea class="f-control" rows="4" placeholder="请输入标题" />
          </div>
        </div>

        <div class="item">
          <div class="i-t">内容</div>
          <div class="i-c">
            <textarea class="f-control" rows="20" placeholder="请输入内容" />
          </div>
        </div>
        <div class="item">
          <div class="i-b">
            <a @click="showPopup = true"><i class="mvfont mv-tuji1" />添加图片</a>
            <a @click="showPopup = true"><i class="mvfont mv-dianying" />添加视频</a>
          </div>
        </div>
      </div>
    </main>

    <Popup v-model:show="showPopup" :closeable="false" position="bottom" round :style="{ height: '60%' }">
      <div class="upload-box">
        <div class="upload-header">
          <span>上传文件</span>
        </div>
        <div class="upload-body">
          <vButton v-if="files.length === 0" type="primary" class="select-file-btn" size="normal" @click="selectFile">选择文件</vButton>
          <div v-for="(file, index) in files" :key="index" class="upload-row">
            <div class="upload-row-name">{{ file.file.name }}</div>
            <div v-if="file.error" class="error-message">{{ file.error }}</div>
            <Progress v-else :percentage="file.progress" :color="file.progress === 100 ? 'green' : file.progress > 0 ? 'blue' : 'gray'" />
            <div class="actions">
              <Icon v-if="file.file && !file.uploading && !file.error" name="play-circle-o" size="20" color="var(--color-primary)" @click="startUpload(index)" />
              <Icon v-if="file.uploading && !file.error" name="pause-circle-o" size="20" color="var(--color-primary)" @click="pauseUpload(index)" />
              <Icon name="close" size="20" color="var(--color-primary)" @click="cancelUpload(index)" />
            </div>
          </div>
        </div>
        <div v-if="files.length != 0" class="upload-btns">
          <vButton type="default" size="small" @click="closePopup">取消</vButton>
          <vButton type="primary" size="small" @click="batchUpload">批量上传</vButton>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Popup, Button as vButton, Progress, Icon } from 'vant'
import { S3Client, CreateMultipartUploadCommand, UploadPartCommand, CompleteMultipartUploadCommand } from '@aws-sdk/client-s3'
import { getSTSTokenApi } from '@/api/bbs' // 引入获取 STS Token 的 API

const showPopup = ref(false)
const files = ref([])

let s3Client = null

// 配置 S3 客户端
async function configureS3Client() {
  try {
    const {
      data: { data }
    } = await getSTSTokenApi()
    s3Client = new S3Client({
      region: 'ap-southeast-1',
      credentials: {
        accessKeyId: data.accessKeyId,
        secretAccessKey: data.secretAccessKey,
        sessionToken: data.sessionToken
      }
    })
  } catch (error) {
    console.error('Error fetching STS Token:', error)
  }
}

function closePopup() {
  showPopup.value = false
}

function selectFile() {
  const input = document.createElement('input')
  input.type = 'file'
  input.multiple = true // 支持多文件选择
  input.onchange = (event) => {
    const target = event.target as HTMLInputElement
    const selectedFiles = Array.from(target.files)
    selectedFiles.forEach((file) => {
      if (file.size > 500 * 1024 * 1024) {
        files.value.push({ progress: 0, file, uploading: false, error: `文件超过限制(500MB)` })
      } else {
        files.value.push({ progress: 0, file, uploading: false, error: null })
      }
    })
  }
  input.click()
}

// 开始上传
async function startUpload(index) {
  if (!s3Client) {
    await configureS3Client()
  }
  const file = files.value[index].file
  if (!file) return

  files.value[index].uploading = true

  try {
    // 建立连接 获取uploadId
    const createCommand = new CreateMultipartUploadCommand({
      Bucket: 'aemgtv.com',
      Key: `uploads/${file.name}`
    })
    const createResponse = await s3Client.send(createCommand)
    const uploadId = createResponse.UploadId

    // s3分片上传文件时，只有最后一个分片的文件可以小于5M，其余分片必须大于等于5M，否则会报错
    const partSize = 5 * 1024 * 1024 // 5MB
    const parts = Math.ceil(file.size / partSize)
    const uploadPromises = []

    // 分片上传
    for (let i = 0; i < parts; i++) {
      const start = i * partSize
      const end = Math.min(start + partSize, file.size)
      const part = file.slice(start, end) // 使用 Blob

      // 检查 part 是否为 Blob
      if (!(part instanceof Blob)) {
        console.error('Part is not a Blob:', part)
        return
      }

      const uploadPartCommand = new UploadPartCommand({
        Bucket: 'aemgtv.com',
        Key: `uploads/${file.name}`,
        PartNumber: i + 1,
        UploadId: uploadId,
        Body: part // 确保这里是 Blob
      })

      uploadPromises.push(
        s3Client
          .send(uploadPartCommand)
          .then((data) => {
            files.value[index].progress = Math.round(((i + 1) / parts) * 100)
            return { ETag: data.ETag, PartNumber: i + 1 }
          })
          .catch((error) => {
            console.error(`Error uploading part ${i + 1}:`, error)
            throw error // Re-throw to handle in outer catch
          })
      )
    }

    const uploadResults = await Promise.all(uploadPromises)

    const completeCommand = new CompleteMultipartUploadCommand({
      Bucket: 'aemgtv.com',
      Key: `uploads/${file.name}`,
      UploadId: uploadId,
      MultipartUpload: {
        Parts: uploadResults
      }
    })

    const data = await s3Client.send(completeCommand)
    console.log(data)
    files.value[index].progress = 100
    files.value[index].uploading = false
    console.log('Upload complete for file:', file.name)
  } catch (error) {
    console.error('Error during upload:', error)
    files.value[index].uploading = false
    // Optionally, reset progress or handle error state
  }
}

function pauseUpload(index) {
  // 暂停上传逻辑
}

function cancelUpload(index) {
  // 取消上传逻辑
  files.value.splice(index, 1)
  if (files.value.length === 0) {
    // 如果没有文件，显示选择文件按钮
    selectFile()
  }
}

// 批量上传
function batchUpload() {
  files.value.forEach((file, index) => {
    if (file.file) {
      startUpload(index)
    }
  })
}
</script>
