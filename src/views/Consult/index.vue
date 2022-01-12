<template>
<div class="  pt-20">
  <div class="  bg-gray-200  h-28 flex items-center ">
   <div class="container max-w-screen-lg mx-auto font-bold text-3xl  ">
     资讯</div>
  </div>
  <div class=" max-w-screen-lg container mx-auto mt-24 mb-10 flex">
    <!-- 左边大盒子 -->
    <div class=" boxleft">
      <passage-item class=" mr-10"/>
    </div>
    <!-- 右边大盒子 -->
    <div class=" boxright w-2/4">
      <el-input  placeholder="请输入内容"></el-input>

      <div class=" mt-14 flex items-center justify-center">
        <div class=" mr-5  font-bold">热门访问</div>
        <div class=" w-2/3 border-b-2 border-red-600 "></div>
      </div>
      <div
       class=" flex flex-wrap "
       v-for="(item,index) in tagList"
       :key="index+'one'"
       >
        <div class=" border-gray-300 border text-gray-400 flex items-center justify-center cursor-pointer px-3 mr-3 mt-3">{{item.name}}</div>
      </div>

      <div class=" mt-14 flex items-center justify-center">
        <div class=" mr-5 font-bold">栏目最新</div>
        <div class=" w-2/3 border-b-2 border-red-600 "></div>
      </div>
      <div
      class=" mt-7"
        v-for="(item,index) in newsList"
        :key="index+'two'"
      >
        <div>{{item.title}}</div>
        <div class=" h-7 w-24 bg-red-600 text-white text-sm flex items-center justify-center mt-1">常见疑问解答</div>
        <div class=" mt-1 text-gray-400">{{item.date}}</div>
      </div>
    </div>
  </div>

  <div class=" max-w-screen-lg container mx-auto">
    <div class=" py-16">
     <div class="BIGbox4 max-w-screen-lg container mx-auto ">
        <div class=" font-bold text-2xl pb-6 text-center">相关页面</div>
        <!-- 上面三个 -->
        <div class=" flex space-x-6 h-80">
          <div class=" w-2/3 bg-white">
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
          <div class=" w-1/4 bg-white">
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
          <div class=" w-1/4 bg-white">
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
          <div class=" w-1/4 bg-white">
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
          <div class=" w-1/4 bg-white">
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
          <div class=" w-1/4 bg-white">
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
          <div class=" w-1/4 bg-white">
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
import PassageItem from './component/PassageItem.vue'
  export default {
    name: 'Consult',
    components:{
      PassageItem
    },
    data(){
      return{
        tagList:[
        {
          name:'英国大学院校库'
        },
         {
          name:'关于Dr.d咨询集团'
        },
         {
          name:'精英团队'
        },
         {
          name:'为什么选择Dr.d'
        },
         {
          name:'成功院校'
        },
         {
          name:'英国留学新闻'
        }
      ],
      newsList:[
        {
          title:'英国留学挂科无法拿到学位，该如何向学校申诉？（干货）',
          date:'2021-08-09'
        },
        {
          title:'英国留学挂科了怎么办',
          date:'2021-08-09'
        },
        {
          title:'留学听证会涉嫌抄袭查重过高共谋代写等学术不端问题，全面解决方案大解析!(原创千干货)',
          date:'2021-08-09'
        },
        {
          title:'Turnitin查重报告解读',
          date:'2021-08-09'
        },
        {
          title:'还在纠结出国吗？看完中英本硕回报率对比再决定吧',
          date:'2021-08-09'
        }
      ]
      }
      
    },
    mounted(){
     
    }
  }
</script>

<style lang="scss" scoped>

</style>