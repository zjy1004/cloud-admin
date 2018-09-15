<template>
    <div class="admin-user">
      <h1>我是管理员列表</h1>
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>管理员用户</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="desc"
          label="头像"
          width="130">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" class="avatar">
          </template>
        </el-table-column>
        <el-table-column
          prop="nickname"
          width="150"
          label="昵称">
        </el-table-column>
        <el-table-column
          prop="desc"
          width="250"
          label="个性签名">
        </el-table-column>
        <el-table-column
          prop="createdTime"
          width="220"
          label="创建日期">
        </el-table-column>
        <el-table-column
          prop="email"
          width="300"
          label="邮箱">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "admin",
        data () {
             return {
             tableData: []
           }
        },
      methods: {
          getData() {
            this.$axios.get('/user').then(res => {
              if (res.code == 200){
                this.tableData = res.data
              }
            })
          }
      },
      created() {
          this.getData()
      }
    }
</script>

<style scoped lang="scss">
  .admin-user{
    .breadcrumb{

    }
    .avatar{
      width: 60px;
      height: 60px;
    }
  }

</style>
