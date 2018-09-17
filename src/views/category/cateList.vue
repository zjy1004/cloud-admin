<template>
<div class="cate">
  <h1>我是分类列表</h1>
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
    width="150"
    label="ID">
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
      <el-button size="small"  @click="handleEdit(scope.$index, scope.row)">详情</el-button>
    <el-button size="small"  @click="handleDetail(scope.$index, scope.row)">详情</el-button>
    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
    </template>
    </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
    export default {
        name: "cateList",
      data() {
          return {
            tableData: [],
          }
      },
      methods:{
        getData() {
         this.$axios.get('/category').then(res => {
           console.log(res)
           this.tableData = res.data
         })
        },
        handleEdit() {},
        handleDetail() {},
        handleDelete() {},

    },
      created () {
          this.getData()
      }
    }
</script>

<style scoped lang="scss">
.cate{
  .cateList{
    .icon{
      width: 50px;
      height: 50px;
      border-radius: 100px;
    }
  }
}
</style>
