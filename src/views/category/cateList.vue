<template>
<div class="cate">
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>分类列表</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="cateList">
    <el-table
    :data="tableData"
    border
    style="width: 100%; text-align: center;">
    <el-table-column
    prop="desc"
    label="头像"
    width="150">
    <template slot-scope="scope">
    <img :src="scope.row.icon" class="icon">
    </template>
    </el-table-column>
    <el-table-column
    prop="title"
    width="150"
    label="类名">
    </el-table-column>
    <el-table-column
    prop="index"
    width="100"
    label="index">
    </el-table-column>
    <el-table-column
    prop="_id"
    width="300"
    label="typeId">
    </el-table-column>
    <el-table-column
    width="150"
    label="书的数量">
    <template slot-scope="scope" >
    <span>{{scope.row.books.length}}</span>
    </template>
    </el-table-column>
    <el-table-column label="操作">
    <template slot-scope="scope">
      <el-button size="small"  @click="handleEdit(scope.row._id)">编辑</el-button>
    <el-button size="small"  @click="handleDetail(scope.row._id)">详情</el-button>
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
        name: "cateList",
      data() {
          return {
            tableData: [],
            pn: 1,
            count: 0
          }
      },
      methods:{
        getData() {
         this.$axios.get('/category', { pn: this.pn, size: 5}).then(res => {
           console.log(res)
           this.tableData = res.data
         })
        },
        handleEdit(id) {
          this.$router.push(`/layout/editCate?id=${id}`)
        },
        handleDetail(id) {
          this.$router.push(`/layout/cateDetail?id=${id}`)
        },
        handleDelete(id) {
          this.$confirm('此操作将永久删除该管理员, 是否继续?', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios.delete(`/category/${id}`).then(res => {
              if(res.code == 200) {
                this.$message.success('成功删除该分类')
                this.getData()
              }
              else {
                this.$message.error('删除该分类失败')
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
          this.pn = pn
          this.getData()
        }

    },
      created () {
          this.getData()
      }
    }
</script>

<style scoped lang="scss">
.cate{
  .cateList{
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
