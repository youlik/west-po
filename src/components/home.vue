<template>
    <div class="home-containers shadow">
        <section style="display: flex;justify-content: space-between;align-items: center">
            <div class="left-container"></div>
            <h1 style="z-index: 1; transform: translate3d(0px, 0px, 1px);font-size: 0.5rem">
                你好<br>欢迎来到Youlik的个人博客
            </h1>
            <div class="right-container"></div>
        </section>
        <section>
            备案号
        </section>
    </div>
</template>

<script>
  import pathMap from "../views/pathMap"
  import scrollImage from "./scrollImage";
    export default {
        name: "home",
        data(){
          return {
            imageList:[{url:require('../assets/image1.jpg')},{url:require('../assets/image2.jpg')},{url:require('../assets/image3.jpg')}]
          }
        },
      methods:{

      },
      created() {
        this.$axios({
          url:'/',
        }).then(res=>{
          console.log(res)
        })
      },
      components:{pathMap,scrollImage}
    }
</script>

<style scoped>
    .home-containers{
        height: 2000px;
        margin: 0 auto;
        padding: 5px;
    }

    .image-container{
        background-color: #ffffff;
    }

    .left-container{
        width: 160px;
        height: 400px;
        background: url("../assets/left-card.jpg");
        background-size: 200px 400px;
        margin-top: -20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .right-container{
        width: 160px;
        height: 400px;
        background: url("../assets/right-card.jpg");
        background-size: 200px 400px;
        margin-top: 70px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .tip-container{
        width: 240px;
        height: 200px;
        margin-left:10px;
        text-align: left;
        /*flex: 0 0 240px;*/
        font-size: 10px;
        background-color: #ffffff;

    }
    .shadow{
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    }
    .block-title{
        border-bottom: 1px solid rgba(230,230,231,.5);
        text-align: left;
        padding: 15px
    }
    .body-container{

    }
</style>