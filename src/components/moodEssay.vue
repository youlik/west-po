<template>
    <div class="mood-essay-container">
        <time-line-image></time-line-image>
    </div>
</template>

<script>
    import timeLineImage from "../views/timeLineImage";
  export default {
    name: "moodEssay",
    data(){
      return {
        timer:null,
        flag:true
      }
    },
    components:{timeLineImage},
    methods:{

    }
  }
</script>

<style scoped>
    .mood-essay-container{
        width: 960px;
        height: 500px;
        background-color: #ffffff;
    }
</style>