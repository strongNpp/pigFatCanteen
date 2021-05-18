<template>
	<view class="content">
		<image class="logo" src="@/static/img/bmh.png"></image>
		<view class="text-area">
			<text class="title">欢迎来到猪胖食堂，请用心选择晚餐哦~</text>
		</view>
		<navigator url="/pages/list/list">
			<van-button custom-class="fat-btn" :round="true">开始美食之旅吧</van-button>
		</navigator>
	</view>
</template>
<script>
	export default {
		components: {

		},
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.fat-btn {
		border: 1rpx solid #ffe300;
		color: #ffe300;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {

		width: 200rpx;
		height: 200rpx;
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
