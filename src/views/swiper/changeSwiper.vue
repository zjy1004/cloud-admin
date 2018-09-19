<template>
    <div class="change">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>编辑轮播图</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="changeSwiper">
        <el-form label-position="left" label-width="100px" :model="formData">
          <el-form-item label="图片">
            <upload-img v-model="formData.img"></upload-img>
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="formData.title"></el-input>
          </el-form-item>
          <el-form-item label="index">
            <template>
              <el-input-number v-model="formData.index" :min="1" :max="998" ></el-input-number>
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
      name: "changeSwiper",
      data() {
        return {
          formData:{
            img: '',
            title: '',
            index: '',
            id: ''
          },

        }
      },
    methods: {
      getSwiper() {
        let id = this.$route.query.id
        this.$axios.get(`/swiper/${id}`).then(res => {
          console.log(res)
          if (res.code == 200) {
            this.formData = res.data
            this.formData.id = res.data.book._id
          }
        })
      },
      handleClick() {
        let id = this.$route.query.id
        this.$axios.put(`/swiper/${id}`, this.formData).then(res => {
          console.log(res)
          if (res.code == 200) {
            this.$message.success('修改成功')
            this.getSwiper()
          }else {
            this.$message.error(res.msg)
          }
        })
      },
    },
    created() {
        this.getSwiper()
    }
  }
</script>

<style scoped lang="scss">
  .change{
    .changeSwiper{
      margin-top: 20px;
      margin-left: 20px;
      width: 500px;
    }
  }

</style>
