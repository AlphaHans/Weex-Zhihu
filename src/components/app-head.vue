<template>
    <div class="bar">
        <text class="bar_lr_text"
              v-if="vLeft"
              @click="onLeftClick()">返回</text>
        <text class="bar_title">{{title}}</text>
        <text class="bar_lr_text"
              @click="onRightClick()"
              v-if="vRight">分享</text>
    </div>
</template>

<style>
    .bar {
        height: 100px;
        flex-direction: row;
        background-color: #41B883;
    }

    .bar_title {
        flex: 1;
        color: #ffffff;
        height: 100px;
        font-size: 45px;
        padding-top: 25px;
        text-align: center;
        text-overflow: ellipsis;
        lines: 1;
        padding-left: 50px;
        padding-right: 50px;
    }

    .bar_lr_text {
        height: 100px;
        width: 100px;
        color: #fff;
        text-align: center;
        font-size: 30px;
        line-height: 100px;
        background-color: lightseagreen;
    }

</style>

<script>


    export default {
        props: ['title', 'vLeft', 'vRight'],
        data(){
            return {}
        },
        methods: {
            onLeftClick: function () {
                this.$router.back();
            },
            onRightClick: function () {

            }
        }
    }
</script>