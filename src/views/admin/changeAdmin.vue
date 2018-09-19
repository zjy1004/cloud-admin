<template>
    <div class="change"><h1>我是修改个人信息</h1>
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>管理员用户</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="channge-admin">
        <el-form label-position="left" label-width="100px" :model="formData">
          <el-form-item label="头像">
            <upload-img v-model="formData.avatar"></upload-img>
          </el-form-item>
          <el-form-item label="用户名:">
            <el-input v-model="formData.username" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="昵称:">
            <el-input v-model="formData.nickname"></el-input>
          </el-form-item>
          <el-form-item label="邮箱:">
            <el-input v-model="formData.email"></el-input>
          </el-form-item>
          <el-form-item label="个性签名:">
            <el-input v-model="formData.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleClick" type="primary">保存更改</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

</template>

<script>
  import axios from 'axios'
  import uploadImg from '../../components/uploadImg'


  export default {
      components: {uploadImg,},
      name: "changeAdmin",
      data () {
        return {
          formData:{
            username: '',
            nickname: '',
            desc: '',
            email: '',
            avatar: ''
          },
        }
      },
      methods: {
        initData() {
          this.formData = {
            ...this.$store.state.userinfo
          }
        },
        handleClick() {
          this.$axios.put('/user/userInfo', this.formData).then(res => {
            console.log(res);
            if(res.code == 200){
              this.$message.success('修改成功')
              this.$store.commit('CHANGE_USERINFO', res.data)
              this.initData()
            }else {
              this.$message.error(res.msg)
            }
          })
        },
      },
    created () {
        this.initData()
    }
    }
</script>

<style scoped lang="scss">
  .change{
   .channge-admin{
    width: 500px;
    margin: 0 auto;
  }

  }
</style>
