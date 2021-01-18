<template>
    <section class="time-line-container">
        <div class="time-line-class">
            <div class="circle-class"></div>
            <div class="line-class"></div>
        </div>
        <div>
            <div style="text-align: left">北京</div>
            <div class="standard-image">
                <img src="../assets/image3.jpg" style="width:   100%">
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: "timeLineImage"
  }
</script>

<style scoped>
    .time-line-container{
        display: flex;
    }
    .circle-class{
        width: 10px;
        height: 10px;
        border-radius: 5px;
        margin: 0;
        display: inline-block;
        background-color: pink;
    }
    .line-class{
        width: 2px;
        height: 300px;
        margin-top: -4px;
        margin-left: 4px;
        background-color: lightblue;
    }
    .time-line-class{
        width: 10px;
    }
    .standard-image{
        width: 300px;
        height: 300px;
    }
</style>