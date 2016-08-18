export default function (router) {
    router.map({
      '/':{
        name:'home',
        component:function (resolve) {
          require(['./views/index.vue'],resolve);
        }
      },
      '/login':{
        name:'login',
        component:function (resolve) {
          require(['./views/login.vue'],resolve);
        }
      }
    })
}
