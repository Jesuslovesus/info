import controlCenter from '../controlCenter/index.vue'

export default [
  {
    path: '/user',
    redirect: '/user/info',
    component: controlCenter,
    children: [
      {
        path: '/user/info',
        alias: '/user/info/message',
        meta: {
          title: '用户信息'
        },
        component: resolve => {
          require(['./index'], resolve)
        },
        name: 'userCenter'
        // children:
      }
    ]
  }
]
