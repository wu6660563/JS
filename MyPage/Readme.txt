公司分页插件用到了kkpager
https://github.com/pgkk/kkpager
缺点：不是绑定Dom节点的初始化方式，单页面只能使用一个分页插件，假如一个页面有多个分页需求就不行了，前端给出来的解决方案是复制多份，假如有100个分页呢？难道复制100份？

故让前端基于原有的样式重写了一个HTML分页Dom，我在此基础上修改
前端给过来的Html内容如下：
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>分页</title>
		<link rel="stylesheet" href="pager.css" />
	</head>
	<body>
		<div class="pageBox">
			<span>
				<!--<a href="javascript:void(0);" title="首页">首页</a>
				<a href="javascript:void(0);" title="上一页">上一页</a>
				<a href="javascript:void(0);" title="第一页">1</a>-->
				<span title="首页" class="disabled">首页</span>
				<span title="上一页" class="disabled">上一页</span>
				<span title="第一页" class="curr">1</span>
				<a href="javascript:void(0);" title="第二页">2</a>
				<a href="javascript:void(0);" title="第三页">3</a>
				<a href="javascript:void(0);" title="第四页">4</a>
				<a href="javascript:void(0);" title="第五页">5</a>
				<a href="javascript:void(0);" title="第六页">6</a>
				<span>...</span>
				<a href="javascript:void(0);" title="下一页">下一页</a>
				<a href="javascript:void(0);" title="尾页">尾页</a>
			</span>
			<span>
				当前第 <span class="colorRed">1</span> 页/共<span>6</span>页
				转到第<input type="text" value="" class="gopage"/>页
			</span>
		</div>
	</body>
</html>


JQuery拓展插件功能说明：
1、插件使用在Ajax无刷新数据加载和分页的情况
2、自动忽略中间页面

使用说明：
1、Head里面加载Css和JS
<link rel="stylesheet" href="pager.css" />
<script type="text/javascript" src="jquery-1.11.1.min.js" ></script>

2、中间Body加上
<div class="pageBox">
	<span class="pageSpan"></span>
</div>

3、body结束后，加载JS
<script type="text/javascript" src="pager.js" ></script>

4、初始化分页
<script>
$(function() {
	//分页
	$(".pageSpan").createPage({
		pageIndex:8,
		totalPage:22,
		backFn:function(pageIndex){
			console.log(pageIndex);
		}
	});
});
</script>

欢迎拍砖指正和优化升级等！
联系人：Nick 953374957