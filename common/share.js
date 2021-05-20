export default {
    data() {
       return {
            share:{
               title: 'ZPFOOD',
             
            }
       }
    },
    onShareAppMessage(res) { //发送给朋友
        return {
            title: this.share.title,
        }
    },
    onShareTimeline(res) {//分享到朋友圈
        return {
            title: this.share.title,
            // imageUrl: this.share.imageUrl,
        }
    },
}