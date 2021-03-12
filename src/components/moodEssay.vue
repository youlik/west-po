<template>
    <div class="mood-essay-container">
        <path-map></path-map>
    </div>
</template>

<script>
    import timeLineImage from "../views/timeLineImage";
    import pathMap from "../views/pathMap"
  export default {
    name: "moodEssay",
    data(){
      return {
        timer:null,
        flag:true
      }
    },
    components:{timeLineImage,pathMap},
    methods:{

    }
  }
</script>

<style scoped>
    .mood-essay-container{
        background-color: #ffffff;
        background: url("../../src/assets/back.jpg");
        height: 1080px;
        background-size: 1920px 1080px;
    }
</style>