<template>
    <div class="container">
      已完成{{ done }}/全部{{ list.length }}
      <button @click="clear">清除已完成</button>
    </div>
</template>
  
  <script>
  import { defineComponent, ref ,computed} from 'vue'
  export default defineComponent({
    name: 'NavFooter',
    props:{
      list: {
      type: Array,

      required: true,
    },
    },
    components:{
  
    },
    emits:['clear'],
    setup(props,ctx){
      let done = computed(()=>{
        return props.list.filter(item=>item.done).length
      })
      
      let clear = ()=>{
        let undone = props.list.filter(item=> item.done === false)
        ctx.emit('clear',undone)
      }
      return {
        done,
        clear,
      }
    }
  })
  </script>
  
  <style lang="scss" scoped>
  .container{
      display: flex;
      align-items: center;   
      button {
        margin-left: 10px;
      }
       
    }
  
  </style>