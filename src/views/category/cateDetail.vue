<template>
    <div class="detail">
      <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>分类详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

      <div class="cateDetail">
        <h3>{{this.title}}</h3>
        <el-table
          :data="tableData"
          border
          style="width: 100%; text-align: center;">
          <el-table-column
            prop="desc"
            label="头像"
            width="150">
            <template slot-scope="scope">
              <img :src="scope.row.img" class="img">
            </template>
          </el-table-column>
          <el-table-column
            prop="author"
            width="150"
            label="作者">
          </el-table-column>
          <el-table-column
            prop="createTime"
            width="300"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="index"
            width="100"
            label="index">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="small"  type="primary" @click="handleEdit(scope.row._id)">生成轮播图</el-button>
              <el-button size="small"  @click="handleDetail(scope.row._id)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "cateDetail",
      data () {
          return {
            tableData: [],
            title: ''
          }
      },
      methods: {
          getBook() {
            let id = this.$route.query.id
            this.$axios.get(`/category/${id}/books`).then(res => {
              if (res.code == 200) {
                console.log(res)
                this.tableData = res.data.books
                this.title = res.data.title
              }
            })
          }
      },
      created() {
          this.getBook()
      }
    }
</script>

<style scoped lang="scss">
  .detail{
    .cateDetail{
      margin-top: 20px;

      .img{
        width: 50px;
        height: 50px;
        border-radius: 100px;
      }
    }
  }

</style>
