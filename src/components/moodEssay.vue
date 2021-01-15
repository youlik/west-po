<template>
    <div>
        <el-button @click="jieliu"></el-button>
    </div>
</template>

<script>
  export default {
    name: "moodEssay",
    data(){
      return {
        timer:null,
        flag:true
      }
    },
    methods:{
      fandou(flag){
        clearInterval(this.timer)
        if(flag){
          this.flag = false
          setTimeout(()=>flag=true,2000)
          this.timer = setInterval(()=>{
            console.log('time')
          },2000)
        }
      },
      jieliu(){
        this.timer && clearInterval(this.timer)
        this.timer = setInterval(()=>{
          console.log("节流")
        },2000)
      }
    }
  }
</script>

<style scoped>

</style>