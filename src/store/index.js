import { createStore } from "vuex";

export default createStore({
  state: {
    list: [
      {
        name: "吃饭",
        done: false,
      },

      {
        name: "写作业",
        done: false,
      },

      {
        name: "睡觉",
        done: true,
      },
    ],
  },
  mutations: {
    addTodo(state, payload) {
      state.list.push(payload);
    },
    delTodo(state, payload) {
      state.list.splice(payload, 1);
    },
    clear(state, payload) {
      state.list = payload;
    },
  },
  actions: {},
  modules: {},
});
