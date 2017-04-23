/**
 * Created by Hans on 17/4/21.
 */
import Router from 'vue-router'
import ArticleListView from './views/ArticleListView.vue'
import ArticleDetailsView from './views/ArticleDetailsView.vue'

Vue.use(Router);

export default new Router({
    mode: 'abstract',
    routes: [
        {path: '/', component: ArticleListView},
        {path: '/details:id', name: 'details', component: ArticleDetailsView}
    ]
});