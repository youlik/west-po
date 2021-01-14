<template>
    <div class="home-containers">
        <scroll-image></scroll-image>
        <path-map></path-map>
    </div>
</template>

<script>
  import pathMap from "../views/pathMap"
  import scrollImage from "./scrollImage";
    export default {
        name: "home",
        components:{pathMap,scrollImage}
    }
</script>

<style scoped>
    .home-containers{
        width: 960px;
    }
</style>