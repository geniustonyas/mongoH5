import { getAssetsFile } from './index'
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
  textDom.focus()
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
    selection.removeAllRanges()
    selection.addRange(range)
  }

  // 插入表情
  const textNode = document.createTextNode(value)
  range.insertNode(textNode)

  // 更新光标位置到新插入的节点后面
  range.setStartAfter(textNode)
  range.setEndAfter(textNode)
  selection.removeAllRanges()
  selection.addRange(range)

  // 确保输入框保持聚焦状态
  textDom.focus()

  // 滚动到最右边
  textDom.scrollLeft = textDom.scrollWidth
}

/**
 * @description 删除光标前面的文字
 */
export function deleteEmoji() {
  const textDom = document.getElementById('commentContent')
  if (!textDom) return

  const selection = window.getSelection()
  if (!selection || selection.rangeCount === 0) return

  const range = selection.getRangeAt(0)

  // 如果光标在文本节点中
  if (range.startContainer.nodeType === Node.TEXT_NODE) {
    const textNode = range.startContainer as Text
    const offset = range.startOffset

    if (offset > 0) {
      // 检查前一个字符是否是表情的结束符号
      const prevChar = textNode.textContent?.charAt(offset - 1)
      if (prevChar === ']') {
        // 找到表情的开始符号
        const start = textNode.textContent?.lastIndexOf('[', offset - 1)
        if (start !== undefined && start !== -1) {
          const potentialEmoji = textNode.textContent?.substring(start, offset)
          // 检查是否是有效的表情符号
          if (isValidEmoji(potentialEmoji)) {
            // 删除整个表情
            textNode.deleteData(start, offset - start)
            range.setStart(textNode, start)
            range.setEnd(textNode, start)
            selection.removeAllRanges()
            selection.addRange(range)
            textDom.focus() // 重新聚焦
            return
          }
        }
      }
      // 如果不是有效的表情符号，删除单个字符
      textNode.deleteData(offset - 1, 1)
      range.setStart(textNode, offset - 1)
      range.setEnd(textNode, offset - 1)
      selection.removeAllRanges()
      selection.addRange(range)
    }
  } else {
    // 如果光标在非文本节点中，尝试删除前一个节点
    const prevNode = range.startContainer.childNodes[range.startOffset - 1]
    if (prevNode) {
      prevNode.parentNode?.removeChild(prevNode)
    }
  }

  // 确保输入框保持聚焦状态
  textDom.focus()
}

// 检查字符串是否是有效的表情符号
function isValidEmoji(potentialEmoji: string): boolean {
  // 这里假设有一个表情符号列表 `emojis`，可以根据需要调整
  return emojis.some((emoji) => `[${emoji.title}]` === potentialEmoji)
}

// 创建一个方法来解析评论内容中的表情符号
export function parseEmojis(content: string): string {
  if (content && content.length > 0) {
    emojis.forEach((item) => {
      const reg = '/\\' + item.title.replace(']', '\\]') + '/g'
      content = content.replace(eval(reg), `<img src="${getAssetsFile(`emoji/${item.src}`)}" alt="${item.title}" />`)
    })
  }
  return content
}
