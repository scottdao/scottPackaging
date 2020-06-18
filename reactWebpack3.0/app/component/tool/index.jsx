import http from './http'
function Tool(){
	http.constructor.call(this,http.request,http.URL);
		this.sortBase  = function(arr,j,temp){
			//console.log(arguments)
			temp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = temp;
			return temp;
		}
	return this;
}
Tool.prototype.post = function(url,data,callBack,failer){
	if(typeof arguments[1] ==='object'){
		data = arguments[1];
	}else if(typeof arguments[1] === 'function'){
		data = {};
		callBack = arguments[1];
	}
	http.post.call(this,url,data,callBack,failer);
};

Tool.prototype.get = function(url,data,callBack,failer){
	if(typeof arguments[1] ==='object'){
		data = arguments[1];
	}else if(typeof arguments[1] === 'function'){
		data = {};
		callBack = arguments[1];
	}
	//this.getData(data,'getData')
	http.get.call(this,url,data,callBack,failer);
};
/**
*
*时间戳转换成日期
*time==timestamp
*y==0 ,年 月 日 时 分(默认值)
*y==1 ,月 日 时 分 秒
*y==2 ,年 月 日 时 分 秒 
*/
Tool.prototype.timeDate = function(time,y){//y==0 年；y==1 秒；y==2,年和秒
		y = y || 0;
		var timer = new Date(time*1000);
		var year = timer.getFullYear();
		var month = timer.getMonth()+1;
		var nowDate = timer.getDate();
		var hours = timer.getHours();
		var min = timer.getMinutes();
		var second = timer.getSeconds();
		switch(y){
			case 0:
				return year+'-'+month+'-'+nowDate+'&nbsp;'+hours+':'+min
			break;
			case 1:
				return month+'-'+nowDate+'&nbsp;'+hours+':'+min+':'+second;
			break;
			case 2:
				return year+'-'+month+'-'+nowDate+'&nbsp;'+hours+':'+min+":"+second
			break;
		}
}
/*
*冒泡排序
*n==0,从大到小排；
*n==1,从小到大排；
*/
Tool.prototype.bubbleSort = function(arr,n){
	for(var i = 0,len = arr.length-1;i<len;i++){
			for(var j = 0;j<arr.length-1 - i;j++){
				var temp;
				switch(n){
					case 0:
					if(arr[j]<arr[j+1])this.sortBase(arr,j,temp);
					break;
					case 1:
						if(arr[j]>arr[j+1])this.sortBase(arr,j,temp);
					break;
				}
				
			}
	}
	return arr;
};
var tool = new Tool();
/*var j = tool.bubbleSort([1,5,42.1,23,57],1)
console.log(j)*/
/*tool.get('tonglan-updates',{ckuid:'ab1f1bec84a53a38655843cc0358f661',terminalId:'11'},function(res){
	console.log(res)
});*/
//console.log(tool)
/*tool.post('good/goods-list',function(req){
	console.log(req);
})*/
export default tool;
