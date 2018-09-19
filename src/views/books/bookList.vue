<template>
    <div class="book">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>图书列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="bookList">
        <el-table
          :data="tableData"
          border
          style="width: 100%; text-align: center;">
          <el-table-column
            prop="desc"
            label="头像"
            width="150">
            <template slot-scope="scope">
              <img :src="scope.row.img" class="icon">
            </template>
          </el-table-column>
          <el-table-column
            prop="author"
            width="150"
            label="作者">
          </el-table-column>
          <el-table-column
            prop="index"
            width="100"
            label="index">
          </el-table-column>
          <el-table-column
            prop="createTime"
            width="300"
            label="创建时间">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="small"  @click="handleEdit(scope.row._id)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(sscope.row._id)">删除</el-button>
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
        name: "bookList",
      data () {
          return {
            tableData: [],
            pn: 1,
          }
      },
      methods: {
          getBooks() {
            this.$axios.get('/book', {pn: this.pn, size: 6}).then(res => {
              console.log(res)
              if (res.code == 200) {
                this.tableData = res.data
              }
            })
          },
        handleEdit(id) {
            this.$router.push(`/layout/editBook?id=${id}`)
        },
        handleDelete() {},
          pageChange(pn) {
            this.pn = pn
            this.getBook()
          }
      },
      created () {
          this.getBooks()
      }
    }
</script>

<style scoped lang="scss">
  .book{
    .bookList{
      margin-top: 20px;
      position: relative;
    .icon{
      width: 50px;
      height: 50px;
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
