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

    <van-popup v-model:show="showPopup" :closeable="false" position="bottom" round :style="{ height: '60%' }">
      <div class="upload-box">
        <div class="upload-header">
          <span>上传文件</span>
        </div>
        <div class="upload-body">
          <div v-for="(file, index) in files" :key="index" class="upload-row">
            <van-button type="primary" size="small" @click="selectFile(index)">选择文件</van-button>
            <van-progress :percentage="file.progress" :color="file.progress > 0 ? 'blue' : 'gray'" />
            <div class="actions">
              <van-icon name="pause" @click="pauseUpload(index)" />
              <van-icon name="close" @click="cancelUpload(index)" />
              <van-icon name="upload" @click="startUpload(index)" />
            </div>
          </div>
        </div>
        <div class="upload-btns">
          <van-button type="default" size="small" @click="closePopup">取消</van-button>
          <van-button type="primary" size="small" @click="batchUpload">批量上传</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Popup, Button, Progress, Icon } from 'vant';
import { S3Client, CreateMultipartUploadCommand, UploadPartCommand, CompleteMultipartUploadCommand } from '@aws-sdk/client-s3';
import { getSTSTokenApi } from '@/api/bbs'; // 引入获取 STS Token 的 API

const showPopup = ref(false);
const files = ref([
  { progress: 0, file: null }
]);

let s3Client = null;

async function configureS3Client() {
  try {
    const response = await getSTSTokenApi();
    const tokenData = response.data;
    s3Client = new S3Client({
      region: tokenData.region,
      credentials: {
        accessKeyId: tokenData.accessKeyId,
        secretAccessKey: tokenData.secretAccessKey,
        sessionToken: tokenData.sessionToken
      }
    });
  } catch (error) {
    console.error('Error fetching STS Token:', error);
  }
}

function closePopup() {
  showPopup.value = false;
}

function selectFile(index) {
  // Logic to select file
}

// 开始上传
async function startUpload(index) {
  if (!s3Client) {
    await configureS3Client();
  }
  const file = files.value[index].file;
  if (!file) return;

  const createCommand = new CreateMultipartUploadCommand({
    Bucket: 'YOUR_BUCKET_NAME',
    Key: file.name
  });
  const createResponse = await s3Client.send(createCommand);
  const uploadId = createResponse.UploadId;

  const partSize = 5 * 1024 * 1024; // 5MB
  const parts = Math.ceil(file.size / partSize);
  const uploadPromises = [];

  for (let i = 0; i < parts; i++) {
    const start = i * partSize;
    const end = Math.min(start + partSize, file.size);
    const part = file.slice(start, end);

    const uploadPartCommand = new UploadPartCommand({
      Bucket: 'YOUR_BUCKET_NAME',
      Key: file.name,
      PartNumber: i + 1,
      UploadId: uploadId,
      Body: part
    });

    uploadPromises.push(
      s3Client.send(uploadPartCommand).then((data) => {
        files.value[index].progress = Math.round(((i + 1) / parts) * 100);
        return { ETag: data.ETag, PartNumber: i + 1 };
      })
    );
  }

  const uploadResults = await Promise.all(uploadPromises);

  const completeCommand = new CompleteMultipartUploadCommand({
    Bucket: 'YOUR_BUCKET_NAME',
    Key: file.name,
    UploadId: uploadId,
    MultipartUpload: {
      Parts: uploadResults
    }
  });

  await s3Client.send(completeCommand);
  console.log('Upload complete for file:', file.name);
}

function pauseUpload(index) {
  // Logic to pause upload
}

function cancelUpload(index) {
  // Logic to cancel upload
}

// 批量上传
function batchUpload() {
  files.value.forEach((file, index) => {
    startUpload(index);
  });
}
</script>
