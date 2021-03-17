<template>
    <div class="message-card-container">
        <div class="title-container">来自：{{data.author}} {{data.time}}</div>
        <div class="content-container">
            {{data.content}}
        </div>

    </div>
</template>

<script>
    export default {
        name: "messageCard",
        props:{
            data:{
                type:Object,
                default:()=>{}
            }
        }
    }
</script>

<style lang="scss" scoped>
    .message-card-container{
        display: inline-block;
        width: 400px;
        height: 400px;
        margin: 10px;
        box-sizing: border-box;
        float: left;
        box-shadow: 0 2px 2px rgba(10, 16, 20, .24), 0 0 2px rgba(10, 16, 20, .12);
        background: url("../../src/assets/background.jpg");
        background-size: 400px 400px;
        background-repeat: no-repeat;

    }

    .title-container{
        padding: 10px;
        text-align: left;
        font-size: 14px;
        border-bottom: 1px solid saddlebrown;
    }

    .content-container{
        padding: 10px;
        box-sizing: border-box;
    }
</style>