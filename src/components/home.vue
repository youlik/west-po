<template>
    <div class="home-containers">
        <div style="margin-top: 1.25rem">
            <span style="font-size: 40px;color: white;">
                           欢迎来到Youlik的个人网站
            </span>
            <div>
                <a href="https://juejin.cn/user/1151943917439230" class="link">掘金</a>
                <a href="https://juejin.cn/user/1151943917439230" class="link">CSDN</a>
            </div>
        </div>
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
        margin: 0 auto;
        /*display: flex;*/
        height: 4.5rem;
        /*align-items: center;*/
        /*justify-content: center;*/
        padding: 5px;
        background-repeat: no-repeat;
        background: url("../../src/assets/Hippopx.jpg");
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
    .link{
        display: inline-block;
        padding: 20px;
        color: #ffffff;
        min-width: 80px;
        font-size: 20px;
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