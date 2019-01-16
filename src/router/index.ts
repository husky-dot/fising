import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout/Layout.vue';

Vue.use(Router);

/*
  redirect:                      if `redirect: noredirect`, it won't redirect if click on the breadcrumb
  meta: {
    title: 'title'               the name showed in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    hidden: true                 if `hidden: true`, this route will not show in the sidebar (default is false)
    alwaysShow: true             if set to true, it will always show the root menu
                                 if not set, only show with nested mode if there are more than one route under its children
  }
*/

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  base: process.env.BASE_URL,
  routes: [
    { path: '/login', component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue') },
    { path: '/register', component: () => import(/* webpackChunkName: "register" */ '@/views/register/index.vue') },
    { path: '/404', component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue') },
    {
      path: '/',
      component: Layout,
      redirect: '/fishingmange/index',
      name: '首页',
      meta: { hidden: true },
      children: [{
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
      }],
    },
    {
      path: '/fishingmange',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'Fishingmange',
          component: () => import(/* webpackChunkName: "fishingmange" */ '@/views/fishingmange/index.vue'),
          meta: { title: '渔类管理', icon: '导航栏/渔场管理.png' },
        },
      ],
    },
    {
      path: '/devicemanage',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'DeviceManage',
          component: () => import(/* webpackChunkName: "devicemanage" */ '@/views/devicemanage/index.vue'),
          meta: { title: '设备管理', icon: '导航栏/设备管理.png' },
        },
      ],
    },
    // {
    //   path: '/nested',
    //   component: Layout,
    //   redirect: '/nested/menu1',
    //   name: 'Nested',
    //   meta: { title: 'Nested', icon: 'nested' },
    //   children: [
    //     {
    //       path: 'menu1',
    //       component: () => import(/* webpackChunkName: "menu1" */ '@/views/nested/menu1/index.vue'),
    //       name: 'Menu1',
    //       meta: { title: 'menu1' },
    //       children: [
    //         {
    //           path: 'menu1-1',
    //           component: () => import(/* webpackChunkName: "menu1-1" */ '@/views/nested/menu1/menu1-1/index.vue'),
    //           name: 'Menu1-1',
    //           meta: { title: 'menu1-1' },
    //         },
    //         {
    //           path: 'menu1-2',
    //           component: () => import(/* webpackChunkName: "menu1-2" */ '@/views/nested/menu1/menu1-2/index.vue'),
    //           name: 'Menu1-2',
    //           meta: { title: 'menu1-2' },
    //           children: [
    //             {
    //               path: 'menu1-2-1',
    //               component: () => import(/* webpackChunkName: "menu1-2-1" */ '@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
    //               name: 'Menu1-2-1',
    //               meta: { title: 'menu1-2-1' },
    //             },
    //             {
    //               path: 'menu1-2-2',
    //               component: () => import(/* webpackChunkName: "menu1-2-2" */ '@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
    //               name: 'Menu1-2-2',
    //               meta: { title: 'menu1-2-2' },
    //             },
    //           ],
    //         },
    //         {
    //           path: 'menu1-3',
    //           component: () => import(/* webpackChunkName: "menu1-3" */ '@/views/nested/menu1/menu1-3/index.vue'),
    //           name: 'Menu1-3',
    //           meta: { title: 'menu1-3' },
    //         },
    //       ],
    //     },
    //     {
    //       path: 'menu2',
    //       component: () => import(/* webpackChunkName: "menu2" */ '@/views/nested/menu2/index.vue'),
    //       name: 'Menu2',
    //       meta: { title: 'menu2' },
    //     },
    //   ],
    // },
    { path: '*', redirect: '/404' },
  ],
});
