<template>
    <div class="tabs">
        <div class="title-box" :class="selectId===item.id?'selected_tabs':'define_tabs'" v-for="item in routeList"
             :key="item.id"
             @click="selectTabs(item.id)">
            <router-link :to="item.path"><span>{{item.meta.title}}</span></router-link>
        </div>
        <div @click="$emit('login')">登录</div>
    </div>
</template>

<script>
  import router from '../router/index'

  export default {
    name: "tabs",
    data() {
      return {
        selectId: 'home',
        flag: false,
        routeList: []
      }
    },
    components: {},
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
        width: 100%;
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