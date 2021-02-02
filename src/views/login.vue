<template>
    <div class="login-container">
        <input v-model="username">
        <input v-model="password">
        <base-button></base-button>
    </div>
</template>

<script>
    import BaseButton from "../basicComponent/baseButton";
    export default {
        name: "login.vue",
      components: {BaseButton},
      data(){
            return{
                username:"",
                password:""
            }
        },
        methods:{
            login(){
                this.$reqs.post("/users/login",{
                    username:this.username,
                    password:this.password
                }).then(function (result) {
                    console.log(result)
                })
            }
        }
    }
</script>

<style scoped>
    .login-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 400px;
    }

    .btn{
        width: 40px;
        height: 40px;
    }
</style>