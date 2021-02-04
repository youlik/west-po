<template>
    <div class="login-container">
        <section>
            <base-input v-model="username" label="用户名"></base-input>
            <base-input v-model="password" type="password" label="密码"></base-input>
            <base-button @click="submit"></base-button>
        </section>

    </div>
</template>

<script>
    import BaseButton from "../basicComponent/baseButton";
    import BaseInput from "../basicComponent/baseInput";
    export default {
        name: "login.vue",
      components: {BaseInput, BaseButton},
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
            },
          submit(){
            console.log(this.username)
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