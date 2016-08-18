export default function (router) {
    router.map({
      '/':{
        name:'login',
        component:function (resolve) {
          require(['./views/login.vue'],resolve);
        }
      },
      '/home':{
        name:'home',
        component:function (resolve) {
          require(['./views/index.vue'],resolve);
        }
      }
    })
}
