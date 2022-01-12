<template>
  <div class="Home pt-20 ">
    <div class="banner relative flex items-center justify-center">
      <el-image
        :src="require('@/assets/img/Hhome/banner.png')"
        fit="cover"
        class=" relative"
      />
      <div class=" absolute flex items-center justify-center ">
        <div class=" flex flex-col justify-center items-center w-4/5 h-44 bg-black opacity-70 text-white px-20 py-28  ">
          <div class=" text-4xl">欢迎来到数玺</div>
          <div class=" py-4 text-center">我们是一个独立机构，旨在审查学生对英格兰和威尔士高等教育机构的投诉。我们的服务对学生免费</div>
          <div class=" text-sm border-2 px-4 py-2">欢迎来到数玺</div>
        </div>
      </div>
    </div>
    <div class=" flex flex-col pt-8 pb-6 justify-center items-center bg-gray-200">
      <div class=" text-2xl text-themeBlue pb-4 font-bold">了解我们更多</div>
      <div class=" text-xs text-themeBlue border-themeBlue border-2 px-2 py-1">关于我们</div>
    </div>
    <div class=" mt-28 max-w-screen-lg container mx-auto">
      <div class="BIGbox1">
        <div class=" font-bold text-2xl pb-6 text-center">给学生</div>
        <div class=" flex space-x-10">
          <div class=" w-1/3">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home1.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">你能向我们我们投诉吗？</div>
              <div class=" text-sm pb-7 text-gray-600">在您向我们投诉之前，值得检查您的投诉是否是我们可以查看的。</div>
            </div>
          </div>
          <div class=" w-1/3" >
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home2.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">如何向我们投诉</div>
              <div class=" text-sm pb-7 text-gray-600">了解如何投诉</div>
            </div>
          </div>
          <div class=" w-1/3">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home3.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">您的投诉需要帮助吗？</div>
              <div class=" text-sm pb-7 text-gray-600">了解如何获得投诉帮助，包括可访问性调整。</div>
            </div>
          </div>
        </div>
        <div class=" text-xs text-white bg-themeBlue w-24 px-5 py-2">学生中心</div>
      </div>

       <div class="BIGbox2 mt-28">
        <div class=" font-bold text-2xl pb-6 text-center">对学生顾问</div>
        <div class=" flex space-x-8">
          <div class=" w-1/4">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home3.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">代表学生</div>
              <div class=" text-sm pb-7 text-gray-600">您是否代表学生投诉HE提供者</div>
            </div>
          </div>
          <div class=" w-1/4" >
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home2.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">学生代表机构</div>
              <div class=" text-sm pb-7 text-gray-600">学生代表机构如何帮助学生解决他们的投诉</div>
            </div>
          </div>
          <div class=" w-1/4">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home1.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">学生代表机构工具包</div>
              <div class=" text-sm pb-7 text-gray-600">本工具包旨在帮助您和您的学生会、协会或公会了解我们的流程并帮助使用我们计划的学生。</div>
            </div>
          </div>
          <div class=" w-1/4">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home3.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">外展和活动</div>
              <div class=" text-sm pb-7 text-gray-600">报名参加我们即将举行的活动、研讨会和网络研讨会</div>
            </div>
          </div>
        </div>
        <div class=" text-xs text-white bg-themeBlue w-32 px-5 py-2">学生顾问中心</div>
      </div>

       <div class="BIGbox3 mt-28">
        <div class=" font-bold text-2xl pb-6 text-center">对于高等教育提供者</div>
        <div class=" flex space-x-5">
          <div class=" w-1/4">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home1.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">什么是联系点，他们做什么？</div>
              <div class=" text-sm pb-7 text-gray-600">了解有关联系人的更多信息</div>
            </div>
          </div>
          <div class=" w-1/4">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home2.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">完成程序信函指导</div>
              <div class=" text-sm pb-7 text-gray-600">我们对完成程序（COP）信函指导</div>
            </div>
          </div>
          <div class=" w-1/4">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home3.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">供应商工具包</div>
              <div class=" text-sm pb-7 text-gray-600">该工具包旨在帮助新加入OIA的提供者了解他们的成员资格以及我们计划的运作方式。</div>
            </div>
          </div>
          <div class=" w-1/4">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home3.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">外展和活动</div>
              <div class=" text-sm pb-7 text-gray-600">报名参加我们即将举行的活动、研讨会和网络研讨会</div>
            </div>
          </div>
        </div>
        <div class=" text-xs text-white bg-themeBlue w-32 px-5 py-2">提供商中心</div>
      </div>

       <div class="BIGbox4 mt-28">
        <div class=" font-bold text-2xl pb-6 text-center">资源和出版社</div>
        <div class=" flex space-x-5">
          <div class=" w-1/4">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home1.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">良好实践框架</div>
              <div class=" text-sm pb-7 text-gray-600">我们发布的关于高等教育提供者良好实践的指南。</div>
            </div>
          </div>
          <div class=" w-1/4" >
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home2.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">年度报告</div>
              <div class=" text-sm pb-7 text-gray-600">阅读我们最新的年度报告</div>
            </div>
          </div>
          <div class=" w-1/4">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home3.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">年度报表</div>
              <div class=" text-sm pb-7 text-gray-600">查看有关我们会员处理投诉和上诉记录的信息</div>
            </div>
          </div>
          <div class=" w-1/4">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home3.png')"
                fit="cover"
              />
            </div>
            <div>
              <div class=" font-bold py-1">案例总结</div>
              <div class=" text-sm pb-7 text-gray-600">查看我们收到的案例示例以及我们如何解决这些案例。这些还包括我们的公共利益案例。</div>
            </div>
          </div>
        </div>
        <div class=" text-xs text-white bg-themeBlue w-32 px-5 py-2">资源和出版</div>
      </div>
    </div>

<!-- 最新消息和更新 -->
    <div class=" bg-gray-100 py-16 mt-28">
     <div class="BIGbox4 max-w-screen-lg container mx-auto ">
        <div class=" font-bold text-2xl pb-6 text-center">最新消息和更新</div>
        <div class=" flex space-x-10">
          <div class=" w-1/3 bg-white">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home1.png')"
                fit="cover"
              />
            </div>
            <div class=" px-5">
              <div class=" font-bold py-1">回应1752集团公开信的涉及不当性行为的投诉的声明</div>
              <div class=" text-sm text-gray-700 py-2">2021年11月17日</div>
              <div class=" text-sm pb-7 text-gray-500">我们针对涉及不当性行为的投诉发表声明，以回应 The1752 Group最近的公开信。</div>
            </div>
          </div>
          <div class=" w-1/3 bg-white">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home2.png')"
                fit="cover"
              />
            </div>
            <div class=" px-5">
              <div class=" font-bold py-1">随着新学年的临近</div>
              <div class=" text-sm text-gray-700 py-2">2021年11月17日</div>
              <div class=" text-sm pb-7 text-gray-500">2021/22学年与冠状病毒相关的一些注意事项。</div>
            </div>
          </div>
          <div class=" w-1/3 bg-white">
            <div>
              <el-image
                :src="require('@/assets/img/Hhome/home3.png')"
                fit="cover"
              />
            </div>
            <div class=" px-5">
              <div class=" font-bold py-1">OIA发布了Covid-19影响引起的投诉的进一步案例摘要</div>
              <div class=" text-sm text-gray-700 py-2">2021年7月29</div>
              <div class=" text-sm pb-7 text-gray-500">我们发布了第三组因冠状病毒影响而引起的投诉案例摘要。</div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>