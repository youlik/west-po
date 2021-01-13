<template>
    <div class="tabs">
        <div class="title-box" :class="selectId===item.id?'selected_tabs':'define_tabs'"  v-for="item in titleList" :key="item.id"
             @click="selectTabs(item.id)">
            {{item.title}}
        </div>
        <div @click="$emit('login')">登录</div>

    </div>
</template>

<script>
    export default {
        name: "tabs",
        data(){
            return{
                selectId:'home',
                titleList:[{title:'首页',id:'home'},{title:'心情随笔',id:'moodEssay'},{title:'韶华追忆',id:'history'},{title:'技术分享',id:'study'},{title:'个人归档',id:'myHistory'}
                ,{title:'留言板',id:'message'}],
                flag:false,
            }
        },
        components:{
        },
        methods:{
            selectTabs(id){
                this.selectId=id
                this.$emit('tabs',id)
            }
        }
    }
</script>

<style scoped>
    .tabs{
        height: 61px;
        display: flex;
        align-items: center;
        justify-content:center;
        position: fixed;
        background-color: #ffffff;
        width: 100%;
        top:0;
        z-index: 9999999;
    }
    .selected_tabs{
        color: #007fff ;
        cursor: pointer;
    }
    .define_tabs{
        cursor: pointer;
    }
    .title-box{
        width: 120px;
        line-height: 61px;
        display: flex;
        align-items: center;
        justify-content: center;
       
    }
</style>