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
      <div class="fs-t" @click="emit('update:showBtn', false)">
        <span><i class="mvfont mv-close" /></span>
      </div>
      <div class="fs-c" @click="emit('update:showPopup', true)">
        <span>
          <i class="mvfont mv-jianyi" />
          <small>建议<br />反馈</small>
        </span>
      </div>
    </FloatingBubble>

    <Popup v-model:show="showPopupLocal" position="bottom" closeable :overlay="true" round>
      <div class="suggestion-popup">
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
              <Field v-model="form.Content" label="留言内容" name="Content" type="textarea" placeholder="请尽可能详细描述您的问题, 以方面我们快速改进" :rules="[{ required: true, message: '请输入留言内容' }]" required />
            </CellGroup>
            <Button round block native-type="submit" class="mt-16 btn btn1">提交</Button>
          </Form>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, defineProps, defineEmits, watch } from 'vue'
  import { Popup, Form, Field, RadioGroup, Radio, Button, CellGroup, showSuccessToast, FloatingBubble } from 'vant'
  import { useAppStore } from '@/store/app'
  import { copy } from '@/utils'
  import { userSuggestion } from '@/api/user'

  const offset = ref({ x: 0, y: 400 })

  const props = defineProps<{
    showBtn: boolean
    showPopup: boolean
  }>()

  const showPopupLocal = ref(props.showPopup)

  const emit = defineEmits(['update:showBtn', 'update:showPopup'])

  watch(
    () => props.showPopup,
    newValue => {
      showPopupLocal.value = newValue
    }
  )

  // 监听 showPopupLocal 的变化并通知父组件
  watch(showPopupLocal, newValue => {
    emit('update:showPopup', newValue)
  })

  const appStore = useAppStore()

  const form = ref({
    ContentType: '0', // 固定为 0
    FeedbackType: '', // 用户选择
    VideoErrorType: '',
    SourceId: '',
    Content: '' // 用户输入
  })

  const onSubmit = async () => {
    try {
      await userSuggestion(form.value)
      emit('update:showPopup', false)
      showSuccessToast('提交成功, 感谢您的反馈')
      form.value.FeedbackType = ''
      form.value.Content = ''
    } catch (error) {
      console.error('提交失败', error)
    }
  }

  onMounted(() => {
    copy('.copy')
    // 计算偏移量
    const bubbleWidth = 64 // 浮动元素的宽度
    const rightMargin = 25 // 距离右侧的距离
    offset.value.x = window.innerWidth - bubbleWidth - rightMargin
  })
</script>
