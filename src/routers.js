export default function (router) {
    router.map({
      '/':{
        name:'home',
        component:function (resolve) {
          require(['./views/index.vue'],resolve);
        }
      },
      '/login':{
        name:'home',
        component:function (resolve) {
          require(['./views/login.vue'],resolve);
        }
      },
      '/table':{
        name:'table',
        component:function(resolve){
          require(['./views/table.vue'],resolve);
        }
      }
    })
}
