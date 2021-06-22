<template>
	<view class="fat-detail">
		<view class="fat-detail-img" :style="{backgroundImage:`url(${infoObj.url})`}"></view>
		<view class="fat-detail-name">
			{{infoObj.name}}
		</view>
		<view class="fat-detail-card">
			<view class="card-title">
				用料
			</view>
			<view class="card-item">
				<view v-for="(item,i) in infoObj.stuff" :key="i" class="card-item-strip">
					<text>{{item.name}}</text>
					<text>{{item.num}}</text>
				</view>
			</view>
			<view class="card-title">
				完美搭配
			</view>
			<view class="card-item">
				{{infoObj.collocat}}
			</view>
			<view class="card-title">
				可搭配饮品
			</view>
			<view class="card-item">
				meco，可口可乐（yyds），水
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				stirflyList: [{

				}],
				wheatenList: [{
						id: 1,
						name: '西红柿鸡蛋面',
						stuff: [{
								name: "西红柿",
								num: '3个'
							},
							{
								name: "鸡蛋",
								num: '2个'
							},
							{
								name: "鲜面条",
								num: '2🐖份'
							},
							{
								name: "香菜",
								num: '一点点'
							},
							{
								name: "小葱",
								num: '一点点'
							},
						],
						collocat: '绝味鸭脖（鱼豆腐，食管），是标配哦',
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3121c5a6-b93b-11eb-aade-0242c0a82002.jpg'
					},

					{
						name: '豆角焖面',
						id: 2,
						stuff: [{
								name: "芸豆",
								num: '300克'
							},
							{
								name: "猪里脊（可不放）",
								num: '一点点'
							},
							{
								name: "土豆",
								num: '1个'
							},
							{
								name: "鲜面条",
								num: '2🐖份'
							},
							{
								name: "西红柿",
								num: '2个'
							},
							{
								name: "蒜，姜",
								num: '一点点'
							},
							{
								name: "小葱",
								num: '一点点'
							},
						],
						collocat: '凉拌菜么，嘻嘻',
						url: 'https://cdn.ggac.com/media/work/image/2021/05/31200b08-b93b-11eb-94b5-0242c0a88002.jpg',
					},
					{
						name: '鸡蛋酱打卤面',
						stuff: [{
								name: "鸡蛋",
								num: '四个'
							},
							{
								name: "黄豆酱",
								num: '两勺'
							},
							{
								name: "辣椒（切丁）",
								num: '4-5个'
							},
							{
								name: "蒜",
								num: '一点点'
							},
							{
								name: "鲜面条",
								num: '2🐖份'
							},
							{
								name: "小葱",
								num: '一点点'
							},
						],
						collocat: '绝味鸭脖（鱼豆腐，食管），是标配哦',
						id: 3,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/453968f0-b93b-11eb-b5ad-0242ac110002.jpg',
					},
					{
						name: '黄瓜里脊肉打卤面',
						stuff: [{
								name: "猪里脊（切丁）",
								num: '多一点哦'
							},
							{
								name: "黄瓜（切丁）",
								num: '2根'
							},
							{
								name: "黄豆酱，郫县豆瓣酱",
								num: '两勺'
							},
							{
								name: "鲜面条",
								num: '2🐖份'
							},

							{
								name: "蒜",
								num: '一点点'
							},
							{
								name: "小葱",
								num: '一点点'
							},
						],
						collocat: '绝味鸭脖（鱼豆腐，食管），是标配哦',
						id: 4,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/453968f0-b93b-11eb-b5ad-0242ac110002.jpg'
					},
					{
						name: '土豆丝打卤面',
						stuff: [{
								name: "土豆（切丝）",
								num: '3个'
							},
							{
								name: "鲜面条",
								num: '2🐖份'
							},
							{
								name: "蒜",
								num: '一点点'
							},
							{
								name: "小葱",
								num: '一点点'
							},
						],
						collocat: '绝味鸭脖（鱼豆腐，食管），是标配哦',
						id: 5,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/311bcf20-b93b-11eb-8130-0242c0a82002.jpg'
					},
					{
						name: '牛肉面',
						stuff: [{
								name: "舅妈秘制卤牛肉",
								num: '一小块哦'
							},
							{
								name: "面条",
								num: '2🐖份'
							},
							{
								name: "葱，姜，料酒，浓汤宝，辣椒粉",
								num: '一点点'
							},
							{
								name: "鸡蛋",
								num: '2个'
							},
						],
						collocat: '可百搭哦',
						id: 6,
						url: 'https://cdn.ggac.com/media/work/image/2021/05/3391b35a-b93b-11eb-9cb4-0242c0a88002.jpg'
					}
				],
				infoObj: {},
				cid: '',
				cFlag: ''
			};
		},
		onLoad({
			id,
			flag
		}) { //option为object类型，会序列化上个页面传递的参数
			this.cid = id
			this.cFlag = flag
		},
		onShow() {
			this.infoObj = this[`${this.cFlag}List`].find((n) => n.id == this.cid)
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
		&-img {
			width: 100%;
			height: 200px;
			background-size: cover;
			background-position: center center;
			border-radius: 4px 4px 0 0;
		}

		&-name {
			font-weight: bold;
			padding: 25rpx;

		}

		&-card {
			padding: 30rpx;

			.card-title {
				font-weight: bold;
				margin-bottom: 25rpx;
			}

			.card-item {
				margin-bottom: 40rpx;
				font-size: 35rpx;

				&-strip {
					padding-right: 150rpx;
					height: 90rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-bottom: 0.5rpx solid #eee;

					text {
						&:first-child {
							margin-right: 40rpx;
						}
					}

					&:first-child {
						border-top: 0.5rpx solid #eee;
					}
				}

				text {
					color: #777;
					flex-shrink: 0;
				}
			}
		}
	}
</style>
