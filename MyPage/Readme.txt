��˾��ҳ����õ���kkpager
https://github.com/pgkk/kkpager
ȱ�㣺���ǰ�Dom�ڵ�ĳ�ʼ����ʽ����ҳ��ֻ��ʹ��һ����ҳ���������һ��ҳ���ж����ҳ����Ͳ����ˣ�ǰ�˸������Ľ�������Ǹ��ƶ�ݣ�������100����ҳ�أ��ѵ�����100�ݣ�

����ǰ�˻���ԭ�е���ʽ��д��һ��HTML��ҳDom�����ڴ˻������޸�
ǰ�˸�������Html�������£�
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>��ҳ</title>
		<link rel="stylesheet" href="pager.css" />
	</head>
	<body>
		<div class="pageBox">
			<span>
				<!--<a href="javascript:void(0);" title="��ҳ">��ҳ</a>
				<a href="javascript:void(0);" title="��һҳ">��һҳ</a>
				<a href="javascript:void(0);" title="��һҳ">1</a>-->
				<span title="��ҳ" class="disabled">��ҳ</span>
				<span title="��һҳ" class="disabled">��һҳ</span>
				<span title="��һҳ" class="curr">1</span>
				<a href="javascript:void(0);" title="�ڶ�ҳ">2</a>
				<a href="javascript:void(0);" title="����ҳ">3</a>
				<a href="javascript:void(0);" title="����ҳ">4</a>
				<a href="javascript:void(0);" title="����ҳ">5</a>
				<a href="javascript:void(0);" title="����ҳ">6</a>
				<span>...</span>
				<a href="javascript:void(0);" title="��һҳ">��һҳ</a>
				<a href="javascript:void(0);" title="βҳ">βҳ</a>
			</span>
			<span>
				��ǰ�� <span class="colorRed">1</span> ҳ/��<span>6</span>ҳ
				ת����<input type="text" value="" class="gopage"/>ҳ
			</span>
		</div>
	</body>
</html>


JQuery��չ�������˵����
1�����ʹ����Ajax��ˢ�����ݼ��غͷ�ҳ�����
2���Զ������м�ҳ��

ʹ��˵����
1��Head�������Css��JS
<link rel="stylesheet" href="pager.css" />
<script type="text/javascript" src="jquery-1.11.1.min.js" ></script>

2���м�Body����
<div class="pageBox">
	<span class="pageSpan"></span>
</div>

3��body�����󣬼���JS
<script type="text/javascript" src="pager.js" ></script>

4����ʼ����ҳ
<script>
$(function() {
	//��ҳ
	$(".pageSpan").createPage({
		pageIndex:8,
		totalPage:22,
		backFn:function(pageIndex){
			console.log(pageIndex);
		}
	});
});
</script>

��ӭ��שָ�����Ż������ȣ�
��ϵ�ˣ�Nick 953374957