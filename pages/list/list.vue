<template>
	<view class="fat-list-wrapper">
		<van-tabs :active="active" @change="onChange" sticky>
			<van-tab title="面食">
				<view class="list-all" v-for="(item,i) in wheatenList" :key="i">
					<view class="list-all-item" >
						<van-image use-loading-slot width="100" height="100" radius="4" lazy-load :src="item.url">
							<text  slot="loading">图片加载中</text>
						</van-image>
						<view>
							<view class="list-all-item-name">{{item.name}}</view>
							<van-button size="small" :round="true" @click="goToDetial(item)">查看详情</van-button>
						</view>
					</view>
					<!-- <van-card custom-class="list-all-item" :title="item.name" :thumb="item.url">
						<van-image slot="thumb" round :src="item.url" />
						<view slot="footer">
							<van-button size="small" :round="true">查看详情</van-button>
						</view>
					</van-card> -->
				</view>
			</van-tab>
			<van-tab title="炒菜">内容 2</van-tab>
			<van-tab title="速食">内容 3</van-tab>
			<van-tab title="外卖">内容 4</van-tab>
		</van-tabs>
	</view>
</template>

<script>
	import vantab from '@/wxcomponents/vant/tab/index';
	import vantabs from '@/wxcomponents/vant/tabs/index';
	import image from '@/wxcomponents/vant/image/index';
	export default {
		components: {

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
						id:1,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg'
					},
					{
						name: '豆角焖面',
						id:2,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg',
					},
					{
						name: '鸡蛋酱打卤面',
						id:3,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg',
					},
					{
						name: '黄瓜里脊肉打卤面',
						id:4,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg'
					},
					{
						name: '土豆丝打卤面',
						id:5,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg'
					},
					{
						name: '土豆茄子打卤面',
						id:6,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg'
					}
				]
			};
		},
		created() {},
		computed: {},
		watch: {},
		methods: {
			goToDetial(item){
				console.log('222')
				uni.navigateTo({
				    url: `/pages/detail/detail?id=${item.id}`
				});
			}
		},
		mounted() {

		},
	}
</script>
<style lang="scss" scoped>
	@import "@/wxcomponents/vant/common/index.wxss";
	.fat-list-wrapper {
		.list-all {
			padding: 20rpx;
			margin-top: 10rpx;
			&-item {
				background: #FFFFFF;
				box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
				border-radius: 4px;
				padding: 25rpx 20rpx;
				display: flex;
				align-items:center;
				margin-bottom: 15rpx
				::v-deep .van-image {
					margin-right: 50rpx;
				}
				&-name{
					margin-bottom: 30rpx;
				}
			}
		}
	}
</style>
