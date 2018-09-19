<template>
    <div class="edit">
      <h1>编辑图书</h1>
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>图书编辑</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="editBook">
        <el-form label-position="left" label-width="80px" :model="formData">
          <el-form-item label="头像:">
            <upload-img v-model="formData.img"></upload-img>
          </el-form-item>
          <el-form-item label="作者:">
            <el-input v-model="formData.author"></el-input>
          </el-form-item>
          <el-form-item label="index:">
            <el-input v-model="formData.index"></el-input>
          </el-form-item>
          <el-form-item label="标题:">
            <el-input v-model="formData.title"></el-input>
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
          <el-form-item label="desc:">
            <el-input type="textarea" v-model="formData.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleClick" type="primary">保存更改</el-button>
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
      name: "editBook",
      data() {
        return {
          formData: {
            img: '',
          },
          list: []
        }
      },
      methods: {
        getBook() {
          let id = this.$route.query.id
          this.$axios.get(`/book/${id}`).then(res => {
            console.log(res)
            if(res.code == 200){
              this.formData = res.data
            }
          })
        },
        getCate() {
          this.$axios.get('/category', { pn: this.pn, size: 5}).then(res => {
            this.list = res.data
          })
        },
        handleClick() {

        }
      },
      created() {
        this.getBook()
        this.getCate()
      }
    }
</script>

<style scoped lang="scss">
.edit{
  .editBook{
    margin-left: 20px;
    margin-top: 20px;
    width: 500px;
  }
}
</style>
