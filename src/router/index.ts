import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout/Layout.vue';
import LayoutRouter from '@/views/layout/RouterView.vue'
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

export const constantRouterMap = [
  { path: '/login', component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue') },
  { path: '/register', component: () => import(/* webpackChunkName: "register" */ '@/views/register/index.vue') },
  { path: '/404', component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue') },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/fishingmange/index',
  //   name: '首页',
  //   meta: { hidden: true },
  //   children: [{
  //     path: 'dashboard',
  //     component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
  //   }],
  // },
  {
    path: '/',
    component: Layout,
    redirect: '/fishingmange',
    children: [
      {
        path: '/fishingmange',
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
  {
    path: '/managelog',
    name: 'ManageLog',
    component: Layout,
    redirect: '/managelog/productlog',
    meta: {  title: '日志管理', icon: '导航栏/日志管理.png' },
    children: [
      {
        path: 'productlog',
        name: 'productlog',
        component: LayoutRouter,
        redirect: '/managelog/productlog/index',
        children: [
          {
            path: 'index',
            name: 'ProductLog',
            component: () => import(/* webpackChunkName: "productlog" */ '@/views/productlog/index.vue'),
            meta: {  title: '生产日志', icon: '导航栏/日志管理.png' },
          },
          {
            path: '/managelog/productlog/index/salerecord',
            name: 'SaleRecord',
            component: () => import(/* webpackChunkName: "salerecord" */ '@/views/productlog/SaleRecord.vue'),
            meta: { title: '销售记录', hidden: true},
          },
          {
            path: '/managelog/productlog/index/retrospectinfo',
            name: 'RetrospectInfo',
            component: () => import(/* webpackChunkName: "salerecord" */ '@/views/productlog/RetrospectInfo.vue'),
            meta: { title: '追溯信息', hidden: true},
          },
          {
            path: '/managelog/productlog/index/logdetail',
            name: 'LogDetail',
            component: () => import(/* webpackChunkName: "salerecord" */ '@/views/productlog/LogDetail.vue'),
            meta: { title: '日志详情', hidden: true},
          }
        ]
      }
    ],
  },
  {
    path: '/managegoods',
    name: 'ManageGoods',
    component: Layout,
    redirect: '/managegoods/foods/index',
    meta: {  title: '物资管理', icon: '导航栏/饲料管理.png' },
    children: [
      {
        path: 'foods',
        name: 'Foods',
        component: LayoutRouter,
        redirect: '/managegoods/foods/index',
        children: [
          {
            path: 'index',
            name: 'Index',
            component: () => import(/* webpackChunkName: "productlog" */ '@/views/managegoods/index.vue'),
            meta: {  title: '物资管理', icon: '导航栏/饲料管理.png'},
          },
          {
            path: 'detail',
            name: 'Detail',
            component: () => import(/* webpackChunkName: "productlog" */ '@/views/managegoods/FoodDetail.vue'),
            meta: { title: '饲料详情', hidden: true},
          }
        ]
      }
      
    ]
  },
  { path: '*', redirect: '/404' },
]



export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  base: process.env.BASE_URL,
  routes: constantRouterMap
});
