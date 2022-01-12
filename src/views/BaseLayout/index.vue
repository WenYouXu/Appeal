<template>
  <div>
    <!-- <base-nav></base-nav> -->
    <basa-nav-2></basa-nav-2>
    <transition mode="out-in">
      <keep-alive name="fade-transform" :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
    <!-- 页脚 -->
    <div class=" max-w-screen-lg container mx-auto pt-14">
      <div class=" flex text-sm">
        <div class=" flex  w-1/2 font-bold text-gray-500">
          <div class="">
            <div class=" py-3">联系我们</div>
            <div>0118 959 9813</div>
            <div>给我们发电子邮件</div>
            <div>媒体查询</div>
          </div>

          <div class=" px-20">
            <div class=" py-3">快速链接</div>
            <div>MyOIA</div>
            <div>为我们工作</div>
            <div>新闻和更新</div>
          </div>

          <div>
            <div class=" py-3">信息</div>
            <div>网站地图</div>
            <div>Cookies</div>
            <div>词汇表</div>
            <div>个人资料</div>
          </div>
        </div>

        <div class=" top-0 flex flex-col ">
          <div class=" text-gray-500 font-bold py-3">联系我们</div>
          <div class=" flex ">
            <div>
            <el-image
            :src="require('@/assets/img/2.png')"
            fit="cover"
            class=" w-1/2 mb-8"
          /></div>
          <div>
          <el-image
            :src="require('@/assets/img/3.png')"
            fit="cover"
            class=" w-1/2 mb-8"
          /></div>
          <div>
          <el-image
            :src="require('@/assets/img/1.png')"
            fit="cover"
            class=" w-1/2 mb-8"
          /></div>
          </div>
        </div>

        <div class="w-1/3 pl-20">
          <div class="text-gray-500 font-bold py-3">订阅我们的电子通讯</div>
          <div>
            <el-input placeholder="电子邮件地址" class=" border border-gray-500 w-24 ">电子邮件地址</el-input>
          </div>
          <button class=" bg-themeBlue text-white px-10 py-2 mt-3">订阅</button>
        </div>
      </div>
      <div class=" text-sm text-gray-500 font-bold mt-10 ">2021高等教育独立评审办公室</div>
    </div>
    
    <div class=" h-28 bg-white"></div>
  </div>
</template>

<script>
import BasaNav2 from './component/BasaNav2.vue'
import BaseNav from './component/BaseNav.vue'
import BaseNav2 from './component/BaseNav.vue'
  export default {
    name: 'BaseLayout',
    components:{
      BaseNav,
       BaseNav2,
        BasaNav2
    },
    computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  },
  mounted() {
    // console.log(this.$route.path)
  },
   
  }
</script>

<style lang="scss" scoped>

</style>