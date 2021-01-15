<template>
    <div class="scroll-image-container">
        <section class="image-container">
            <img src="../assets/blueSky.jpg" style="width: 960px;height: 300px">
            <img src="../assets/image1.jpg" style="width: 960px;height: 300px">
            <img src="../assets/image2.jpg" style="width: 960px;height: 300px">
            <img src="../assets/image3.jpg" style="width: 960px;height: 300px">
        </section>
        <section class="dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </section>
<!--        <div class="left-triangle triangle">-->
<!--            <span>&lt;</span>-->
<!--        </div>-->
<!--        <div class="right-triangle triangle">-->
<!--            <span>&gt;</span>-->
<!--        </div>-->
    </div>
</template>

<script>
  export default {
    name: "scrollImage",
    data(){
      return{
        timer:null
      }
    },
    methods:{
      autoRullImg(){
        let container = document.getElementsByClassName('image-container')[0];
        let imgNum = container.children.length;
        let scrollContainer = document.getElementsByClassName('scroll-image-container')[0];
        let imgWidth = container.children[0].offsetWidth;
        let index = 0;
        this.timer = setInterval(()=>{
          movement(-imgWidth)
        })
        function movement(offset) {
            let oldLeft  = parseInt(container.style.left)
            let newLeft = oldLeft + offset
            container.style.left = newLeft + "px"
        }
      },

    },
    created() {
      this.autoRullImg()
    }
  }
</script>

<style scoped>
    .scroll-image-container{
        height: 300px;
        width: 960px;
        position: relative;
        overflow: hidden;
    }
    .image-container{
        position: absolute;
        left:0;
        width: 9999px;
    }
    .image-container >img{
        display: block;
        float: left;
        height: 200px;
    }
    .dots{
        width: inherit;
        position: absolute;
        bottom: 10px;
        text-align: center;
    }
    .dots > .dot{
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #87837e;
        margin-right: 10px;
        z-index: 9999;
        cursor: pointer;
    }
</style>