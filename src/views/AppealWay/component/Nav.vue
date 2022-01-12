<template>
  <div>
    <el-menu :default-active="defaultUrl" class="el-menu-vertical-demo"  text-color="#fff" >
          <!-- 无子级菜单-->
          <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{ item.label }}</span>
          </el-menu-item>
          <!-- 有子级菜单-->
          <el-submenu index="2" v-for="(item, index) in hasChildren" :key="index">
            <template slot="title">
              <i :class="'el-icon-' + item.icon"></i>
              <span>{{ item.label }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="subItem.path" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">
                <i :class="'el-icon-' + subItem.icon"></i>
                <span>{{ subItem.label }}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
  </div>
</template>

<script>
  export default {
  computed: {
    noChildren() {
      return this.asideMenu.filter(item => !item.children)
    },
    hasChildren() {
      return this.asideMenu.filter(item => item.children)
    }
  },
  data() {
    //返回一个数组，通过数组的方式循环渲染出来
    return {
      asideMenu: [
        {
          path: '/MethodsVary',
          name: 'MethodsVary',
          label: '方式差异'
        },
        {
          path: '/Complain',
          name: 'Complain',
          label: 'Complain'
        },
        {
          path: '/Ec',
          name: 'Ec',
          label: 'EC'
        },
        {
          path: '/Mc',
          name: 'Mc',
          label: 'MC'
        },
        {
          path: '/Appeals',
          name: 'Appeals',
          label: 'Appeals'
        },
        {
          path: '/AcademicIntegrity',
          name: 'AcademicIntegrity',
          label: 'Academic Integrity'
        },
        {
          path: '/QA',
          name: 'QA',
          label: 'Q&A'
        }
       
      ],
      defaultUrl:'MethodsVary'
    }
  },
  created(){
    this.getUrl()
  },
   methods: {
     getUrl(){
       var url = this.$route.path
       var arr = url.split('/')
       this.defaultUrl = '/'+arr[1]
     },
    clickMenu(item) {
      this.$router.push({name:item.name})
      this.$store.commit('selectMenu', item)
    }
  }
  }
</script>

<style lang="scss" scoped>
.el-menu {
  //使侧边栏占满屏幕高度
  font-weight: 700;
  background: #175BBF;
  border: none;
}
.el-menu-item:hover{
 background: #fff !important;
 color: #175BBF !important;
  border-left:5px solid #F26A44;
}
</style>