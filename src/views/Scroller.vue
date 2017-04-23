<template>
    <div id="root">
        <app-header title="知乎日报"></app-header>

        <div class="divide"></div>
        <scroller class="scroller">
            <div class="row" v-for="(obj, index) in titles" v-on:click="onclick()">
                <!--当控件属性来自v-for时候，需要使用v-bind。-->
                <!--v-bind:src可以简写为src-->
                <image class="text_img" v-bind:src="obj.image"></image>
                <text class="text">{{obj.title}}</text>
            </div>
        </scroller>
    </div>
</template>

<!--注意目前weex不支持background 只支持baground-color  -->
<style>

    .divide {
        height: 5px;
        background-color: #35475D;
    }

    .scroller {
        padding-top: 5px;
    }

    .row {
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 5px;
        flex-direction: row;
        padding-left: 15px;
        padding-right: 15px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #DDDDDD;
    }

    .text {
        font-size: 40px;
        color: #34495E;
        margin-left: 35px;
        text-overflow: ellipsis;
        width: 500px;
        lines: 2;
        margin-top: 30px;
    }

    .text_img {
        margin-top: 15px;
        margin-bottom: 15px;
        width: 150px;
        height: 150px;
    }
</style>


<script>
    import AppHeader from "../components/app-head.vue";

    //    //网络请求模块
    var stream = weex.requireModule('stream')
    //弹框模块 toast dialog等
    var modal = weex.requireModule('modal')

    function getData(url, callback) {
        stream.sendHttp({
            method: 'GET',
            url: url
        }, function (ret) {
            callback(JSON.parse(ret));
        });
    }
    // var api = require('Http.js');

    //    import {getData} from 'Http';

    module.exports = {
        components: {
            AppHeader
        },
        data () {
            return {
                titles: [],
                baseURL: ''
            }
        },
        created () {
            var self = this;//涉及函数作用于问题 可以使用箭头函数代替
            getData('http://news-at.zhihu.com/api/4/news/latest', function (res) {
                for (let i = 0; i < 10; i++) {
                    let title = res.stories[i].title;
                    let image = res.stories[i].images[0];
                    let id = res.stories[i].id;
                    self.titles.push({id, title, image});
                }
            });
        },
        methods: {
            onclick: function () {
                modal.toast({
                    'message': 'click',
                    'duration': 500
                });
                this.$router.push('/details');
            }
        }
    }
</script>