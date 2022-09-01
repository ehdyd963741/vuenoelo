import { createStore } from 'vuex';
import * as noeloStore from './modules/noeloStore'
export default createStore({
  modules: {
    noeloStore
  }
  // 데이터 저장 객체가 됩니다.
    // state: {
    //   mbMenuData: [
    //     {
    //       menuType: 'S',
    //       mainText: 'SHOP',
    //       mainLink: '',
    //       subArr: [
    //         {link: '#', title: 'ALL PRODUCT'},
    //         {link: '#', title: 'NEWBORN'},
    //         {link: '#', title: 'BABY'},
    //         {link: '#', title: 'FAMILY'},
    //         {link: '#', title: 'BATH GOODS'},
    //         {link: '#', title: 'PRESENTS'}
    //       ]
    //     },
    //     {
    //       menuType: 'S',
    //       mainText: 'ABOUT',
    //       mainLink: '',
    //       subArr: [
    //         {link: '#', title: 'BRAND STORY'},
    //         {link: '#', title: 'WHO WE ARE'},
    //         {link: '#', title: 'MAKE A WISH'},
    //         {link: '#', title: 'PRESS'}
    //       ]
    //     },
    //     {
    //       menuType: 'S',
    //       mainText: 'TRUST',
    //       mainLink: '',
    //       subArr: [
    //         {link: '#', title: 'FOOD GRADE'},
    //         {link: '#', title: 'PENTACERA™'},
    //         {link: '#', title: 'BABY SKINCARE'},
    //         {link: '#', title: 'CERTIFICATIONS'},
    //         {link: '#', title: 'INGREDIENT'},
    //       ]
    //     },
    //     {
    //       menuType: 'A',
    //       mainText: 'STOCKISTS',
    //       mainLink: 'a.html',
    //       subArr: []
    //     },
    //     {
    //       menuType: 'A',
    //       mainText: 'REVIEW',
    //       mainLink: 'b.html',
    //       subArr: []
    //     },
    //     {
    //       menuType: 'S',
    //       mainText: 'BENEFITS',
    //       mainLink: '',
    //       subArr: [
    //         {link: '#', title: 'EVENTS'},
    //         {link: '#', title: 'MEMBERS'},
    //       ]
    //     },
    //   ]
    // },
  // Requet 호출: 외부 서버(http주소) 및 파일(json,xml...) 호출
  // Response 를 통해서 결과 및 데이터를 받는다.
  // Response 의 결과가 (Error) 라면 catch처리를 mutations에 위탁
  // Response 의 결과가 (Success) 라면 then처리 mutations에 위탁
    // actions: {},

    // actions로 부터 전달받은 상황을 실제 처리
    // 처리란? : state를 업데이트 합니다.
    // mutations: {},
    // state 즉 데이터를 컴포넌트 (View영역) 넣어서 화면갱신한다.
    // 통상 getters는 컴포넌트에서 computed로 받는 경우가 많다.
    // computed 는 컴포넌트에 내용 갱신시 캐쉬에 대기중이다.
    // getters: {
    //   getMbMenuData(state){
    //     // 여러가지 데이터를 원하는 값으로 정렬하는 과정 필요
    //     return state.mbMenuData
    //   }
    // }
})