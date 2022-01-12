<template>
  <div class="">
    <div
      v-for="(item,index) in showNewsList"
      :key="index"
      class=" mb-5"
    >
      <div class=" flex items-center bg-white py-6 pl-6 pr-8">
        <div class=" w-1/3">
          <el-image
            :src="require('@/assets/img/Consult/1.png')"
            fit="cover"
          />
        </div>
        <div class=" w-2/3 flex flex-col pl-7 ">
          <div class=" text-lg text-grey1 font-bold">英国留学挂科无法拿到学位，该如何向学校申诉？（干货）</div>
          <div class=" text-sm text-grey2 pt-3 pb-3">2021-08-09</div>
          <div class=" text-sm text-grey2 ">留学不易，考试论文季又双叒叕来了！有必要在这个时期给大家解答一下“申诉Appeal”的方方面面，使得在这个考试论文季遇到一些意外情况，不要慌张，抓住这根救命稻草</div>
          <div class=" h-7 w-24 bg-red-600 text-white text-xs flex items-center justify-center mt-4">常见疑问解答</div>
          <div class=" h-8 w-24 bg-black text-white text-xs flex items-center justify-center mt-4">继续阅读</div>
        </div>
      </div>
      <div class=" border-b-2 border-gray-300"></div>
    </div>
    

    <!-- 分页器 -->
    <Pagination
      class="mt-10"
      :total="newsList.length"
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
      newsList: [],
      currentPage: 0,
      pageSize: 8
    }
  },
  computed: {
    showNewsList() {
      const skipNum = (this.currentPage - 1) * this.pageSize
      const showNewsList = (skipNum + this.pageSize >= this.newsList.length) ? this.newsList.slice(skipNum, this.newsList.length) : this.newsList.slice(skipNum, skipNum + this.pageSize)
      return showNewsList
    }
  },
  mounted() {
    this.newsList = new Array(10).fill(
      {
        title: '第十二届广交会',
        date: '2021-03-12',
        info: '案发生的广泛地好的哈是特警点撒哈拉电脑看好你电脑好看的的服了好看吗老地方话你地福牛贺岁都很困难的浪费你好老对手那里可能会的回答老师您好你多少分回复没干嘛是的啊还打吗弄好了没你大发货啦拉黑了十多个地方好地方花洒一合同段根深蒂固哥哥燃油哈酒红蜡片'
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
