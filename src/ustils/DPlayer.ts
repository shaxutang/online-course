import DPlayer from 'dplayer'

/**
 * 创建DPlayer实例
 * @param url 视频地址
 */
export function createDPlayer(url: string, container: HTMLElement) {
  return new DPlayer({
    container,
    screenshot: true,
    video: {
      url
      //   pic: logoPNG,
      //   thumbnails: 'thumbnails.jpg'
    }
  })
}
