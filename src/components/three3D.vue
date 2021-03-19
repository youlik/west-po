<template>
    <div class="three-3d-container">

    </div>
</template>

<script>
    import * as THREE from 'three'

    export default {
        name: "three3D",
        data() {
            return {}
        },
        methods: {
            draw() {
                // 创建场景
                var scene = new THREE.Scene();
// 创建透视相机
                var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 创建一个 WebGL 渲染器
                var renderer = new THREE.WebGLRenderer({
                    alpha: true,// 默认情况下为黑色场景，此处设置为透明（即白色场景）
                });
// 设置渲染器为全屏
                renderer.setSize(window.innerWidth, window.innerHeight);
// 添加到网页中
                document.body.appendChild(renderer.domElement);
                renderer.render(scene,camera)
            }
        },
        created() {
            // this.draw()
        }
    }
</script>

<style scoped>
    .three-3d-container {

    }
</style>