<template>
    <div class="addadmin">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>添加管理员</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="admin-user">
        <el-form :label-position="labelPosition" label-width="100px" :model="formData">
          <el-form-item label="头像">
           <upload-img></upload-img>
          </el-form-item>
          <el-form-item label="用户名:">
            <el-input v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="昵称:">
            <el-input v-model="formData.nickname"></el-input>
          </el-form-item>
          <el-form-item label="密码:">
            <el-input v-model="formData.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码:">
            <el-input v-model="formData.checkPassword"></el-input>
          </el-form-item>
          <el-form-item label="邮箱:">
            <el-input v-model="formData.email"></el-input>
          </el-form-item>
          <el-form-item label="个性签名:">
          <el-input v-model="formData.desc"></el-input>
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
        name: "addAdmin",
      data () {
          return {
            imageUrl: '',
            labelPosition: 'left',
            formData: {
              username: '',
              password: '',
              checkPassword: '',
              nickname: '',
              desc: '',
              email: '',
              avatar: ''
            },
          }
      },
      methods: {
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        handleClick() {

        },
      },
    }
</script>

<style scoped lang="scss">
  .addadmin{
   .admin-user{
    width: 500px;
    margin: 0 auto;
   }

}

</style>
