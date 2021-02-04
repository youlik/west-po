<template>
    <div class="message-board-container">
        <div class="message-container" v-for="item in list">
            <div style="display: flex;justify-content: flex-start;">
                <img src="../assets/blueSky.jpg" width="20px" height="20px" style="border-radius: 25px">
                <span>{{item.author}}</span>
            </div>
            <div>
                {{item.content}}
            </div>
            <div style="text-align: right">{{item.time}}</div>
        </div>
        <div class="submit-container">
            <el-input :row="2" v-model="messageContent"></el-input>
            <base-button @click="addMess" label="提交"></base-button>
        </div>
    </div>
</template>

<script>
    import dayjs from 'dayjs'
    import BaseInput from "../basicComponent/baseInput";
    import BaseButton from "../basicComponent/baseButton";

    export default {
        name: "messageBoard",
      components: {BaseButton, BaseInput},
      data() {
            return {
                list: [],
                messageContent: ''
            }
        },
        methods: {
            fetchData() {
                this.$axios.get("/users/getHeart").then(res => {
                    this.list = res.data
                    this.list.forEach(item => item.time = dayjs(item.time).format('YYYY-MM-DD dddd HH'))
                })
            },
            addMess() {
                this.$axios.post('/users/addMessage', {author: '张三', content: '5555555'}).then(res => {
                    this.$message.success('留言成功')
                    this.fetchData()
                })
            }
        },
        created() {
            this.fetchData()
        }
    }
</script>

<style scoped>
    .message-board-container {
        height: 700px;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);;
    }

    .message-container {
        padding: 10px;
        background-color: #B2DFEE;
        min-height: 50px;
        border-radius: 16px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);;
    }

    .submit-container {
        width: 100%;
        height: 100px;
        border: 1px solid grey;
    }
</style>