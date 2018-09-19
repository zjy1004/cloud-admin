<template>
  <div class="add">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>添加分类</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="addCate">
      <el-form label-position="left" label-width="100px" :model="formData">
        <el-form-item label="分类图标">
          <upload-img v-model="formData.icon"></upload-img>
        </el-form-item>
        <el-form-item label="分类名:">
          <el-input v-model="formData.title"></el-input>
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
        name: "addCate",
        data() {
          return {
            formData:{
              icon: '',
              title: ''
            }
          }
        },
        methods:{
          handleClick() {
            this.$axios.post('/category', this.formData).then( res => {
              if(res.code == 200) {
                console.log(res)
                this.$message.success('添加分类成功')
                this.$router.push('/layout/cateList')
              }else {
                this.$message.error(res.msg)
              }
            })
          },
        }
    }
</script>

<style scoped lang="scss">
  .add{
    .addCate{
      width: 600px;
      margin-top: 20px;
      margin-left: 20px;
    }
  }

</style>
