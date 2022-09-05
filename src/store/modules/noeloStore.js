import axios from 'axios'
const state = {
  mbMenuData: []
};
const actions = {
  fetchmbMenuData({commit}){
    axios.get('./data/mbmenu.json')
    .then(response => {
      commit('MB_MENUDATA',response.data);
    }).catch(err => console.log(err));
  }
};
const mutations = {
  MB_MENUDATA(state,payload){
    state.mbMenuData = payload
  }
};
const getters = {
  getMbMenuData(state){
    // 여러가지 데이터를 원하는 값으로 정렬하는 과정 필요
    return state.mbMenuData
  }
};
export {state, actions, mutations, getters};