import Home from './src/views/Home.vue'
import mixins from './src/mix/index'
import router from  './src/router'

// register global mixins.
Vue.mixin(mixins);

new Vue(Vue.util.extend({ el: '#root', router }, Home));

router.push('/');
