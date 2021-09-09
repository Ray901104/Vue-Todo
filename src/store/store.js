import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import todo from "./modules/todo";
import post from "./modules/post";

Vue.use(Vuex);
//순서 중요
Vue.use(VueAxios, axios);

// 로컬스토리지를 더이상 사용하지 않는다
// const storage = {
//   fetch() {
//     const arr = [];
//     if (localStorage.length > 0) {
//       for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
//           arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//         }
//       }
//     }
//     return arr;
//   },
// };

export const store = new Vuex.Store({
  modules: {
    todo,
    post,
  },
});
