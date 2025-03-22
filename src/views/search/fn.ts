export function enumToArray<T>(e: T): T[keyof T][] {
  return Object.keys(e)
    .filter(key => isNaN(Number(key)))
    .map(key => e[key as keyof T])
}

export function enumEntries<T>(e: T): { channelName: string; channelId: string; index: number }[] {
  return Object.keys(e)
    .filter(key => isNaN(Number(key)))
    .map((key, index) => ({ channelName: key, channelId: e[key as keyof T] as string, index }))
}

export function isImageFile(fileName: string) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.tiff', '.svg']
  const extension = fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2).toLowerCase()
  return imageExtensions.includes(`.${extension}`)
}
