<template>
    <div class="tabs">
        <div class="title-box" :class="selectId===item.id?'selected_tabs':'define_tabs'" v-for="item in routeList"
             :key="item.id"
             @click="selectTabs(item.id)">
            <router-link :to="item.path"><i :class="item.meta.icon" style="font-size: 16px"></i><span style="height: 100%;font-size: 16px">{{item.meta.title}}</span></router-link>
        </div>
    </div>
</template>

<script>
  import router from '../router/index'
  import Login from '../views/login'
  import baseDialog from "../basicComponent/baseDialog";
  export default {
    name: "tabs",
    data() {
      return {
        selectId: 'home',
        flag: false,
        routeList: []
      }
    },
    components: {Login,baseDialog},
    methods: {
      selectTabs(id) {
        this.selectId = id
        this.$emit('tabs', id)
      }
    },
    created() {
      this.routeList = router.options.routes
      this.$router.push({path: '/home'})
    }
  }
</script>

<style scoped>
    .tabs {
        height: 61px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        width: 10rem;
        opacity: 0.8;
        background: url("../../src/assets/home.jpg");
        top: 0;
        z-index: 9999999;
    }

    .selected_tabs {
        color: #007fff !important;
        cursor: pointer;
    }

    .define_tabs {
        cursor: pointer;
    }

    /deep/ .router-link-active {
        text-decoration: none;
    }

    svg {
        width: 110px;
    }

    a {
        text-decoration: none;
        font-size: 16px;
        color: white;
    }

    .title-box {
        width: 120px;
        line-height: 61px;
        display: flex;
        align-items: center;
        justify-content: center;

    }
</style>