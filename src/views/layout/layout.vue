<template>
  <div class="layout">
    <div class="header ml-200"><h1 class="title">CloudBook后台管理</h1></div>
    <div class="side-bar">
      <el-menu
        :router="true"
        background-color="#2D3A4B"
        text-color="#fff"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/layout/index" @click="handleClick">首页</el-menu-item>
            <el-menu-item index="/login">登陆</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>管理员用户</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/layout/adminList">管理员列表</el-menu-item>
            <el-menu-item index="/layout/addAdmin">添加管理员</el-menu-item>
            <el-menu-item index="/layout/changeAdmin">修改个人信息</el-menu-item>
            <el-menu-item index="/layout/changePwd">修改密码</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>分类管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/layout/cateList">分类列表</el-menu-item>
            <el-menu-item index="/layout/addCate">添加分类</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>图书管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/layout/bookList">图书列表</el-menu-item>
            <el-menu-item index="/layout/addBook">添加图书</el-menu-item>
            <!--<el-menu-item index="/layout/editBook">编辑图书</el-menu-item>-->
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>轮播图管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/layout/swiperList">轮播图列表</el-menu-item>
            <el-menu-item index="/layout/changeSwiper">修改轮播图</el-menu-item>
            <el-menu-item index="/layout/addSwiper">添加轮播图</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="main-content ml-200">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  export default {
      name: "layout",
    methods: {
      handleClick() {
        this.$router.push('/layout/index')
      }
    }
  }
</script>

<style scoped lang="scss">
  .layout{
    .header{
      background-color: #2D3A4B;
    }
      .title{
        color: #fff;
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        line-height: 60px;
        height: 60px;
        border-bottom: 1px solid #f1f1f1;
      }
      .ml-200{
        margin-left: 200px;
      }
      .side-bar{
        position: fixed;
        width: 200px;
        left: 0;
        top: 0;
        bottom: 0;
        padding-top: 60px;
        color: #fff;
        overflow: hidden;
        background-color: #2D3A4B;
      }
      .main-content{
        padding: 15px;
      }
  }

</style>
