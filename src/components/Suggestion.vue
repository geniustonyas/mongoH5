<template>
  <div>
    <div class="fixed-suggestion" ref="draggable">
      <div v-show="showBtn">
        <div class="fs-t" @click="toggleBtn">
          <span><i class="mvfont mv-close" /></span>
        </div>
        <div class="fs-c" @click="showPopup = true">
          <span>
            <i class="mvfont mv-jianyi" />
            <small>建议<br />反馈</small>
          </span>
        </div>
      </div>
    </div>

    <Popup v-model:show="showPopup" position="bottom" closeable :overlay="true" round>
      <div class="suggestion-popup" style="background-color: #f7f8fa;">
        <div class="su-title">建议反馈</div>
        <div class="su-content">
          <div class="su-banner">
            <i class="mvfont mv-guangbo" />
            <p>
              请牢记域名：<b>{{ appStore.spareData.OfficialDomain }}</b> <span class="copy" :data-clipboard-text="appStore.spareData.OfficialDomain"><i class="mvfont mv-fuzhi" /></span><br />
              发送邮件至：<b>{{ appStore.spareData.Email }}</b> <span class="copy" :data-clipboard-text="appStore.spareData.Email"><i class="mvfont mv-fuzhi" /></span> 可获得最新地址
            </p>
          </div>
          <Form ref="formRef" @submit="onSubmit">
            <CellGroup>
              <Field v-model="form.FeedbackType" label="反馈类型" name="FeedbackType" :rules="[{ required: true, message: '请选择反馈类型' }]" required input-align="right">
                <template #input>
                  <RadioGroup v-model="form.FeedbackType" direction="horizontal">
                    <Radio name="1">内容报错</Radio>
                    <Radio name="2">查找资源</Radio>
                    <Radio name="3">意见反馈</Radio>
                    <Radio name="4">视频报错</Radio>
                    <Radio name="5">其他</Radio>
                  </RadioGroup>
                </template>
              </Field>
              <Field v-model="form.Content" label="留言内容" name="Content" type="textarea" placeholder="请输入您的反馈" :rules="[{ required: true, message: '请输入留言内容' }]" required />
            </CellGroup>
            <Button round block native-type="submit" class="mt-16 btn btn1">提交</Button>
          </Form>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits } from 'vue'
import { Popup, Form, Field, RadioGroup, Radio, Button, CellGroup, showSuccessToast } from 'vant'
import { useAppStore } from '@/store/app'
import { copy } from '@/utils'
import { userSuggestion } from '@/api/user'

defineProps<{
  showBtn: boolean
}>()

// 定义 emits
const emit = defineEmits(['update:showBtn'])

const appStore = useAppStore()
const showPopup = ref(false)

const form = ref({
  ContentType: '0', // 固定为 0
  FeedbackType: '', // 用户选择
  VideoErrorType: '',
  SourceId: '',
  Content: '' // 用户输入
})

const formRef = ref()

const toggleBtn = () => {
  emit('update:showBtn', false)
}

const onSubmit = async () => {
  try {
    await userSuggestion(form.value)
    showPopup.value = false
    showSuccessToast('提交成功, 感谢您的反馈')
    form.value.FeedbackType = ''
    form.value.Content = ''
  } catch (error) {
    console.error('提交失败', error)
  }
}

onMounted(() => {
  copy('.copy')
})
</script>
