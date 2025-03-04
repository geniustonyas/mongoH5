<template>
  <div>
    <!-- <div class="fixed-suggestion" ref="draggable">
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
    </div> -->

    <FloatingBubble v-if="showBtn" v-model:offset="offset" axis="xy" magnetic="x" class="fixed-suggestion" :gap="0">
      <div class="fs-t" @click="toggleBtn">
        <span><i class="mvfont mv-close" /></span>
      </div>
      <div class="fs-c" @click="showPopup = true">
        <span>
          <i class="mvfont mv-jianyi" />
          <small>{{ $t('suggestion.suggestion') }}<br />{{ $t('suggestion.feedback') }}</small>
        </span>
      </div>
    </FloatingBubble>

    <Popup v-model:show="showPopup" position="bottom" closeable :overlay="true" round>
      <div class="suggestion-popup">
        <div class="su-title">{{ $t('suggestion.suggestion') + $t('suggestion.feedback') }}</div>
        <div class="su-content">
          <div class="su-banner">
            <i class="mvfont mv-guangbo" />
            <p>
              {{ t('suggestion.officialDomain') }}<b>{{ appStore.spareData.OfficialDomain }}</b> <span class="copy" :data-clipboard-text="appStore.spareData.OfficialDomain"><i class="mvfont mv-fuzhi" /></span><br />
              {{ t('suggestion.email') }}<b>{{ appStore.spareData.Email }}</b> <span class="copy" :data-clipboard-text="appStore.spareData.Email"><i class="mvfont mv-fuzhi" /></span> 可获得最新地址
            </p>
          </div>
          <Form ref="formRef" @submit="onSubmit">
            <CellGroup>
              <Field v-model="form.FeedbackType" :label="$t('suggestion.feedbackType')" name="FeedbackType" :rules="[{ required: true, message: '请选择反馈类型' }]" required input-align="right">
                <template #input>
                  <RadioGroup v-model="form.FeedbackType" direction="horizontal">
                    <Radio name="1">{{ $t('suggestion.contentError') }}</Radio>
                    <Radio name="2">{{ $t('suggestion.findResource') }}</Radio>
                    <Radio name="3">{{ $t('suggestion.feedbackSuggestion') }}</Radio>
                    <Radio name="4">{{ $t('suggestion.videoError') }}</Radio>
                    <Radio name="5">{{ $t('suggestion.other') }}</Radio>
                  </RadioGroup>
                </template>
              </Field>
              <Field v-model="form.Content" :label="$t('suggestion.messageContent')" name="Content" type="textarea" :placeholder="$t('suggestion.messagePlaceholder')" :rules="[{ required: true, message: $t('suggestion.enterMessage') }]" required />
            </CellGroup>
            <Button round block native-type="submit" class="mt-16 btn btn1">{{ $t('common.submit') }}</Button>
          </Form>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits } from 'vue'
import { Popup, Form, Field, RadioGroup, Radio, Button, CellGroup, showSuccessToast, FloatingBubble } from 'vant'
import { useAppStore } from '@/store/app'
import { copy } from '@/utils'
import { userSuggestion } from '@/api/user'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const offset = ref({ x: 0, y: 400 })

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
    showSuccessToast(t('suggestion.submitSuccess'))
    form.value.FeedbackType = ''
    form.value.Content = ''
  } catch (error) {
    console.error('提交失败', error)
  }
}

onMounted(() => {
  copy('.copy')
  // const script = document.createElement('script')
  // script.src = '/stat.js'
  // script.async = true
  // document.body.appendChild(script)

  // 计算偏移量
  const bubbleWidth = 64 // 浮动元素的宽度
  const rightMargin = 25 // 距离右侧的距离
  offset.value.x = window.innerWidth - bubbleWidth - rightMargin
})
</script>
