<template>
    <div class="admin">
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
              <el-button size="small" type="primary" @click="handleDetail(scope.row._id)">查看详细</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="pageChange"
          :page-size="5"
          :total="100">
        </el-pagination>
      </div>
    </div>
</template>

<script>
    export default {
        name: "admin",
        data () {
             return {
             tableData: [],
             count: 0,
             pn: 1
           }
        },
      methods: {
        getData() {
          this.$axios.get('/user',{pn: this.pn, size: 6}).then(res => {
            if (res.code == 200){
              this.count = res.count
              this.tableData = res.data
            }
         })
        },
        handleDetail(id) {
            this.$router.push('/layout/changeAdmin')
        },
        handleDelete(id) {
          this.$confirm('此操作将永久删除该分类, 是否继续?', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios.post('/user/delete', {userIds:[id]}).then(res => {
              if(res.code == 200) {
                this.$message.success(res.msg)
                this.getData()
              }
              else {

              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        pageChange(pn) {
          console.log(pn)
          this.pn = pn
          this.getData()
        },
      },
      created() {
          this.getData()
      }
    }
</script>

<style scoped lang="scss">
  .admin{
    .admin-user{
      margin-top: 20px;
      margin-left: 20px;
      position: relative;
      .avatar{
        width: 60px;
        height: 60px;
        border-radius: 100px;
      }
    }
    .page{
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }


</style>
