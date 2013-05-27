(function($){
  $.fn.mobilePaging = function(opts) {
		var _self = this;
		var settings = $.extend({
			count		: 10,
			listvalues	: ""	
		}, opts);
		$.fn.mobilePaging.funct(_self, settings.count, settings.listvalues);
		$("#showmore").on("click", function(){
			$.fn.mobilePaging.funct(_self, settings.count, settings.listvalues);
		});
		$("#showless").on("click", function(){
			$.fn.mobilePaging.showless(_self, settings.count, settings.listvalues);
		});		
	}
	$.fn.mobilePaging.funct = function(_self, count,listvalues) {		
		var hml = '', len = 0;
		startval = $("#showmore").attr("startval");
		startval = ((startval == undefined) ? 0 : parseInt(startval));	
		if(startval == listvalues.length){ alert("End"); return;}
		len = startval+count;
		if(len>listvalues.length){len = listvalues.length}
		for(var i=startval;i<len;i++){
			hml += "<li>"+listvalues[i]+"</li>";
		}
		_self.html(hml);
		_self.listview("refresh");
		if(startval == 0){
			_self.after("<input type='button' startval='"+ i +"' id='showmore' value='show more...'/>");
			_self.after("<input type='button' startval='"+ 0 +"' id='showless' value='show less...'/>");
		}
		else{			
			$("#showmore").attr("startval",i);
			$("#showless").attr("startval",i-(2*count));
		}
	}
	$.fn.mobilePaging.showless = function(_self, count,listvalues) {		
		var hml = '', len = 0;
		startval = $("#showless").attr("startval");
		startval = ((startval == undefined) ? 0 : parseInt(startval));	
		if(startval < 0){ alert("End"); return;}
		len = startval+count;
		if(len>listvalues.length){len = listvalues.length}
		for(var i=startval;i<len;i++){
			hml += "<li>"+listvalues[i]+"</li>";
		}
		_self.html(hml);
		_self.listview("refresh");
		$("#showmore").attr("startval",i);
		$("#showless").attr("startval",i-(2*count) < 0 ? 0 : i-(2*count));
	}	
}(jQuery));
