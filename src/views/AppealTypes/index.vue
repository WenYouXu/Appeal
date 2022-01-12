<template>
  <div class="appealTypes bg-gray-50">
     <div class="banner relative flex items-center justify-center">
      <el-image
        :src="require('@/assets/img/Hhome/banner.png')"
        fit="cover"
        class=" relative"
      />
    </div>
    <div class=" max-w-screen-lg mx-auto container">
       <div class=" pt-14 border-b-2 pb-3">
          <top-header></top-header>
        </div>
      <div class=" flex mt-5">
        <div class=" w-1/5 ">
          <left-nav></left-nav>
        </div>
        <div class=" w-4/5 ml-20"> 
           <router-view></router-view>
        </div>
      </div>
   </div>
  
   <div class=" max-w-screen-lg container mx-auto">
    <div class=" py-16">
     <div class="BIGbox4 max-w-screen-lg container mx-auto ">
        <div class=" font-bold text-2xl pb-6 text-center">相关页面</div>
        <!-- 上面三个 -->
        <div class=" flex space-x-6 h-80">
          <div class=" w-2/3 ">
            <div>
              <el-image
                :src="require('@/assets/img/Consult/relate1.png')"
                fit="cover"
              />
            </div>
            <div class=" px-5">
              <div class=" font-bold py-1 text-themeBlue">供应商工具包</div>
              <div class=" text-sm pb-7 text-gray-500">该工具包旨在帮助新加入OIA的提供者了解他们的成员资格以及我们计划的运作方式。它也应该对我们计划的新联系人和供应商的其他相关员工有所帮助</div>
            </div>
          </div>
          <div class=" w-1/4 ">
            <div>
              <el-image
                :src="require('@/assets/img/Consult/relate3.png')"
                fit="cover"
              />
            </div>
            <div class=" px-5">
              <div class=" font-bold py-1 text-themeBlue">谁可以向我们投诉？</div>
              <div class=" text-sm pb-7 text-gray-500">详细了解谁可以向我们投诉以及他们可以投诉什么。</div>
            </div>
          </div>
          <div class=" w-1/4 ">
            <div>
              <el-image
                :src="require('@/assets/img/Consult/relate4.png')"
                fit="cover"
              />
            </div>
            <div class=" px-5">
              <div class=" font-bold py-1 text-themeBlue">当学生向我们投诉时会发生什么？</div>
              <div class=" text-sm pb-7 text-gray-500">详细了解我们如何处理斥以及提出投诉后会发生什么。</div>
            </div>
          </div>
        </div>
        <!-- 下面四个 -->
        <div class=" flex space-x-6">
          <div class=" w-1/4 ">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home1.png')"
                fit="cover"
              />
            </div>
            <div class=" px-5">
              <div class=" font-bold py-1 text-themeBlue">我们的规则</div>
              <div class=" text-sm pb-7 text-gray-500">我们的规则规定了我们的计划如何运作、谁可以投诉、我们可以查看和不可以查看哪些内容、我们如何审查投诉以及高等教育提供者应该做什么。</div>
            </div>
          </div>
          <div class=" w-1/4 ">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home2.png')"
                fit="cover"
              />
            </div>
            <div class=" px-5">
              <div class=" font-bold py-1 text-themeBlue">外展和活动</div>
              <div class=" text-sm pb-7 text-gray-500">详细了解我们即将举行的研讨会、活动、提供商问、演讲活动和网络研讨会。</div>
            </div>
          </div>
          <div class=" w-1/4 ">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home3.png')"
                fit="cover"
              />
            </div>
            <div class=" px-5">
              <div class=" font-bold py-1 text-themeBlue">良好实践框架</div>
              <div class=" text-sm pb-7 text-gray-500">我们发布的关于高等教育提供者良好实践的指南。</div>
            </div>
          </div>
          <div class=" w-1/4 ">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home2.png')"
                fit="cover"
              />
            </div>
            <div class=" px-5">
              <div class=" font-bold py-1 text-themeBlue">案例总结</div>
              <div class=" text-sm pb-7 text-gray-500">查看我们收到的案例示例以及我们如何解决这些案例。其中包括我们的公共利益案例和案例摘要。</div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
import LeftNav from './component/Nav.vue'
import TopHeader from './component/Header.vue'
  export default {
    name:'appealTypes',
    components:{
       LeftNav,
       TopHeader
    }
  }
</script>

<style lang="scss" scoped>

</style>