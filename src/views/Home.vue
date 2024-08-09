<template>
  
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>

</template>

<script>
import { defineComponent, computed } from "vue";
import NavFooter from "@/components/navFooter/NavFooter";
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  props: {},
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  setup(props, ctx) {
    const store = useStore();
    let list = computed(() => {
      return store.state.list;
    });
    let del = (index) => {
      store.commit("delTodo", index);
    };
    let clear = (data) => {
      store.commit("clear", data);
    };
    let add = (value) => {
      console.log(value);
      let flag = false;
      list.value.map((item) => {
        if (item.name === value) {
          flag = true;
          console.log("存在");
        }
      });
      if (flag) {
        return;
      }
      store.commit("addTodo", {
        name: value,
        done: false,
      });
    };

    return {
      add,
      del,
      clear,
      list,
    };
  },
});
</script>

<style lang="sass" scoped></style>
