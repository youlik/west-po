<template>
    <div class="base-range-container">
        <span class="label-container">{{label}}</span>
        <input type="range" :max="maxSize" :step="step" value="0" ></input>
    </div>
</template>

<script>
    export default {
        name: "base-range",
        props:{
            label:{
                type:String,
                default:"评分"
            },
            width:{
                type:String,
                default:'200px'
            },
            maxSize:{
                type:Number,
                default:5
            },
            step:{
                type:Number,
                default:0.5
            }
        }
    }
</script>

<style scoped>
    .base-range-container{
        display: flex;
        justify-content: flex-start;
    }

    [type="range"] {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
        outline: 0;
        cursor: pointer;
        width:calc(var(--number,5) * 2em);
        --mask-url: url("data:image/svg+xml,%3Csvg width='12' height='11' viewBox='0 0 12 11' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 0l1.693 3.67 4.013.476L8.74 6.89l.788 3.964L6 8.88l-3.527 1.974.788-3.964L.294 4.146l4.013-.476L6 0z'/%3E%3C/svg%3E");
        --mask: var(--mask-url) repeat-x left / 2em 100%;
    }

    [type="range"]::-webkit-slider-runnable-track {
        background: #f59b00;
        height: 2em;
        -webkit-mask: var(--mask);
        mask: var(--mask);
    }

    [type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 0;
        height: 100%;
        box-shadow: 999em 0 0 999em #ededef;
    }

    [type="range"]:focus::-webkit-slider-thumb {
        box-shadow: 999em 0 0 999em #ededef;
        background: #f59b00;
    }
    /* 只展示 */
    [type="range"][readonly]{
        pointer-events:none;
    }
    /* 兼容火狐浏览器 */
    [type=range],
    _::-moz-range-track {
        appearance: auto;
    }
    [type=range],
    _::-moz-range-track {
        appearance: none;
        -webkit-mask: var(--mask);
        mask: var(--mask);
        height: 2em;
    }

    [type="range"]::-moz-range-track {
        background:#ededef;
        height: inherit;
    }

    [type="range"]::-moz-range-progress {
        background: #f59b00;
        height: inherit;
    }

    [type="range"]::-moz-range-thumb {
        width: 0;
        opacity: 0;
    }
</style>