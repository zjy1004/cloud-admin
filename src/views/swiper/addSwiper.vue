<template>
  <div class="add">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>添加轮播图</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="addSwiper">
      <el-form label-position="left" label-width="100px" :model="formData">
        <el-form-item label="图片">
          <upload-img v-model="formData.img"></upload-img>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="BookId">
          <el-input v-model="formData.id"></el-input>
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

      handleClick() {
        this.$axios.post(`/swiper`, this.formData).then(res => {
          console.log(res)
          if (res.code == 200) {
            this.$message.success('添加成功')
            this.$router.push('/layout/swiperList')
          }else {
            this.$message.error(res.msg)
          }
        })
      },
    },
  }
</script>

<style scoped lang="scss">
  .add{
    .addSwiper{
      margin-top: 20px;
      margin-left: 20px;
      width: 500px;
    }
  }
  </style>
