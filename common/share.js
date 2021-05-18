export default {
    data() {
       return {
            share:{
               title: '猪胖食堂',
               imageUrl:'https://cdn.ggac.com/media/work/image/2021/05/586862f0-b78d-11eb-971a-0242ac110002.jpg',
            }
       }
    },
    onShareAppMessage(res) { //发送给朋友
        return {
            title: this.share.title,
            imageUrl: this.share.imageUrl,
        }
    },
    onShareTimeline(res) {//分享到朋友圈
        return {
            title: this.share.title,
            imageUrl: this.share.imageUrl,
        }
    },
}