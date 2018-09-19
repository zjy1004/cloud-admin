<template>
  <div class="edit">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>编辑分类</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="editCate">
      <el-form label-position="left" label-width="100px" :model="formData">
        <el-form-item label="分类图标">
          <upload-img v-model="formData.icon"></upload-img>
        </el-form-item>
        <el-form-item label="分类名">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="index">
          <template>
            <el-input-number v-model="formData.index" :min="1" :max="998" ></el-input-number>
          </template>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleClick" type="primary">确定修改</el-button>
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
      name: "editCate",
      data() {
          return {
            formData: {
              icon: '',
              title: '',
              index: ''
            }
          }
      },
      methods: {
        getCate() {
          let id = this.$route.query.id
          this.$axios.get(`/category/${id}`, this.formData).then(res => {
            this.formData = res.data
          })
        },
        handleClick() {
          let id = this.$route.query.id
            this.$axios.put(`category/${id}`, this.formData).then(res => {
              if (res.code == 200) {
                this.$message.success('修改成功')
                this.getCate()
              } else {
                this.$message.error(res.msg)
              }
              setTimeout(() => {
                this.$router.push('/layout/cateList')
              },1000)
            })
        },
      },
      created() {
        this.getCate()
      }
    }
</script>

<style scoped lang="scss">
.edit{
  .editCate{
    margin-left: 20px;
    margin-top: 20px;
    width: 600px;
  }
}
</style>
