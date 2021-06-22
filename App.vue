<script>
	export default {
		onLaunch: function() {
			const updateManager = uni.getUpdateManager();
			updateManager.onUpdateReady(function() {
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					showCancel: false,
					success: function(res) {
						if (res.confirm) {
							updateManager.applyUpdate()
						}
					}
				})
			});
			// wx.getSystemInfo({
			// 	success: res => {
			// 		let deviceModel = 'iPhone X';
			// 		if (res.model.indexOf(deviceModel) > -1) {
			// 			this.SET_IPX(true)
			// 		}
			// 	}
			// });
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import '/style/reset.scss';
	@import '/static/iconfonts/iconfont.css';
</style>
