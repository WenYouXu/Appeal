<template>
  <div class="Home pt-20 ">
    <div class="banner relative flex items-center justify-center">
      <el-image
        :src="require('@/assets/img/Hhome/banner.png')"
        fit="cover"
        class=" relative"
      />
     
    </div>
    <div class=" flex flex-col pt-8 pb-6 border-b-2 ">
      <div class="max-w-screen-lg container mx-auto">
        <div class=" text-2xl text-themeBlue pb-4 font-bold">历年案例</div>
        <div class=" text-xs text-themeBlue px-2 py-1">家 > 学生权益 > 历年案例</div>
      </div>
    </div>
  <div class=" flex mt-16 max-w-screen-lg container mx-auto">
      <!-- 左边大盒子 -->
    <div class=" w-3/4">
          <div class=" bg-gray-200 px-5 py-5">
            <div>关键词搜索</div>
            <div class=" flex">
              <div>
              <el-input placeholder="搜索" class=" border border-black w-32 "></el-input>
              </div>
              <button class=" bg-themeBlue text-white ml-4 px-14 py-2">搜索</button>
            </div>
            <div class=" flex mt-8">
              <div>
                <div>过滤</div>
                <div><el-input placeholder="全部" class=" border border-black w-40 "></el-input></div>
              </div>
              <div class=" ml-8">
                <div>排序方式</div>
                <div><el-input placeholder="发布日期降序" class=" border border-black w-32 "></el-input></div>
              </div>
            </div>
          </div>
      
      <div class=" border-b-2 pb-6 pt-10">
        <div class=" font-bold text-2xl">结算-CS011810</div>
        <div class=" pb-3 pt-2 flex items-center">
          <div class=" bg-themeOrange px-2 py-1 flex items-center justify-center text-white text-xs">案例总结</div>
          <div class=" text-sm text-gray-500 pl-4">2018年1月/定居</div>
        </div>
        <div class=" text-gray-500 text-sm">该学生正在攻读法律文凭。她因为怀孕而停课一年。由于经济状况的变化和照顾责任的困难，她在生完孩子后无法重返学业。</div>
      </div>

      <div>
        <case-list/>
      </div>
    </div>
  <!-- 右边大盒子 -->
    <div class=" w-1/4 ml-8">
      <!-- 上方文字 -->
      <div class=" border-b-2 pb-4">
        <div class=" text-gray-500 text-sm">
          我们发布了我们审查的一些投诉的摘要。我们总是在摘要中省略任何可能识别提出投诉的学生的信息。在某些情况下，我们认为发布包含提供商名称的投诉摘要符合公共利益。请参阅我们
        </div>
        <div class=" text-sm text-themeBlue">对案例摘要和公共利益案例的处理方法</div>
        <div class=" flex">
        <div class=" text-sm">的</div>
        <div class=" text-sm text-themeBlue">指南</div>
        <div class=" text-sm">想要查询更多的信息</div>
        </div>
      </div>

      <div class=" pt-6 border-b-2 pb-5">
        <div class=" font-bold text-2xl pb-3">案例摘要</div>
        <div class=" flex">
          <div class=" bg-gray-800 text-white flex items-center justify-center w-1/2 py-2">生活问题</div>
          <div class=" bg-gray-800 text-white flex items-center justify-center w-1/2 py-2 ml-1">学术问题</div>
        </div>
        <div class=" flex mt-3">
          <div class=" bg-gray-800 text-white flex items-center justify-center w-1/2 py-2">纪律问题</div>
          <div class=" bg-gray-800 text-white flex items-center justify-center w-1/2 py-2 ml-1">心理原因</div>
        </div>
        <div class=" flex mt-3">
          <div class=" bg-gray-800 text-white flex items-center justify-center w-1/2 py-2">生理原因</div>
          <div class=" bg-gray-800 text-white flex items-center justify-center w-1/2 py-2 ml-1">刑事公诉问题</div>
        </div>
        <div class=" flex mt-3">
          <div class=" bg-gray-800 text-white flex items-center justify-center w-1/2 py-2">新冠</div>
          <div class=" bg-gray-800 text-white flex items-center justify-center w-1/2 py-2 ml-1">歧视</div>
        </div>
        <div class=" flex mt-3">
          <div class=" bg-gray-800 text-white flex items-center justify-center w-1/2 py-2">费用问题</div>
          <div class=" bg-gray-800 text-white flex items-center justify-center w-1/2 py-2 ml-1">不可抗力因素</div>
        </div>
      </div>

      <div class=" bg-gray-200 px-3 py-2">
        <div class=" text-gray-800 font-bold text-lg">案例摘要和公益案例指南</div>
        <div class=" text-sm text-gray-800">2019年2月</div>
        <div class=" text-sm text-gray-800">PDF,105Kb</div>
      </div>
    </div>
  </div>



  </div>
</template>

<script>
import CaseList from './component/CaseList.vue'
  export default {
    components:{
      CaseList
    }
  }
</script>

<style lang="scss" scoped>

</style>