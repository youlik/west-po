<template>
    <div class="message-board-container">
        <div class="message-container">
            <div style="display: flex;justify-content: flex-start;">
                <img src="../assets/blueSky.jpg" width="20px" height="20px" style="border-radius: 25px">
                <span>youlik</span>
            </div>
            <div >

            </div>
            <div style="text-align: right">2020-12.12</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "messageBoard"
  }
</script>

<style scoped>
    .message-board-container{
        height: 700px;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);;
    }
    .message-container{
        padding: 10px;
        background-color: #B2DFEE;
        min-height: 50px;
        border-radius: 16px;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);;
    }
</style>