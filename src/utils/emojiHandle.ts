import emojis, { Emoji } from './emoji'

// 对表情分组
export function groupEmoji(): Emoji[][] {
  const groups: Record<string, Emoji[]> = {}
  emojis.forEach((item) => {
    const group = item.group
    groups[group] = groups[group] || []
    groups[group].push(item)
  })
  return Object.keys(groups).map((key) => groups[key])
}

/**
 * @description 在光标后插入文本
 * @param value  [String]要插入的文本
 */
export function inputEmoji(value: string) {
  const textDom = document.getElementById('commentContent')
  if (!textDom) return

  // 获取当前光标位置
  const selection = window.getSelection()
  let range

  if (selection && selection.rangeCount > 0) {
    range = selection.getRangeAt(0)
    range.deleteContents() // 删除选中的内容
  } else {
    // 如果没有选中内容或光标位置，创建一个新的 range
    range = document.createRange()
    range.selectNodeContents(textDom)
    range.collapse(false) // 将光标移动到内容末尾
  }

  // 使用 document.execCommand 插入文本
  textDom.focus()
  document.execCommand('insertText', false, value)

  // 确保输入框保持聚焦状态
  textDom.focus()

  // 检查光标是否在内容末尾
  if (range.endOffset === textDom.textContent.length) {
    // 滚动到最右边
    textDom.scrollLeft = textDom.scrollWidth
  }
}

/**
 * @description 删除光标前面的文字
 */
export function deleteEmoji() {
  const textDom = document.getElementById('commentContent') as HTMLTextAreaElement
  if (!textDom || !textDom.value) return

  const val = textDom.value
  // @ts-ignore
  if (document.selection) {
    // 兼容IE
    textDom.focus()
    // @ts-ignore
    const selectRange = document.selection.createRange()
    const cursorPos = selectRange.text.length
    selectRange.text = val.substring(0, cursorPos - 1) + val.substring(cursorPos, val.length)
    textDom.focus()
  } else if (textDom.selectionStart || textDom.selectionStart === 0) {
    // Firefox Safari
    const startPos = textDom.selectionStart
    const endPos = textDom.selectionEnd
    const scrollTop = textDom.scrollTop
    const lastChar = val.substring(startPos - 1, startPos)
    if (lastChar === ']') {
      const lastIndex = val.lastIndexOf('[', startPos)
      textDom.value = val.substring(0, lastIndex) + val.substring(endPos, val.length)
      textDom.focus()
      textDom.selectionStart = lastIndex
      textDom.selectionEnd = lastIndex
    } else {
      textDom.value = val.substring(0, startPos - 1) + val.substring(startPos, val.length)
      textDom.focus()
      textDom.selectionStart = startPos - 1
      textDom.selectionEnd = startPos - 1
    }
    textDom.scrollTop = scrollTop
  } else {
    textDom.value = val.substring(0, val.length - 1)
    textDom.focus()
  }
}
