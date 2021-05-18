<template>
	<view class="fat-list-wrapper">
		<van-tabs :active="active" @change="onChange" sticky>
			<van-tab title="面食">
				<view class="list-all" v-for="(item,i) in wheatenList" :key="i">
					<van-card :title="item.name" :thumb="item.url">
						<van-image slot="thumb" round :src="item.url" />
						<view slot="footer">
							<van-button size="small" :round="true">查看详情</van-button>
						</view>
					</van-card>
				</view>
			</van-tab>
			<van-tab title="炒菜">内容 2</van-tab>
			<van-tab title="速食">内容 3</van-tab>
			<van-tab title="外卖">内容 4</van-tab>
		</van-tabs>
	</view>
</template>

<script>
	import vancard from '@/wxcomponents/vant/card/index';
	import vantab from '@/wxcomponents/vant/tab/index';
	import vantabs from '@/wxcomponents/vant/tabs/index';
	import image from '@/wxcomponents/vant/image/index';
	export default {
		components: {
			"van-card": vancard,
			"van-tab": vantab,
			"van-tabs": vantabs,
			"van-image": image
		},
		data() {
			return {
				active: 0,
				imageURL: 'https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg',
				wheatenList: [{
						name: '西红柿鸡蛋面',
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg'
					},
					{
						name: '豆角焖面',
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg',
					},
					{
						name: '鸡蛋酱打卤面',
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg',
					},
					{
						name: '黄瓜里脊肉打卤面',
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg'
					},
					{
						name: '土豆丝打卤面',
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg'
					},
					{
						name: '土豆茄子打卤面',
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg'
					}
				]
			};
		},
		created() {},
		computed: {},
		watch: {},
		methods: {},
		mounted() {

		},
	}
</script>
<style lang="scss" scoped>
	@import "@/wxcomponents/vant/common/index.wxss";

	.fat-list-wrapper {
		.list-all {
			::v-deep .van-card {
				margin-bottom: 20rpx;
			}
		}
	}
</style>
