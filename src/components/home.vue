<template>
    <div class="home-containers shadow">
        <div>
            <section class="image-container">
                <el-carousel :interval="4000" type="card" height="300px">
                    <el-carousel-item v-for="item in imageList">
                        <img :src="item.url">
                    </el-carousel-item>
                </el-carousel>
            </section>
            <section class="body-container">

            </section>
            <path-map></path-map>
        </div>
        <div class="tip-container shadow">
                <div class="block-title">Youlik 一个爱笑的男孩子</div><br>
                <a href="https://juejin.cn/user/1151943917439230" style="padding-left: 15px">掘金传送门</a><br>
                <a href="https://blog.csdn.net/Yuoliku?spm=1019.2139.3001.5343" style="padding-left: 15px">CSDN传送门</a>
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
        components:{pathMap,scrollImage}
    }
</script>

<style scoped>
    .home-containers{
        width: 960px;
        display: flex;
    }

    .image-container{
        background-color: #ffffff;
    }

    .tip-container{
        width: 240px;
        height: 200px;
        margin-left:10px;
        text-align: left;
        flex: 0 0 240px;
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