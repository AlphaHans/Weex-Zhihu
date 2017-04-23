<template>
    <div>
        <app-header title="知乎日报"></app-header>

        <list class="list" @loadmore="fetch" loadmoreoffset="10">
            <cell class="row" v-for="obj in titles" v-on:click="onclick(obj)">
                <!--当控件属性来自v-for时候，需要使用v-bind。-->
                <!--v-bind:src可以简写为src-->
                <image class="text_img" v-bind:src="obj.image"></image>
                <text class="text">{{obj.title}}</text>
            </cell>
        </list>
    </div>
</template>

<script>
    import AppHeader from "../components/app-head.vue";


    export default {
        components: {
            AppHeader
        },
        data () {
            return {
                titles: [],
                baseURL: '',
                date: '',
            }
        },
        created () {
            this.httpGet('http://news-at.zhihu.com/api/4/news/latest', (res)=> {
                this.date = res.date;
                for (let i = 0; i < 10; i++) {
                    let title = res.stories[i].title;
                    let image = res.stories[i].images[0];
                    let id = res.stories[i].id;
                    this.titles.push({id, title, image});
                }
            });
        },
        methods: {
            fetch (event) {
                this.date = this.date - 1;
                var url = 'http://news-at.zhihu.com/api/4/news/before/' + this.date;
                this.showToast('正在获取：' + this.date);
                this.httpGet(url, (res)=> {
                    for (let i = 0; i < 10; i++) {
                        let title = res.stories[i].title;
                        let image = res.stories[i].images[0];
                        let id = res.stories[i].id;
                        this.titles.push({id, title, image});
                    }
                });
            },

            onclick: function (obj) {
                this.showToast(obj.id);
                this.$router.push({path: '/details：' + obj.id});
            },
        }
    }
</script>

<style scoped>
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