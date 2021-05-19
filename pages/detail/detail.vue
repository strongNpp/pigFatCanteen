<template>
	<view class="fat-detail">
		<view class="name">
			{{infoObj.name}}
		</view>
		<van-divider/>
		<view class="fat-detail-card">
			<view class="card-item">
					<image src="https://cdn.ggac.com/media/work/image/2021/05/4e921430-b7b8-11eb-ba1c-0242c0a88002.jpg" mode=""></image>
				<view>
					<text>使用食材：</text>{{infoObj.stuff}}
				</view>
			</view>
			<view class="card-item">
				<image src="https://cdn.ggac.com/media/work/image/2021/05/4e818854-b7b8-11eb-93ad-0242c0a84002.jpg" mode=""></image>
				<view>
					<text>完美搭配：</text> {{infoObj.collocat}}
				</view>
			</view>
			<view class="card-item">
				<image 	src="https://cdn.ggac.com/media/work/image/2021/05/5466f0d8-b7b8-11eb-955c-0242c0a82002.jpg" mode=""></image>
				<view>
					<text>可搭配饮品：</text> {{infoObj.drink}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>

	import vandivider from '@/wxcomponents/vant/divider/index';
	export default {
		components: {
		  "van-divider":vandivider
		},
		data() {
			return {
				infoList: [{
					id: 1,
					name: '西红柿鸡蛋面',
					stuff: '西红柿*3，鸡蛋*2，香菜一点点，葱一点点',
					collocat: '绝味鸭脖（鱼豆腐，食管），是标配哦',
					drink: 'meco,可口可乐，水'
				}],
				infoObj: {},
				cid: ''
			};
		},
		onLoad(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.id); //打印出上个页面传递的参数。
			this.cid = option.id

		},
		onShow() {
			this.infoObj = this.infoList.find((n) => n.id == this.cid)
			uni.setNavigationBarTitle({
				title: this.infoObj.name
			})
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
	.fat-detail {
		padding:30rpx ;
		.name {
		   font-weight: bold;
		}
		&-card {
			// box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
			// border-radius: 4px;
			padding: 30rpx;
			.card-item {
				display: flex;
				align-items: center;
				margin-bottom: 20rpx;
				font-size: 35rpx;

				image {
					width: 30px;
					height: 30px;
					margin-right: 20rpx;
					object-fit: cover;
					flex-shrink: 0;
				}

				text {
					color: #777;
					flex-shrink: 0;
					margin-left: 20rpx;
					
				}
			}
		}
	}
</style>
