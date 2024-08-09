<template>
  <div v-if="list.length > 0">
    <div v-for="(item, index) in list" :key="index">
      <div class="item">
        <input type="checkbox" v-model="item.done" />
        <span :class="{ done: item.done }">{{ item.name }}</span>
        <button @click="del(index)">删除</button>
      </div>
    </div>
  </div>
  <div v-else>没有新任务了</div>


</template>

<script>
import { defineComponent, reactive, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "NavMain",
  props: {
    list: {
      type: Array,

      required: true,
    },
  },
  components: {},
  emits: ["del"],
  setup(props, ctx) {
    let del = (index) => {
      ctx.emit("del", index);
    };
    return {
      del,
    };
  },
});
</script>

<style scoped lang="scss">
.item {
  height: 30px;
  line-height: 30px;
  position: relative;
  button {
    position: absolute;
    right: 20px;
    top: 6px;
    display: none;
    z-index: 99;
    cursor: pointer;
  }
  &:hover {
    background: #ccc;
    button {
      display: block;
    }
  }
}
</style>
