<template>
    <div class="admin">
      <h2>我是管理员列表</h2>
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>管理员用户</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="admin-user">
        <el-table
          :data="tableData"
          border
          style="width: 100%; text-align: center;">
          <el-table-column
            prop="desc"
            label="头像"
            width="130"
            style="text-align: center">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" class="avatar">
            </template>
          </el-table-column>
          <el-table-column
            label="姓名"
            width="150">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.username }}</p>
                <p>个性签名: {{ scope.row.desc }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.username }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            prop="nickname"
            width="150"
            label="昵称">
          </el-table-column>
          <!--<el-table-column-->
          <!--prop="desc"-->
          <!--width="250"-->
          <!--label="个性签名">-->
          <!--</el-table-column>-->
          <el-table-column
            prop="createdTime"
            width="220"
            label="创建日期">
          </el-table-column>
          <el-table-column
            prop="email"
            width="250"
            label="邮箱">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="small" type="primary" @click="handleDetail(scope.$index, scope.row)">查看详细</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

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
          },
        handleDetail() {
            this.$router.push('/layout/changeAdmin')
        },
        handleDelete(index, row) {
              console.log(index,row)
        },
      },
      created() {
          this.getData()
      }
    }
</script>

<style scoped lang="scss">
  .admin-user{
    margin-left: 20px;
    .avatar{
      width: 60px;
      height: 60px;
      border-radius: 100px;
    }
  }

</style>
