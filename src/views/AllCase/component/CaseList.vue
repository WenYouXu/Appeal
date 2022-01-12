<template>
  <div class=" pt-6 pb-3">
    <div 
    v-for="(item,index) in showcaseList"
    :key="index"
    class=" border-b-2 pb-4 mb-8"
    >
      <div>{{item.title}}</div>
      <div class=" flex items-center pt-3">
        <div class=" bg-themeBlue text-white text-xs px-2 py-1 flex items-center justify-center">公益案例</div>
        <div class=" text-gray-500 text-xs pl-5">{{item.date}}</div>
      </div>
      <div class=" text-gray-600 font-bold text-sm py-3">{{item.university}}</div>
      <div class=" text-sm text-gray-500">{{item.info}}</div>
    </div>

    <!-- 分页器 -->
    <Pagination
      class="mt-10"
      :total="caseList.length"
      :current-page="currentPage"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
 import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data: function() {
    return {
      caseList: [],
      currentPage: 0,
      pageSize: 8
    }
  },
  computed: {
    showcaseList() {
      const skipNum = (this.currentPage - 1) * this.pageSize
      const showcaseList = (skipNum + this.pageSize >= this.caseList.length) ? this.caseList.slice(skipNum, this.caseList.length) : this.caseList.slice(skipNum, skipNum + this.pageSize)
      return showcaseList
    }
  },
  mounted() {
    this.caseList = new Array(10).fill(
      {
        title: '涉及可能的刑事诉讼的案件-PI021701',
        date: '2017年1月/不合理',
        university:'卡迪夫大学',
        info: '卡迪夫大学的一名学生向我们抱怨大学决定驳回他以纪律为由开除的上诉。'
      }
    )
    this.currentPage = 1
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
    }
  }

}
</script>

<style lang="scss" scoped>

</style>