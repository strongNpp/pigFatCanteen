<template>
	<view class="content">
		<image class="logo" src="https://cdn.ggac.com/media/work/image/2021/05/3d444952-b798-11eb-8733-0242c0a84002.jpg"></image>
		<view class="text-area">
			<text class="title">欢迎来到猪胖食堂，请用心选择晚餐哦~</text>
		</view>
		 <navigator url="/pages/list/list"><view class="fat-btn">开启美食之旅吧</view></navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.fat-btn{
		padding: 20rpx 25rpx;
		border: 1rpx solid #ffe300;
		border-radius: 50rpx;
		color: #ffe300;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		
		width: 400rpx;
		height: 300rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
		margin-bottom: 50rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
