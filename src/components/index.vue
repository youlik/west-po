<template>
    <div class="home-container">
        <section class="flash">
            <div class="flash-bar"></div>
            <img src="../assets/home.jpg" height="100px" width="1920px">
        </section>
        <tabs @login="flag=true"></tabs>
        <div class="body-container">
            <section class="timeline-container">
                <router-view></router-view>

            </section>
        </div>

    </div>
</template>

<script>
  // import mingDialog from "./mingDialog";
  import card from "./card";
  import tabs from "./tabs";
  import pathMap from "../views/pathMap"

  export default {
    name: "index.vue",
    data() {
      return {
        flag: false,
        username: '',
        password: '',
        list: [{title: '张三', content: '这是一只', author: '小鸡'}, {title: '张三', content: '这是一只', author: '小鸡'}]
      }
    },
    methods: {
      login() {
        this.flag = !this.flag
        this.$reqs.post("/users/login", {
          username: this.username,
          password: this.password
        }).then(function (result) {
          console.log(result)
          this.flag = !this.flag
        })
      },
      getList() {
        this.$axios.get("/users/getHeart",).then((result) => {
          console.log(result)
          this.list = result.data
        })
      },
      addUser() {
        this.$reqs.post("/users/add", {
          username: this.username,
          password: this.password
        }).then(function (result) {
          console.log(result)
        })
      }
    },
    created() {
      this.getList()
    },
    components: {tabs, card, pathMap}
  }
</script>

<style scoped>
    .home-container {
        width: 1920px;
        height: 1080px;
        overflow: hidden auto;
        background-color: #f4f5f5;
        /*background-image: url("../assets/11.jpg");*/
        background-size: 1920px 1080px;
    }

    .header-container {
        height: 170px;
    }

    .body-container {
        max-width: 960px;
        width: 100%;
        height: 900px;
        margin: 0 auto;
    }
    .flash-bar {
        position: absolute;
        left:-100px;
        width: 20px;
        height: 100px;
        background: #fff;
        opacity: 0.5;
        transform: skewX(-30deg);
        transform-origin: 0 100%;
    }
    .flash:hover .flash-bar {
        left:1920px;
        transition: left ease-in-out 1s;
    }
    .message-container{
        width: 200px;
        height: 100px;
        background-color: #ffffff;
    }
    .timeline-container {
        margin-top: 70px;
    }

    .content-container {
        width: 800px;
        height: 1000px;
        margin: 0 auto;
    }

    .dialog-layout-default {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #send-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    button {
        background: #5f55af;
        border: 0;
        border-radius: 5px;
        padding: 10px 30px 10px 20px;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
    }

    button svg {
        display: inline-block;
        vertical-align: middle;
        padding-right: 5px;
    }

    .btn {
        padding: 10px 0;
    }

    .label {
        color: #363636;
        display: block;
        font-size: 16px;
        margin: 0 0 8px;
        font-weight: 700;
    }

    button:hover svg {
        animation: fly 2s ease 1;
    }

    @keyframes fly {
        0% {
            transform: translateX(0%);
        }

        50% {
            transform: translateX(300%);
        }

        100% {
            transform: translateX(0);
        }
    }

</style>