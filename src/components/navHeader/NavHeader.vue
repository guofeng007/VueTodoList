<template>
  <div>
    <input
      type="text"
      placeholder="请输入内容"
      v-model="value"
      @keydown.enter="add"
    />
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "NavHeader",
  props: {},
  components: {},
  setup(props, ctx) {
    let value = ref("");
    let add = () => {
      console.log(value.value);
      ctx.emit("add", value.value);
      value.value = ''
    };
    return {
      value,
      add,
    };
  },
});
</script>

<style lang="scss" scoped>
input {

  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
}
</style>
