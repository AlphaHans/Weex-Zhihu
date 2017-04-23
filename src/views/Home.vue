<template>
    <div id="root">
        <transition name="slide">
            <router-view style="flex:1"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        methods: {
//            back: function () {
//                console.log("debug: android back");
//                this.$router.back()
//            }
        }
    }
</script>