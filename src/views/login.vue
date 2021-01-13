<template>
    <div>
       <input v-model="username">
        <input v-model="password">
        <button @click="login"></button>
    </div>
</template>

<script>
    export default {
        name: "login.vue",
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

</style>