<template>
	<view class="fat-list-wrapper">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true">
			<swiper-item>
				<view class="swiper-item">猪胖最爱酸菜鱼</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">猪胖最爱东北烧烤</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">猪胖最爱潮堂</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">猪胖最爱杨记</view>
			</swiper-item>
		</swiper>
		<van-tabs :active="active" sticky>
			<van-tab title="面食">
				<view class="list-all">
					<view class="list-all-item" @click="goToDetial(item,'wheaten')" v-for="(item,i) in wheatenList" :key="i">
						<view class="list-all-item-cover" :style="{backgroundImage:`url(${item.url})`}"></view>
						<view class="list-all-item-cnt">
							<view class="list-all-item-name">{{item.name}}</view>
						</view>
					</view>
				</view>
			</van-tab>
			<van-tab title="炒菜">
				<view class="list-all-item" @click="goToDetial(item,'stirfly')" v-for="(item,i) in stirflyList" :key="i">
					<image :src="item.url" mode=""></image>
					<view class="list-all-item-cnt">
						<view class="list-all-item-name">{{item.name}}</view>
					</view>
				</view>
			</van-tab>
			<van-tab title="吃顿好的">内容 3</van-tab>
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
				stirflyList:[
					{
						name: '辣椒炒蛋',
						id: 1,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/e940f464-b944-11eb-af0b-0242c0a88002.jpg'
					},
					{
						name: '蒜苔腊肉',
						id: 2,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/e940f464-b944-11eb-af0b-0242c0a88002.jpg'
					},
				],
				wheatenList: [
					{
						name: '西红柿鸡蛋面',
						id: 1,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3121c5a6-b93b-11eb-aade-0242c0a82002.jpg'
					},
					{
						name: '豆角焖面',
						id: 2,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/31200b08-b93b-11eb-94b5-0242c0a88002.jpg',
					},
					{
						name: '鸡蛋酱打卤面',
						id: 3,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/453968f0-b93b-11eb-b5ad-0242ac110002.jpg',
					},
					{
						name: '黄瓜里脊肉打卤面',
						id: 4,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/453968f0-b93b-11eb-b5ad-0242ac110002.jpg'
					},
					{
						name: '土豆丝打卤面',
						id: 5,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/311bcf20-b93b-11eb-8130-0242c0a82002.jpg'
					},
					{
						name: '牛肉面',
						id: 6,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3391b35a-b93b-11eb-9cb4-0242c0a88002.jpg'
					}
				]
			};
		},
		created() {},
		computed: {},
		watch: {},
		methods: {
			goToDetial(item,flag) {
				console.log('222')
				uni.navigateTo({
					url: `/pages/detail/detail?id=${item.id}&flag=${flag}`
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
		.swiper-item {
			height: 100%;
			width: 100%;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			background: rgba($color: #ffe300, $alpha: 0.6);

		}

		.list-all {
			padding: 30rpx;
			margin-top: 10rpx;

			&-item {
				background-color: #f8f8f8;
				box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
				border-radius: 4px;
				flex: 1;
				margin-bottom: 25rpx;

				&-cnt {
					padding: 15rpx;

				}

				&-cover {
					width: 100%;
					height: 200px;
					background-size: cover;
					background-position: center center;
					border-radius: 4px 4px 0 0;
				}
				&-name {}
			}
		}
	}
</style>
