<template>
  <div class="container">
    <h1 class="title">欢迎来到Cloud-Book后台管理系统</h1>
    <div class="login-box">
      <h2>请登录</h2>
      <div class="login">
        <el-form>
          <el-form-item label="用户名">
            <el-input v-model="formData.username" placeholder="请输入用户名" :clearable="true"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="formData.password" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-form>
            <el-button class="login-btn" @click="handleLogin" type="primary" :loading="isLoading">
              登陆
            </el-button>
      </div>
    </div>
  </div>
    
</template>

<script>
    export default {
      data() {
        return {
          formData: {
            username:'',
            password:''
          },
          isLoading: false
        }
      },
      methods: {
        handleLogin() {
            this.isLoading = true
            this.$axios.post('/login', this.formData).then(res => {
              console.log(res)
              if (res.code == 200){
                  this.$message.success('登录成功');
                  setTimeout(() => {
                    this.$router.push('/layout/index')
                  }, 1000)
              } else{
                this.$message.error(res.msg)
              }
              this.isLoading = false
            }).catch(err => {
              this.isLoading = false
            })
        }
      }
    }
</script>

<style scoped lang="scss">
.container{
  min-height: 100vh;
  background-color: #545c64;
  overflow: hidden;
  .title{
    color: #fff;
    text-align: center;
    margin-top: 50px;
  }
  .login-box {
    width: 500px;
    height: 350px;
    background: #fff;
    border: 1px solid #8e8e8e;
    margin: 20px auto;
    border-radius: 6px;
  }
  h2{
    text-align: center;
    margin-top: 20px;
    font-weight: 400;
    color: #333;
  }
  .login {
    margin-top: 20px;
    padding: 0 40px;
  }
  .login-btn {
    width: 100%;
    box-sizing: border-box;
  }

}
</style>
