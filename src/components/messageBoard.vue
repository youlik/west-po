<template>
    <div class="message-board-container">
        <div class="card-list-container">
            <message-card :data="item" :key="index" v-for="(item,index) in list"></message-card>
        </div>
        <div style="width: 400px;height: 400px;float: right">
            <base-input label="名称" v-model="message.author"></base-input>
            <base-input label="内容" v-model="message.content"></base-input>
            <base-button label="提交" @click="addMess"></base-button>
        </div>
    </div>
</template>

<script>
    import dayjs from 'dayjs'
    import BaseInput from "../basicComponent/baseInput";
    import BaseButton from "../basicComponent/baseButton";
    import MessageCard from "./messageCard";

    export default {
        name: "messageBoard",
        components: {MessageCard, BaseButton, BaseInput},
        data() {
            return {
                list: [],
                messageContent: '',
                message: {
                    author: "",
                    content: ""
                }
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
                if (!this.message.content || !this.message.author) {
                    this.$message.warning('请填写完整')
                    return;
                }
                this.$axios.post('/list/addMessage', this.message).then(res => {
                    this.$message.success('留言成功')
                    this.messageContent = ''
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
        width: 9rem;
        margin: 0 auto;
        overflow-y: auto;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
    }

    .message-container {
        padding: 10px;
        background-color: #B2DFEE;
        min-height: 50px;
        border-radius: 16px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);;
    }

    .card-list-container {
        float: left;
        width: 6.7rem;
    }

    .submit-container {
        width: 100%;
        height: 100px;
        border: 1px solid grey;
    }
</style>