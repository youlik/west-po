<template>
    <div class="card-container">
        <div class="card-container-title">{{cardData.title}}</div>
        <section class="card-container-main">
            {{cardData.content}}
        </section>
        <div class="card-container-footer">{{cardData.time}}{{cardData.author}}</div>
    </div>
</template>

<script>
    export default {
        name: "card",
        props:{
            'cardData':{
                type:Object,
                default:()=>{}
            }
        }
    }
</script>

<style scoped>
    .card-container{
        width: 100%;
        height: 300px;
        padding: 0 10px;
        border-radius: 4px;
        background-color: #ffffff;
        border: 1px solid yellow;
    }
    .card-container-main{
        height: 200px;
    }
    .card-container-title{
        line-height: 50px;
        font-size: 20px;
        width: 100%;
        text-align: left;
    }
    .card-container-footer{
        line-height: 50px;
        font-size: 18px;
        text-align: right;
    }
</style>