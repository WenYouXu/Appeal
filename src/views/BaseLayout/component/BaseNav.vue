<template>
  <div>
    <div class="nav h-20">
      <div class="navContent font-bold">
        <div class="navTop">
          <!-- logo -->
          <div class="navLeft">
            <!-- <el-image
              class="g1"
              :src="logoImg"
              fit="cover"
              lazy
            ><div
              slot="placeholder"
              class="emptyImg"
            /></el-image> -->
          </div>
          <!-- 菜单 -->
          <div class="navRight">
            <!-- <Menu :menus="navList" class="navMenu" /> -->
            <el-menu
              :default-active='this.$route.path'
              router
              mode="horizontal"
              class="navMenu"
              background-color="#1D2A3A"
              text-color="#ffffff"
              active-text-color="#246ADD"
            >

              <el-menu-item v-for="(item,index) in navList" :key="index" >
                <!-- 一级菜单（没有任何子级菜单）-->
                <el-menu-item :index="item.path" v-if="!item.menuList">{{item.title}}</el-menu-item>
                    <!-- 一级菜单（有子级菜单）-->
                    <el-submenu :index="item.path" v-else>
                          <template slot="title">{{item.title}}</template>
                            
                          <!-- 遍历二级菜单容器 -->
                          <div v-for="(i,index) in item.menuList" :key="index">
                              <!-- 判断二级菜单（没有三级菜单）-->
                              <el-menu-item :index="i.path" v-if="!i.list">{{i.title}}</el-menu-item>
                              
                              <!-- 判断二级菜单（有三级菜单）-->
                              <el-submenu :index="i.path" v-if="i.list">
                                <template slot="title">{{i.title}}</template>
                                <el-menu-item :index="j.path" v-for="(j,index) in i.list" :key="index">{{j.title}}</el-menu-item>
                              </el-submenu>
                          </div> 
                      </el-submenu>
                </el-menu-item>
              
            </el-menu>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  //   components: {
  //   // 菜单组件
  //   Menu: {
  //     props: {
  //       // 菜单列表
  //       menus: {
  //         type: Array,
  //         default: () => []
  //       }
  //     },
  //     methods: {
  //       // 递归组装菜单选项
  //       MenuItem(menu) {
  //         if (menu.children) {
  //           return (
  //             <el-submenu index={menu.path} popper-class='NavSubMenu'>
  //               <template slot='title'>{menu.title}</template>
  //               {menu.children.map(childMenu => this.MenuItem(childMenu))}
  //             </el-submenu>
  //           )
  //         }
  //         return <el-menu-item index={menu.path}>{menu.title}</el-menu-item>
  //       }
  //     },
  //     render() {
  //       const menus = this.menus
  //       const path = this.$route.path
  //       // 自适应匹配当前路由
  //       return (
  //         <el-menu
  //           mode='horizontal'
  //           class="navMenu"
  //           background-color="#FFFFFF"
  //           text-color="#333333"
  //           active-text-color="#E66717"
  //           router
  //           default-active={path}
  //         >
  //           {menus.map(childMenu => this.MenuItem(childMenu))}
  //         </el-menu>
  //       )
  //     }
  //   }
  // },

    data(){
      return {
        navList:[
            {
              path:'/',
              title:'首页'
            },
            {
              path:'/urgentAppeal',
              title:'紧急申诉',
              icon:'el-icon-menu',
              menuList:[
                {
                  path:'/urgentAppeal',
                  title:'紧急申诉',
                },
                {
                  path:'/type',
                  title:'申诉种类',
                  list:[
                    {
                      path:'/qanda',
                      title:'Label Q&A'
                    },
                    {
                      path:'/sort',
                      title:'Punnishwent 种类'
                    },
                  ]
                },
                {
                  path:'/way',
                  title:'申诉方式'
                },
                 {
                  path:'/case',
                  title:'过往案例'
                }
              ]
            },
            {
              path:'/backgroundAscension',
              title:'背景提升'
            },
            {
              path:'/literature',
              title:'文史写作'
            },
            {
              path:'/consult',
              title:'咨询',
              // menuList:[
              //   {
              //     path:'/consult',
              //     title:'咨询',
              //   },
                
              // ]
            },
            {
              path:'/contact',
              title:'联系我们'
            },
        ]
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  // height: 84px;
  background:#1D2A3A;
  z-index: 10;

  .navContent {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 100%;

    .navTop {
      display: flex;
      position: relative;
      height: 100%;

      .navLeft {
        position: relative;
        z-index: 1;

        .g1 {
          margin-top: 17px;
          width: 301px;
          height: 53px;
        }
      }

      .navRight {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        overflow: hidden;

        .navMenu {
          .el-menu-item,
          ::v-deep .el-submenu__title {
            height: 84px;
            width: 130px;
            line-height: 84px;
            border-bottom: none !important;

            &:hover {
              background-color: #ffffff !important;
              color: #246ADD !important ;
            }
          }
        }
      }
    }
  }
}
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
  width: 900px;
  background-color: white;
  color: black;
}
</style>