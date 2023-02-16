import fetchMock from 'fetch-mock'
import Mock from 'mockjs'

const { Random } = Mock

fetchMock.get(
  '/api/course/states',
  Mock.mock({
    code: 0,
    msg: 'success',
    data: [
      {
        key: 'All',
        name: '全部'
      },
      {
        key: 'Active',
        name: '进行中'
      },
      {
        key: 'Completed',
        name: '已完成'
      }
    ]
  })
)

fetchMock.get(
  '/api/course/tags',
  Mock.mock({
    code: 0,
    msg: 'success',
    data: ['vue', 'react', 'vite', 'webpack']
  })
)

fetchMock.post(
  RegExp('/api/course/columns' + '.*'),
  Mock.mock({
    code: 0,
    msg: 'success',
    data: {
      total: Random.natural(10, 25),
      current: 1,
      size: 10,
      'records|1-10': [
        {
          'id|+1': 0,
          img: Random.image('160x128'),
          title: Random.ctitle(),
          description: Random.cparagraph(),
          statistics: {
            starCount: Random.natural(0, 5),
            courseCount: {
              current: Random.natural(0, 20),
              total: Random.natural(20, 45)
            },
            tags: ['vue', 'react', 'webpack'].slice(0, Random.natural(1, 3))
          }
        }
      ]
    }
  })
)

fetchMock.get(
  'express:/api/course/detail/:courseId',
  Mock.mock({
    code: 0,
    msg: 'success',
    data: {
      id: Random.id(),
      img: Random.image('160x128'),
      title: Random.ctitle(),
      description: Random.cparagraph(10),
      statistics: {
        starCount: Random.natural(0, 5),
        courseCount: {
          current: Random.natural(0, 20),
          total: Random.natural(20, 45)
        },
        tags: ['vue', 'react', 'webpack'].slice(0, Random.natural(1, 2))
      },
      author: {
        avatar: '/logo.png',
        name: 'Sha Xu Tang',
        description: 'Web Engineer'
      }
    }
  })
)

fetchMock.mock(
  'express:/api/course/catalogue/:courseId',
  Mock.mock({
    code: 0,
    msg: 'success',
    'data|1-45': [
      {
        'episode|+1': 1,
        video:
          'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
        totalTime: '3600',
        title: Random.ctitle(),
        description: Random.cparagraph()
      }
    ]
  })
)
