<template>
    <div class="change">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>修改密码</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!--<div class="changePwd">-->
        <!--<el-form :model="passData" status-icon :rules="rules" ref="passData" label-width="80px" label-position="left">-->
          <!--<el-form-item label="旧密码" prop="oldPwd">-->
            <!--<el-input type="password" v-model="passData.oldPwd" autocomplete="off"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="新密码" prop="newPwd">-->
            <!--<el-input type="password" v-model="passData.newPwd" autocomplete="off"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item>-->
            <!--<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>-->
            <!--<el-button @click="resetForm('ruleForm2')">重置</el-button>-->
          <!--</el-form-item>-->
        <!--</el-form>-->
      <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "changePwd",
      data() {

        return {
          passData: {
            oldPwd: '',
            newPwd: ''
          },
          rules: {
            oldPwd: [
              { validator: validatePass, trigger: 'blur' }
            ],
            newPwd: [
              { validator: validatePass, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {

        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
    }
</script>

<style scoped lang="scss">
.change{
  .changePwd{
    width: 500px;
    margin-top: 20px;
    margin-left: 20px;
  }
}
</style>
