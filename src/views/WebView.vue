<template>
    <div>
        <app-header v-bind:title="title" vLeft="true" vRight="true"></app-header>
    </div>
</template>

<style>
    .web {
        width: auto;
        height: 1000px;
        background-color: #000;
    }
</style>

<script>
    import AppHeader from '../components/app-head.vue'

    module.exports = {
        components: {
            AppHeader
        },
        data () {
            return {
                title:'',
                body:'',
                id: '',
                imgUrl: ''
            }
        },
        created () {
//            let urlTemp = window.location.href;
//            console.log("WebView="+urlTemp);
//            let id = getQueryString("id");
//            console.log("WebView="+id);
//            this.url = "http://news-at.zhihu.com/api/4/news/" + id;
//            console.log(this.url);
            let tempId = this.$route.params.id;
            let id = tempId.substring(1,tempId.length);
            console.log("debug: id = " + id);
            let url = "http://news-at.zhihu.com/api/4/news/" + id;
            console.log("debug: url = " + url);
            this.httpGet(url, (res)=> {
                this.body = res.body;
                console.log("debug: this.body = " + this.body);
                this.title = res.title;
                console.log("debug: this.title = " + this.title);
                this.imgUrl = res.image;
                console.log("debug: this.imgUrl = " + this.imgUrl);
            });
        },
        methods: {}
    }
</script>