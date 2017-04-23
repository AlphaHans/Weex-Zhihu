<template>
    <div>
        <app-header v-bind:title="title" vLeft="true" vRight="true"></app-header>
        <image class="bg" v-bind:src="imgUrl"></image>
    </div>
</template>

<style>
    .bg {
        height:600px;
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