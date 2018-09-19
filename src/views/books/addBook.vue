<template>
    <div class="add">
      <h1>我是添加图书</h1>
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>添加分类</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="addBook">
        <el-form label-position="left" label-width="100px" :model="formData">
          <el-form-item label="图书头像">
            <upload-img v-model="formData.icon"></upload-img>
          </el-form-item>
          <el-form-item label="作者:">
            <el-input v-model="formData.author"></el-input>
          </el-form-item>
          <el-form-item label="链接:">
            <el-input v-model="formData.url"></el-input>
          </el-form-item>
          <el-form-item label="分类:">
            <template>
              <el-select v-model="formData.type" placeholder="请选择">
                <el-option
                  v-for="item in list"
                  :key="item.title"
                  :label="item.title"
                  :value="item._id">
                </el-option>
              </el-select>
            </template>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleClick" type="primary">确定提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
  import uploadImg from '../../components/uploadImg'
    export default {
      components: {
        uploadImg
      },
      name: "addBook",
      data() {
        return {
          formData: {

          },
          list: []
        }
      },
      methods: {
        handleClick() {},
      }
    }
</script>

<style scoped>

</style>
