// 区分开发环境和生产环境  接口地址
let baseUrl;

if (process.env.NODE_ENV === 'development') {
    baseUrl = 'xxxxxxxxxxx'    // 开发环境
} else {
	baseUrl = 'xxxxxxxxxxx'    // 生产环境
}

export function https(config) {
	//显示loading
	wx.showLoading({
		title: '加载中...'
	});	
	//设置请求头
	config.header = {
		'content-type': 'application/json',
	};
	//检查缓存中有没有token
	var token = wx.getStorageSync('token');
	if (token != '') {
		header.Authorization = token
	}	
	config.url = baseUrl + config.url;   // 请求地址
	let promise = new Promise(function(resolve, reject) {
		uni.request(config).then(res => {
			wx.hideLoading()      //隐藏loading
			if (res[0]) {
				uni.showToast({
					title: "数据获取失败",
					icon: "none",
					duration: 1500
				})
				resolve(false);
			} else {
				let data = res[1].data; 
				if (data.code == 1) {
					resolve(data);
				} else {
					resolve(data);
				}
			}
		}).catch(error => {
			wx.hideLoading()      //隐藏loading
			reject(error);
		})
	})
	return promise
}