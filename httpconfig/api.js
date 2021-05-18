import {https}  from '@/httpconfig/request.js';    // 引入刚刚封装好的request
	
class api{
	async getList(data) {
		const res = await https({
			method: "get", // 请求方式
			url: '/getJoke', // 请求url
			data: data,// 参数
		})
		return res
	}
	// 下面可以接着写API接口集
	// 接口二
	// 接口三
	// ......
}

export default new api()
// 调用方法
// this.$dy_api.getList({page:"1",count:"2",type:"video"}).then((res)=>{
// 	console.log(res)
//   })
