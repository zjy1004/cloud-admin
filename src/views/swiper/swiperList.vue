<template>
    <div class="swiper">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>轮播图列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="swiper-list">
        <el-table
          :data="tableData"
          border
          style="width: 100%; text-align: center;">
          <el-table-column
            label="头图"
            width="130"
            style="text-align: center">
            <template slot-scope="scope">
              <img :src="scope.row.img" class="img">
            </template>
          </el-table-column>
          <el-table-column
            label="类名"
            width="150">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>类名: {{ scope.row.sort }}</p>
                <p>ID: {{ scope.row._id }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.sort }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            prop="index"
            width="150"
            label="index">
          </el-table-column>
          <el-table-column
            prop="title"
            width="300"
            label="标题">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="small" type="primary" @click="handleEdit(scope.row._id)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="pageChange"
          :page-size="5"
          :total="100">
        </el-pagination>
      </div>
    </div>
</template>

<script>
    export default {
        name: "swiperList",
        data () {
          return {
            tableData: [],
            pn: 1
          }
        },
        methods: {
          getSwiper() {
            this.$axios.get('/swiper', {pn: this.pn, size: 5}).then(res => {
              console.log(res)
              this.tableData = res.data
            })
          },
          handleEdit(id) {
            this.$router.push(`/layout/changeSwiper?id=${id}`)
          },
          pageChange(pn) {
            this.pn = pn
            this.getSwiper()
          }
        },
      created() {
          this.getSwiper()
      }
    }
</script>

<style scoped lang="scss">
.swiper{
  .swiper-list{
    margin-top: 20px;
    margin-left: 20px;
    position: relative;
  .img{
    width: 50px;
    height: 50px;
    border-radius: 100px;
  }
}
  .page{
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
}
</style>
