import Vue from 'vue'
import Router from 'vue-router'

const components = {
  login: () => import('@/views/login/login'),
  layout: () => import('@/views/layout/layout'),
  index: () => import('@/views/index/index'),

  adminList: () => import('@/views/admin/adminList'),
  changeAdmin: () => import('@/views/admin/changeAdmin'),
  changePwd: () => import('@/views/admin/changePwd'),
  addAdmin: () => import('@/views/admin/addAdmin'),

  cateList: () => import('@/views/category/cateList'),
  addCate: () => import('@/views/category/addCate'),
  editCate: () => import('@/views/category/editCate'),
  cateDetail: () => import('@/views/category/cateDetail'),

  bookList: () => import('@/views/books/bookList'),
  addBook: () => import('@/views/books/addBook'),
  editBook: () => import('@/views/books/editBook'),

  swiperList: () => import('@/views/swiper/swiperList'),
  changeSwiper: () => import('@/views/swiper/changeSwiper'),
  addSwiper: () => import('@/views/swiper/addSwiper'),



};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: components.login
    },
    {
      path: '/layout',
      name: 'layout',
      component: components.layout,
      redirect: '/layout/index',
      meta:{
        title: '首页'
      },
      children: [
        {
          path: 'index',
          component: components.index,
        },
        {
          path: 'adminList',
          component: components.adminList,
          meta: {
            title: '管理员用户'
          },
        },
        {
          path: 'changeAdmin',
          component: components.changeAdmin,
        },
        {
          path: 'changePwd',
          component: components.changePwd,
        },
        {
          path: 'addAdmin',
          component: components.addAdmin,
        },
        {
          path: 'cateList',
          component: components.cateList,
        },
        {
          path: 'addCate',
          component: components.addCate,
        },
        {
          path: 'editCate',
          component: components.editCate,
        },
        {
          path: 'cateDetail',
          component: components.cateDetail,
        },

        {
          path: 'bookList',
          component: components.bookList,
        },
        {
          path: 'addBook',
          component: components.addBook,
        },
        {
          path: 'editBook',
          component: components.editBook,
        },
        {
          path: 'swiperList',
          component: components.swiperList,
        },
        {
          path: 'changeSwiper',
          component: components.changeSwiper,
        },
        {
          path: 'addSwiper',
          component: components.addSwiper,
        },
      ]
    },
  ]
})
