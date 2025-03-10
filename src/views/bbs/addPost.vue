<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l d-btn" @click="appStore.setBack(true)">
        <span>取消</span>
      </div>
      <div class="d-m">
        <span>发布帖子</span>
      </div>
      <div class="d-r d-btn">
        <a class="btn btn1" @click="publishPost">发布</a>
      </div>
    </header>
    <main class="b-p-a">
      <div class="aui-card">
        <div class="item">
          <div class="i-t">板块</div>
          <div class="i-c">
            <Cell class="custom-cell" label="请选择板块" :value="selectedChannelName || '请选择板块'" is-link @click="showChannelPicker = true" />
          </div>
        </div>

        <div class="item">
          <div class="i-t">子板块</div>
          <div class="i-c">
            <Cell class="custom-cell" label="请选择子板块" :value="selectedSubChannelName || '请选择子板块'" is-link @click="showSubChannelPicker = true" />
          </div>
        </div>

        <div class="item">
          <div class="i-t">标题</div>
          <div class="i-c">
            <textarea class="f-control" v-model="postForm.title" rows="4" placeholder="请输入标题" />
          </div>
        </div>

        <div class="item">
          <div class="i-t">内容</div>
          <div class="i-c">
            <textarea class="f-control" v-model="postForm.content" rows="20" placeholder="请输入内容" />
          </div>
        </div>

        <div class="item">
          <div class="i-t">关键词</div>
          <div class="i-c">
            <input class="f-control" v-model="postForm.keywords" placeholder="请输入关键词" />
          </div>
        </div>

        <div class="item">
          <div class="i-b">
            <a @click="showImagePopup = true"><i class="mvfont mv-tuji1" />添加图片</a>
            <a @click="showVideoPopup = true"><i class="mvfont mv-dianying" />添加视频</a>
          </div>
        </div>
      </div>
    </main>

    <Popup v-model:show="showVideoPopup" :closeable="true" position="bottom" round :style="{ height: '60%' }">
      <div class="upload-box">
        <div class="upload-header">
          <span>添加视频</span>
        </div>
        <div class="upload-body">
          <div v-for="(file, index) in files" :key="index" class="upload-row">
            <div class="upload-row-name">{{ file.file.name }}</div>
            <div v-if="file.error" class="error-message">{{ file.error }}</div>
            <Progress v-else :percentage="file.progress" :color="file.progress === 100 ? 'green' : file.progress > 0 ? 'var(--color-primary)' : 'gray'" />
            <div class="actions">
              <Icon v-if="file.status === FILE_STATUS.NOT_UPLOADED" name="play-circle-o" size="20" color="var(--color-primary)" @click="startUpload(index)" />
              <Loading v-if="file.status === FILE_STATUS.UPLOADING" type="spinner" color="var(--color-primary)" size="20" />
              <Icon v-if="file.status === FILE_STATUS.UPLOADED" name="success" size="20" color="var(--color-primary)" />
              <Icon v-if="file.status === FILE_STATUS.FAILED" name="replay" size="20" color="var(--color-danger)" @click="startUpload(index)" />
              <Icon name="close" size="20" color="var(--color-primary)" @click="cancelUpload(index)" />
            </div>
          </div>
          <vButton v-if="files.length < 10" type="primary" class="select-file-btn" size="small" plain @click="selectFile">选择文件</vButton>
          <div v-else class="select-file-tip">最多上传10个视频文件</div>
        </div>
        <div v-if="files.length != 0" class="upload-btns">
          <vButton type="primary" size="small" plain @click="batchUpload">全部上传</vButton>
          <vButton type="danger" size="small" @click="deleteAllFiles">全部删除</vButton>
        </div>
      </div>
    </Popup>

    <!-- 图片上传弹窗 -->
    <Popup v-model:show="showImagePopup" :closeable="true" position="bottom" round :style="{ height: '60%' }">
      <div class="upload-box">
        <div class="upload-header">
          <span>添加图片</span>
        </div>
        <div class="upload-body">
          <Uploader
            v-model="imageFiles"
            :max-count="50"
            :max-size="10 * 1024 * 1024"
            :before-read="beforeImageRead"
            :after-read="afterImageRead"
            multiple
            :accept="'image/*'"
            :preview-size="120"
            :preview-full-image="true"
            :preview-image="true"
            :preview-options="{ closeable: true }"
            :deletable="true"
            :show-upload="imageFiles.length < 50"
          >
            <template #preview-cover="{ file }">
              <div class="preview-cover" :data-file-id="JSON.stringify(file[0])">
                <div v-if="file.status == 'uploading'" class="upload-progress">
                  <Loading type="spinner" color="var(--color-primary)" size="20" />
                  <Progress :percentage="parseInt(file.message?.match(/\d+/)?.[0] || '0')" />
                </div>
                <div v-if="file.status == 'done'" class="upload-success">
                  <Icon name="success" color="var(--color-success)" />
                </div>
                <div v-if="file.status == 'failed'" class="upload-failed">
                  <Icon name="cross" color="var(--color-danger)" />
                </div>
              </div>
            </template>
          </Uploader>
        </div>
        <div v-if="imageFiles.length > 0" class="upload-btns">
          <vButton type="primary" size="small" plain @click="uploadImages">全部上传</vButton>
          <vButton type="danger" size="small" @click="deleteAllImages">全部删除</vButton>
        </div>
      </div>
    </Popup>

    <!-- 板块选择弹窗 -->
    <Popup v-model:show="showChannelPicker" position="bottom" round>
      <Picker
        :columns="channelColumns"
        :default-index="0"
        title="选择板块"
        @confirm="onChannelConfirm"
        @cancel="showChannelPicker = false"
      />
    </Popup>

    <!-- 子板块选择弹窗 -->
    <Popup v-model:show="showSubChannelPicker" position="bottom" round>
      <Picker
        :columns="subChannelColumns"
        :default-index="0"
        title="选择子板块"
        @confirm="onSubChannelConfirm"
        @cancel="showSubChannelPicker = false"
      />
    </Popup>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { Popup, Button as vButton, Progress, Icon, Loading, Uploader, showToast, Cell, Picker } from 'vant'
  import { S3Client, CreateMultipartUploadCommand, UploadPartCommand, CompleteMultipartUploadCommand } from '@aws-sdk/client-s3'
  import { getSTSTokenApi, createPostApi, getBbsCategoryApi } from '@/api/bbs'
  import { useUserStoreHook } from '@/store/user'
  import { v4 as uuidv4 } from 'uuid'
  import type { BbsCategoryResponse, BbsCategoryItem } from '@/types/bbs'
  import { useAppStore } from '@/store/app'
  
  const appStore = useAppStore()
  const showPopup = ref(false)
  const showVideoPopup = ref(false)
  const showImagePopup = ref(false)
  const files = ref([])
  const imageFiles = ref([])
  const userStore = useUserStoreHook()

  // 帖子表单数据
  const postForm = ref({
    channelId: '',
    subChannelId: '',
    title: '',
    content: '',
    keywords: ''
  })

  // 分类数据
  const categories = ref<BbsCategoryResponse[]>([])
  const currentSubChannels = ref<BbsCategoryItem[]>([])

  // 选中的数据
  const selectedChannel = ref<{ text: string; value: string } | null>(null)
  const selectedSubChannel = ref<{ text: string; value: string } | null>(null)

  let s3Client = null

  // 板块选择相关
  const showChannelPicker = ref(false)
  const showSubChannelPicker = ref(false)
  
  // 计算属性：板块选项
  const channelColumns = computed(() => {
    return categories.value.map(item => ({
      text: item.title,
      value: item.id
    }))
  })

  // 计算属性：子板块选项
  const subChannelColumns = computed(() => {
    const selectedCategory = categories.value.find(cat => cat.id === postForm.value.channelId)
    return selectedCategory?.items.map(item => ({
      text: item.title,
      value: item.id
    })) || []
  })

  // 计算属性：当前选中的板块名称
  const selectedChannelName = computed(() => {
    return selectedChannel.value?.text || ''
  })

  // 计算属性：当前选中的子板块名称
  const selectedSubChannelName = computed(() => {
    return selectedSubChannel.value?.text || ''
  })

  // 生成上传路径
  function generateUploadPath(file) {
    const now = new Date()
    const dateStr = now.getFullYear().toString() + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0')
    const uniqueId = uuidv4()
    const fileType = file.type.startsWith('image/') ? 'image' : 'video'
    const userName = userStore.userInfo.userName || 'anonymous'
    return `uploads/${dateStr}/${userName}/${uniqueId}/${fileType}/${file.name}`
  }

  const FILE_STATUS = {
    NOT_UPLOADED: 'NOT_UPLOADED',
    UPLOADING: 'UPLOADING',
    UPLOADED: 'UPLOADED',
    FAILED: 'FAILED'
  }

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
    showVideoPopup.value = false
    showImagePopup.value = false
  }

  // 删除所有文件
  function deleteAllFiles() {
    files.value = []
  }

  function selectFile() {
    const input = document.createElement('input')
    input.type = 'file'
    input.multiple = true // 支持多文件选择
    input.accept = '.avi,.mp4,.mov,.mkv' // 限制文件格式
    input.onchange = event => {
      const target = event.target as HTMLInputElement
      const selectedFiles = Array.from(target.files)
      const allowedFormats = ['video/avi', 'video/mp4', 'video/quicktime', 'video/x-matroska'] // 允许的视频格式

      selectedFiles.forEach(file => {
        if (files.value.length >= 10) {
          console.log('已达到最大文件数量限制')
          return // 如果已达到10个文件，则不再添加
        }

        if (!allowedFormats.includes(file.type)) {
          console.log('不支持的文件格式:', file.name)
          return // 如果文件格式不支持，则跳过
        }

        if (file.size > 500 * 1024 * 1024) {
          files.value.push({ progress: 0, file, uploading: false, error: `文件超过限制(500MB)`, status: FILE_STATUS.NOT_UPLOADED })
        } else {
          files.value.push({ progress: 0, file, uploading: false, error: null, status: FILE_STATUS.NOT_UPLOADED })
        }
      })
    }
    input.click()
  }

  // 开始上传
  async function startUpload(index) {
    // 如果文件已经上传成功，则不允许重新上传
    if (files.value[index].status === FILE_STATUS.UPLOADED) {
      return
    }

    if (!s3Client) {
      await configureS3Client()
    }
    const file = files.value[index].file
    if (!file) return

    files.value[index].uploading = true
    files.value[index].status = FILE_STATUS.UPLOADING

    try {
      const uploadPath = generateUploadPath(file)
      // 建立连接 获取uploadId
      const createCommand = new CreateMultipartUploadCommand({
        Bucket: 'aemgtv.com',
        Key: uploadPath
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
          Key: uploadPath,
          PartNumber: i + 1,
          UploadId: uploadId,
          Body: part // 确保这里是 Blob
        })

        uploadPromises.push(
          s3Client
            .send(uploadPartCommand)
            .then(data => {
              files.value[index].progress = Math.round(((i + 1) / parts) * 100)
              return { ETag: data.ETag, PartNumber: i + 1 }
            })
            .catch(error => {
              console.error(`Error uploading part ${i + 1}:`, error)
              throw error // Re-throw to handle in outer catch
            })
        )
      }

      const uploadResults = await Promise.all(uploadPromises)

      const completeCommand = new CompleteMultipartUploadCommand({
        Bucket: 'aemgtv.com',
        Key: uploadPath,
        UploadId: uploadId,
        MultipartUpload: {
          Parts: uploadResults
        }
      })
      await s3Client.send(completeCommand)

      files.value[index].status = FILE_STATUS.UPLOADED
      files.value[index].progress = 100 // 确保上传成功时进度为100%
      files.value[index].uploadPath = uploadPath // 保存上传路径
    } catch (error) {
      console.error('Error uploading file:', error)
      files.value[index].status = FILE_STATUS.FAILED
      files.value[index].error = error.message
      files.value[index].progress = 0 // 上传失败时重置进度
    }
  }

  function batchUpload() {
    files.value.forEach((file, index) => {
      if (file.file && (file.status === FILE_STATUS.NOT_UPLOADED || file.status === FILE_STATUS.FAILED)) {
        startUpload(index)
      }
    })
  }

  // 图片上传前的验证
  function beforeImageRead(file: any) {
    // 处理多选文件的情况
    if (Array.isArray(file)) {
      return file.every(f => validateFile(f))
    }
    return validateFile(file)
  }

  // 验证单个文件
  function validateFile(file: any) {
    // 确保 file 是 File 对象
    const fileObj = file.file || file
    if (!fileObj) {
      showToast('无效的文件')
      return false
    }

    const isImage = fileObj.type.startsWith('image/')
    const isLt10M = fileObj.size / 1024 / 1024 < 10

    if (!isImage) {
      showToast('请上传图片文件')
      return false
    }
    if (!isLt10M) {
      showToast('图片大小不能超过 10MB')
      return false
    }
    return true
  }

  // 图片上传后的处理（仅预览）
  function afterImageRead(file: any) {
    // 确保 file 是 File 对象
    const fileObj = file.file || file
    if (!fileObj) {
      showToast('无效的文件')
      return false
    }

    // 扩展 file 对象，添加必要的属性
    Object.assign(file, {
      status: 'ready',
      message: '等待上传',
      isImage: true
    })
    return true
  }

  // 删除所有图片
  function deleteAllImages() {
    imageFiles.value = []
  }

  // 上传所有图片
  async function uploadImages() {
    try {
      if (!s3Client) {
        await configureS3Client()
      }

      // 过滤出需要上传的图片（状态不是 uploading 和 done 的图片）
      const filesToUpload = imageFiles.value.filter(file => {
        return !file.status || file.status === 'ready' || file.status === 'failed'
      })

      if (filesToUpload.length === 0) {
        showToast('没有需要上传的图片')
        return
      }

      // 批量上传所有图片
      const uploadPromises = filesToUpload.map(async file => {
        try {
          // 更新状态为上传中
          Object.assign(file, {
            status: 'uploading',
            message: '上传中...'
          })

          const uploadPath = await uploadSingleFile(file)
          if (uploadPath) {
            // 更新状态为上传成功
            Object.assign(file, {
              status: 'done',
              message: '上传成功',
              url: uploadPath
            })
          }
        } catch (error) {
          console.error('Error uploading file:', error)
          // 更新状态为上传失败
          Object.assign(file, {
            status: 'failed',
            message: '上传失败'
          })
          showToast('上传失败')
        }
      })

      // 等待所有图片上传完成
      await Promise.all(uploadPromises)
    } catch (error) {
      console.error('Error in uploadImages:', error)
      showToast('上传过程发生错误')
    }
  }

  // 上传单个文件
  async function uploadSingleFile(file: any) {
    // 确保 file 是 File 对象
    const fileObj = file.file || file
    if (!fileObj) {
      showToast('无效的文件')
      return false
    }

    const uploadPath = generateUploadPath(fileObj)
    if (!s3Client) {
      await configureS3Client()
    }

    try {
      // 建立连接 获取uploadId
      const createCommand = new CreateMultipartUploadCommand({
        Bucket: 'aemgtv.com',
        Key: uploadPath
      })
      const createResponse = await s3Client.send(createCommand)
      const uploadId = createResponse.UploadId

      // 分片上传
      const partSize = 5 * 1024 * 1024 // 5MB
      const parts = Math.ceil(fileObj.size / partSize)
      const uploadPromises = []

      for (let i = 0; i < parts; i++) {
        const start = i * partSize
        const end = Math.min(start + partSize, fileObj.size)
        const part = fileObj.slice(start, end)

        if (!(part instanceof Blob)) {
          console.error('Part is not a Blob:', part)
          return false
        }

        const uploadPartCommand = new UploadPartCommand({
          Bucket: 'aemgtv.com',
          Key: uploadPath,
          PartNumber: i + 1,
          UploadId: uploadId,
          Body: part
        })

        uploadPromises.push(
          s3Client
            .send(uploadPartCommand)
            .then(data => {
              // 更新上传进度
              file.message = `上传中 ${Math.round(((i + 1) / parts) * 100)}%`
              return { ETag: data.ETag, PartNumber: i + 1 }
            })
            .catch(error => {
              console.error(`Error uploading part ${i + 1}:`, error)
              throw error
            })
        )
      }

      const uploadResults = await Promise.all(uploadPromises)

      const completeCommand = new CompleteMultipartUploadCommand({
        Bucket: 'aemgtv.com',
        Key: uploadPath,
        UploadId: uploadId,
        MultipartUpload: {
          Parts: uploadResults
        }
      })
      await s3Client.send(completeCommand)

      return uploadPath
    } catch (error) {
      console.error('Error uploading file:', error)
      throw error
    }
  }

  // 取消上传
  function cancelUpload(index: number) {
    files.value.splice(index, 1)
  }

  // 获取分类列表
  async function fetchCategories() {
    try {
      const { data } = await getBbsCategoryApi()
      categories.value = data.data
      
      // 如果有默认选中的板块，设置选中状态
      if (postForm.value.channelId) {
        const channel = categories.value.find(cat => cat.id === postForm.value.channelId)
        if (channel) {
          selectedChannel.value = {
            text: channel.title,
            value: channel.id
          }
          
          // 如果有默认选中的子板块，设置选中状态
          if (postForm.value.subChannelId) {
            const subChannel = channel.items.find(item => item.id === postForm.value.subChannelId)
            if (subChannel) {
              selectedSubChannel.value = {
                text: subChannel.title,
                value: subChannel.id
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('获取分类失败:', error)
      showToast('获取分类失败')
    }
  }

  // 发布帖子
  async function publishPost() {
    try {
      // 验证必填字段
      if (!postForm.value.channelId) {
        showToast('请选择板块')
        return
      }
      if (!postForm.value.title.trim()) {
        showToast('请输入标题')
        return
      }
      if (!postForm.value.content.trim()) {
        showToast('请输入内容')
        return
      }

      // 收集已上传的图片URL
      const uploadedImages = imageFiles.value
        .filter(file => file.status === 'done' && file.url)
        .map(file => file.url)

      // 收集已上传的视频URL
      const uploadedVideos = files.value
        .filter(file => file.status === FILE_STATUS.UPLOADED)
        .map(file => file.uploadPath || '')
        .filter(Boolean)

      // 准备请求数据
      const postData = {
        ChannelId: postForm.value.channelId,
        SubChannelId: postForm.value.subChannelId || postForm.value.channelId,
        Title: postForm.value.title.trim(),
        Content: postForm.value.content.trim(),
        Imgs: uploadedImages.join(','),
        Videos: uploadedVideos.join(','),
        KeyWords: postForm.value.keywords.trim()
      }

      // 发送请求
      const { data } = await createPostApi(postData)
      if (data.code === 200) {
        showToast('发布成功')
        // 关闭弹窗并清空表单
        closePopup()
      } else {
        showToast(data.message || '发布失败')
      }
    } catch (error) {
      console.error('发布失败:', error)
      showToast('发布失败')
    }
  }

  // 处理板块选择
  function onChannelConfirm({ selectedOptions, selectedValues }) {
    selectedChannel.value = {
      text: selectedOptions[0].text,
      value: selectedValues[0]
    }
    postForm.value.channelId = selectedValues[0]
    selectedSubChannel.value = null
    postForm.value.subChannelId = ''
    showChannelPicker.value = false
  }

  // 处理子板块选择
  function onSubChannelConfirm({ selectedOptions, selectedValues }) {
    selectedSubChannel.value = {
      text: selectedOptions[0].text,
      value: selectedValues[0]
    }
    postForm.value.subChannelId = selectedValues[0]
    showSubChannelPicker.value = false
  }

  // 在组件挂载时获取分类列表
  onMounted(() => {
    fetchCategories()
  })
</script>
