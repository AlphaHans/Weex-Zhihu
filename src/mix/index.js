/**
 * Created by Hans on 17/4/21.
 */
    //弹框模块 toast dialog等
var modal = weex.requireModule('modal')
var stream = weex.requireModule('stream')

export default {
    methods: {
        jump (to) {
            console.log('debug:jump to' + to);
            if (this.$router) {
                console.log('debug:push' + to);
                this.$router.push(to)
            }
        },
        showToast(msg){
            modal.toast({
                'message': msg,
                'duration': 500
            });
        },
        httpGet (url, callback) {
            stream.fetch({ method: 'GET', url: url,mode: 'cors',
            }, function (ret) {
                callback(JSON.parse(ret));
            },()=>{});
        }

    }
}
