/**
 * @Description 分页插件，使用该插件，必须放在底部，等Dom节点渲染完毕才能使用
 * @Author Nick
 * @Date 2016/07/30
 * @Version 1.0
 */
(function($) {
	var pager = {
		init : function(obj, page) {
			return (function() {
				pager.fillHtml(obj, page);
				pager.bindEvent(obj, page);
			})();
		},

		//填充Html
		fillHtml : function(pageSpan, page) {
			return (function() {
				pageSpan.empty();
				//首页 上一页
				if(page.pageIndex > 1) {
					pageSpan.append('<a href="javascript:;" title="首页" class="firstPage">首页</a>');
					pageSpan.append('<a href="javascript:;" title="上一页" class="prevPage">上一页</a>');
				} else {
					pageSpan.append('<span title="首页" class="disabled">首页</span>');
					pageSpan.append('<span title="上一页"  class="disabled">上一页</span>');
				}

				//中间页码
				if(page.totalPage <= 3) {
					for(var i = 1; i <= page.totalPage; i++) {
						if(page.pageIndex == i) {
							pageSpan.append('<span title="第'+i+'页"  class="curr">'+i+'</span>');
						} else {
							pageSpan.append('<a href="javascript:;" class="tcdNumber" title="第'+i+'页">'+i+'</a>');
						}
					}
				} else if(page.totalPage > 3) {
					if(page.pageIndex - 2 <= 1 && page.pageIndex +2 <= page.totalPage) {
						for(var i = 1; i <= (page.pageIndex +2); i++) {
							if(page.pageIndex == i) {
								pageSpan.append('<span title="第'+i+'页"  class="curr">'+i+'</span>');
							} else {
								pageSpan.append('<a href="javascript:;" class="tcdNumber" title="第'+i+'页">'+i+'</a>');
							}
						}
						pageSpan.append('<span>...</span>');
					} else if(page.pageIndex - 2 > 1 && page.pageIndex +2 >= page.totalPage) {
						pageSpan.append('<span>...</span>');
						for(var i = (page.pageIndex - 2); i <= page.totalPage; i++) {
							if(page.pageIndex == i) {
								pageSpan.append('<span title="第'+i+'页"  class="curr">'+i+'</span>');
							} else {
								pageSpan.append('<a href="javascript:;" class="tcdNumber" title="第'+i+'页">'+i+'</a>');
							}
						}
					} else if(page.pageIndex - 2 <= 1 && page.pageIndex +2 >= page.totalPage) {
						for(var i = 1; i <= page.totalPage; i++) {
							if(page.pageIndex == i) {
								pageSpan.append('<span title="第'+i+'页"  class="curr">'+i+'</span>');
							} else {
								pageSpan.append('<a href="javascript:;" class="tcdNumber" title="第'+i+'页">'+i+'</a>');
							}
						}
					} else if(page.pageIndex - 2 > 1 && page.pageIndex +2 <= page.totalPage) {
						pageSpan.append('<span>...</span>');
						for(var i = (page.pageIndex - 2); i <= (page.pageIndex + 2); i++) {
							if(page.pageIndex == i) {
								pageSpan.append('<span title="第'+i+'页"  class="curr">'+i+'</span>');
							} else {
								pageSpan.append('<a href="javascript:;" class="tcdNumber" title="第'+i+'页">'+i+'</a>');
							}
						}
						pageSpan.append('<span>...</span>');
					}
				}


				//下一页、尾页
				if(page.pageIndex != page.totalPage) {
					pageSpan.append('<a href="javascript:;" title="下一页" class="nextPage">下一页</a>');
					pageSpan.append('<a href="javascript:;" title="尾页" class="endPage">尾页</a>');
				} else {
					pageSpan.append('<span title="上一页"  class="disabled">下一页</span>');
					pageSpan.append('<span title="尾页"  class="disabled">尾页</span>');
				}
				pageSpan.append('<span>当前第 <span class="colorRed">'+page.pageIndex+'</span> 页/共<span>'+page.totalPage+'</span>页');
			})();
		},

		//绑定事件
		bindEvent : function(obj, page) {
			//第几页
			return (function() {
				//数字点击事件
				obj.off('click', 'a.tcdNumber');
				obj.off('click', 'a.prevPage');
				obj.off('click', 'a.nextPage');
				obj.off('click', 'a.firstPage');
				obj.off('click', 'a.endPage');
				obj.on('click', 'a.tcdNumber', function() {
					var pageIndex = parseInt($(this).text());
					pager.fillHtml(obj, {"pageIndex":pageIndex, "totalPage":page.totalPage});
					if(typeof(page.backFn == "function")) {
						page.backFn(pageIndex);
					}
				});
				//前一页点击事件
				obj.on('click', 'a.prevPage', function() {
					var pageIndex = parseInt(obj.children('span.curr').text());
					pager.fillHtml(obj, {"pageIndex":pageIndex-1, "totalPage":page.totalPage});
					if(typeof(page.backFn == "function")) {
						page.backFn(pageIndex-1);
					}
				});
				//下一页点击事件
				obj.on('click', 'a.nextPage', function() {
					var pageIndex = parseInt(obj.children('span.curr').text());
					pager.fillHtml(obj, {"pageIndex":pageIndex+1, "totalPage":page.totalPage});
					if(typeof(page.backFn == "function")) {
						page.backFn(pageIndex+1);
					}
				});
				//首页
				obj.on('click', 'a.firstPage', function() {
					pager.fillHtml(obj, {"pageIndex":1, "totalPage":page.totalPage});
					if(typeof(page.backFn == "function")) {
						page.backFn(1);
					}
				});
				//尾页
				obj.on('click', 'a.endPage', function() {
					pager.fillHtml(obj, {"pageIndex":page.totalPage, "totalPage":page.totalPage});
					if(typeof(page.backFn == "function")) {
						page.backFn(page.totalPage);
					}
				});
			})();
		}
	}

	//扩展JQuery
	$.fn.createPage = function(options) {
		var page = $.extend({
			pageIndex : 1,
			totalPage : 10,
			backFn : function(p) {
			}
		}, options);
		pager.init(this, page);
	}
})(jQuery);