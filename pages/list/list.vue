<template>
	<view class="fat-list-wrapper">
		<van-tabs :active="active" @change="onChange">
		  <van-tab title="面条">
			  <view class="list-all">
				  <van-card
				    desc="美味面条"
				    title="西红柿鸡蛋面"
				    :thumb="imageURL"
				  />
			  </view>
		  </van-tab>
		  <van-tab title="炒菜">内容 2</van-tab>
		  <van-tab title="火锅">内容 3</van-tab>
		  <van-tab title="烤肉">内容 4</van-tab>
		</van-tabs>
		
	</view>
</template>

<script>
	import vancard from '@/wxcomponents/vant/card/index';
	import vantab from '@/wxcomponents/vant/tab/index';
	import vantabs from '@/wxcomponents/vant/tabs/index';
	export default {
		components: {
		 "van-card":vancard,
		 "van-tab":vantab,
		 "van-tabs":vantabs
		},
		data() {
			return {
				active:0,
				imageURL:'https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg'
			};
		}
	}
</script>
<style lang="scss" scoped>
	@import "@/wxcomponents/vant/common/index.wxss";
	.fat-list-wrapper{
	}
</style>
