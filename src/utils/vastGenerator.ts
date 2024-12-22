export interface VastAdOptions {
  /** 广告的唯一标识符 */
  id: string | number

  /** 广告的标题 */
  title: string

  /** 广告的持续时间，格式为 "HH:MM:SS"，默认为 "00:00:15" */
  duration?: string

  /** 广告可跳过的时间，单位为秒 */
  skipOffset?: number

  /** 用户点击广告时跳转的URL */
  clickThrough?: string

  /** 媒体文件列表，包含广告的不同格式和传输方式 */
  mediaFiles: {
    /** 媒体文件的URL */
    url: string

    /** 媒体文件的MIME类型，例如 "video/mp4" 或 "application/x-mpegURL" */
    type: string

    /** 媒体文件的宽度（可选） */
    width?: number

    /** 媒体文件的高度（可选） */
    height?: number

    /** 媒体文件的传输方式，"progressive" 或 "streaming" */
    delivery?: 'progressive' | 'streaming'
  }[]

  /** 展示广告时的追踪URL列表（可选） */
  impressionUrls?: string[]

  /** 广告播放过程中不同事件的追踪URL列表（可选） */
  trackingEvents?: {
    /** 追踪的事件类型，例如 "start", "complete" 等 */
    event: 'start' | 'firstQuartile' | 'midpoint' | 'thirdQuartile' | 'complete' | 'progress' | 'pause' | 'resume'

    /** 事件发生时的追踪URL */
    url: string
  }[]

  /** 非线性广告（如图片广告）的列表 */
  nonLinearAds?: {
    /** 图片广告的URL */
    url: string

    /** 图片广告的宽度 */
    width: number

    /** 图片广告的高度 */
    height: number

    /** 点击图片广告时跳转的URL */
    clickThrough: string
  }[]
}

export class VastGenerator {
  /** 单例实例 */
  private static instance: VastGenerator

  /** 私有构造函数，防止外部实例化 */
  private constructor() {}

  /**
   * 获取单例实例
   * @returns VastGenerator的单例实例
   */
  static getInstance(): VastGenerator {
    if (!VastGenerator.instance) {
      VastGenerator.instance = new VastGenerator()
    }
    return VastGenerator.instance
  }

  /**
   * 生成VAST XML字符串
   * @param options VastAdOptions对象，包含广告的配置信息
   * @returns 生成的VAST XML字符串
   */
  generateVastXml(options: VastAdOptions): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
<VAST version="3.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="vast.xsd">
  <Ad id="${options.id}">
    <InLine>
      <AdSystem>Custom Ad Server</AdSystem>
      <AdTitle>${options.title}</AdTitle>
      <Description><![CDATA[${options.title} ad description]]></Description>
      <Error><![CDATA[https://example.com/error]]></Error>
      ${this.generateImpressions(options.impressionUrls)}
      <Creatives>
        ${this.generateNonLinearAds(options.nonLinearAds)}
      </Creatives>
      <Extensions>
        <Extension type="geo">
          <Country>US</Country>
          <Bandwidth>0</Bandwidth>
        </Extension>
      </Extensions>
    </InLine>
  </Ad>
</VAST>`
  }

  /**
   * 生成Impression标签的XML字符串
   * @param urls Impression的URL列表
   * @returns 生成的Impression标签XML字符串
   */
  private generateImpressions(urls?: string[]): string {
    if (!urls?.length) return ''
    return urls.map((url) => `<Impression><![CDATA[${url}]]></Impression>`).join('\n')
  }

  /**
   * 生成NonLinearAds标签的XML字符串
   * @param ads 非线性广告的列表
   * @returns 生成的NonLinearAds标签XML字符串
   */
  private generateNonLinearAds(ads?: VastAdOptions['nonLinearAds']): string {
    if (!ads?.length) return ''
    return ads
      .map((ad) => `
        <Creative id="${ad.url}-nonlinear" sequence="1">
          <NonLinearAds>
            <NonLinear width="${ad.width}" height="${ad.height}">
              <StaticResource creativeType="image/jpeg"><![CDATA[${ad.url}]]></StaticResource>
              <NonLinearClickThrough><![CDATA[${ad.clickThrough}]]></NonLinearClickThrough>
            </NonLinear>
          </NonLinearAds>
        </Creative>
      `).join('\n')
  }
}
