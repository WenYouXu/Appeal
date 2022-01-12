export default {
  state: {
    currentMenu: null,
    menu: []
  },
  //同步修改state里面的值
  mutations: {
    selectMenu(state, val) {
      // if (val.name !== 'home') {
        state.currentMenu = val
      // } else {
        // state.currentMenu = null
      // }
    }
  },
  modules: {}
}

