<template>
  <label class="unload-wrap">
    <i class="el-icon-plus"  v-if="!imgUrl"></i>
    <img :src="imgUrl" v-else>
    <input type="file" style="display: none"  @change="upload">
  </label>

</template>

<script>
  import axios from 'axios'
    export default {
        name: "uploadImg",
        props: {
          value: {
            type: [String]
          }
        },
      data() {
        return {
          token: '',
          imgUrl: this.value,
        }
      },
      methods: {
        getToken() {
          axios.get('http://upload.yaojunrong.com/getToken').then(res => {
            this.token = res.data.data
          })
        },
       upload(event) {
        let file = event.target.files[0]
         let formData = new FormData()
         formData.append('file', file, file.name)
         formData.append('token', this.token)

         axios.post('https://upload-z1.qiniup.com', formData, {
           headers: {
             'Content-type': 'multipart/form-data'
           }
         }).then(res => {
           this.imgUrl = res.data.url
           this.$emit('input', res.data.url)
           this.$emit('success', res.data.url)
           this.$emit('change', res.data.url)
         })
       }
      },
      created () {
          this.getToken()
      },
      watch: {
          value (val) {
            this.imgUrl = val
          }
      }
    }
</script>

<style scoped lang="scss">
.unload-wrap{
  display: block;
  width: 100px;
  height: 100px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  cursor: pointer;
  position: relative;

  .el-icon-plus{
    position: absolute;
    font-size: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  img{
    width: 100%;
    height: 100%;
    display: block;
  }
}
  
</style>
