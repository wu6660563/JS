/*
	author: Tony.L.You
	date:2011-4-11
*/
var pageInitJson={
		items_per_page:10,
		num_display_entries:11,
		defuault_page:5,//默认显示多少页
		length_page:7,	//分页条一共多少格
		start_page:1,   //默认的开始页
		current_page:1,
		num_edge_entries:0,
		link_to:"#",
		prev_text:"<",
		next_text:">",
		ellipse_text:"...",
		prev_show_always:true,
		next_show_always:true,
		renderer:"defaultRenderer",
		is_location:false,
		callback:function(){return false;} 
 };
 
function createPage(json,totalNum) {
	
	var totalPage=Math.ceil(totalNum/json.items_per_page); 
	$("#page_f").append("<a id='start' href=javascript:void(0)>"+json.prev_text+"</a>");
	
	if(json.current_page==1)
	{
		for( var i=1;i<=json.defuault_page;i++)
		{
			 
			addLink(i)
		}
		addEnd(totalPage);
	}
	else
	{
		if(json.current_page<json.defuault_page)
		{
			for( var i=1;i<=json.defuault_page;i++)
			{ 
				addLink(i)
			}
			addEnd(totalPage);
		}
		else if(json.current_page>=json.defuault_page&&json.current_page<totalPage-4)
		{
			    addStart()
				for( var i=json.current_page-1;i<=json.current_page+1;i++)
				{ 
					addLink(i);
				}
				addEnd(totalPage)
		}
		else 
		{
			addStart();
			for( var i=totalPage-5;i<=totalPage;i++)
			{ 
			     
				addLink(i);
				 
			} 
		} 
	}
	if(!json.is_location)
	{
		$("#page_f").append("<a id='end' href=javascript:void(0)>"+json.next_text+"</a>");
		$("#page_f").append("<div class=custom>到第<input id='numPage'/>页 <button id='ok'>确定</button>");
		locationInit(json,totalNum,totalPage);
	}
	 
	buttonIsUse(totalPage);
	pageInit(json,totalNum);
};
 
function buttonIsUse(totalPage)
{
	 if(pageInitJson.current_page==1)
	{
		 $("#start").attr({"disabled":"disabled"});
	}
	else if(pageInitJson.current_page==totalPage)
	{
		 
		$("#end").attr({"disabled":"disabled"});
	}
}
 
function addStart()
{
	$("#page_f").append(" <a name=linkpage href=javascript:void(0)>"+pageInitJson.start_page+"</a>") ;
	$("#page_f").append(" <a href=javascript:void(0)>...</a>") ; 
}
function addEnd(totalPage)
{
	$("#page_f").append(" <a  href=javascript:void(0)>...</a>") ;
	$("#page_f").append(" <a name=linkpage href=javascript:void(0)>"+totalPage+"</a>") ;
}
 
function addLink(index)
{
	if(pageInitJson.current_page==index)
	{
		$("#page_f").append(" <a name=linkpage disabled=true class='current' href=javascript:void(0)>"+index+"</a>") ;
	}
	else
	{
		$("#page_f").append(" <a name=linkpage  href=javascript:void(0)>"+index+"</a>") ;
	}
}
function pageInit(json,totalNum)
{ 
	$("#end").click(function(){
	
		 clearHTML();
		 json.current_page=json.current_page+1; 
		 createPage(json,totalNum) ;
	 
	});
	$("#start").click( function(){
	
		 clearHTML()
		 json.current_page=json.current_page-1; 
		 createPage(json,totalNum) ;
	 
	});
	$("a[name='linkpage']").click(function(){
	
		
		var v=$(this).html();
		clearHTML();
	    json.current_page=parseInt(v); 
		createPage(json,totalNum) ;
	});
	
}
function locationInit(json,totalNum,totalPage)
{
	$("#ok").click(function(){
		var v=$("#numPage").val();
		 
		if(!isNaN(v))
		{
			if(v>totalPage||v<1)
			{
				alert(' 超出范围');
			}
			else
			{
				 clearHTML();
				 json.current_page=parseInt(v); 
				 createPage(json,totalNum) ;
			}
		} 
		else
		{
			alert('xx');
		}
	});
}
function clearHTML()
{
	$("#page_f").html("");
}
