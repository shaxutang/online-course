declare interface Episode {
  id: string | number
  /**
   * 课程ID
   */
  courseId: string
  /**
   * 集数
   */
  episode: string
  /**
   * 视频地址
   */
  video: string
  /**
   * 总时长
   */
  totalTime: string
  /**
   * 标题
   */
  title: string
  /**
   * 简介
   */
  description: string
}

declare type CourseCatalogue = Pick<
  Episode,
  'episode' | 'video' | 'title' | 'description'
>
