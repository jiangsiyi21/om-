/*public*/

/*public*/
/*ea_h*/
/*xn_n_14_wrap*/
$(function(){
	$("#type1Li_n0").append("<span  class='en'>HOME</span>");
  $("#type1Li_n28").append("<span class='en'>COURTSHIP</span>");
  $("#type1Li_n3").append("<span class='en'>BOUTIQUE</span>");
  $("#type1Li_n4").append("<span class='en'>CUSTOM </span>");
  $("#type1Li_n25").append("<span class='en'>MARRIAGE</span>");
  $("#type1Li_n1").append("<span class='en'>ABOUT US</span>");
$("#type1Li_t300_3").append("<span class='en'>CUSTOMIZED</span>");
$("#type1Li_t300_2").append("<span class='en'>PACKAGE</span>");
})
/*end_xn_n_14_wrap*/
/*xn_h_12_wrap*/
/*----2015-06-18改 给会员名加链接---*/
$ && $(function () {
try {
    if ($("#xn_h_12_wrap").length>0) {
        EIMS_C_40000.Init();
        $("#EIMS_C_40000_loginedName").wrap("<a href='/member.aspx'></a>");
    };
} catch (err) { }
});
var EIMS_C_40000 = {
    Init: function () {
        $("#EIMS_C_40000_loginout").click(EIMS_C_40000.loginout);
        AjaxMethod("User", "IsLogin", null, function (data) {
            if (IsNullOrEmpty(data)) {
                return;
            }
            if (data.result != 1) {
                if (IsNullOrEmpty(data.msg.name)) {
                    $("#EIMS_C_40000_normallName").remove();
                    $("#EIMS_C_40000_normallName1").remove();
                } else {
                    $("#EIMS_C_40000_normallName").html(data.msg.name);
                }
                $("#EIMS_C_40000_Logined").remove();
                $("#EIMS_C_40000_Normall").show();
                return;
            }
            $("#EIMS_C_40000_loginedName").html(data.msg.name);
            $("#EIMS_C_40000_Normall").remove();
            $("#EIMS_C_40000_Logined").show();
        });
    },
    loginout: function () {
        AjaxMethod("User", "Logout", null, function (data) {
            if (data == "ok") {
                document.location.reload();
            }
        });
    }
}
/*end_xn_h_12_wrap*/
/*xn_mc_header_1_wrap*/
$(function(){
    $("#btn_qh,#city_list").hover(function(){
        $("#city_list").css("display","block");
    },function(){
        $("#city_list").css("display","none");
    });
    $(window).scroll(function(){
    var cdgr = $(document).scrollTop();
    if(cdgr > 1){
        $('.xn_mc_header_1_wrap').css("position","fixed");
        $('.xn_mc_header_1_wrap').css("top","0");
      	$('.xn_mc_header_1_wrap').css("background","rgba(0,0,0,1)");
    }else{
        $('.xn_mc_header_1_wrap').css("position","fixed");
        $('.xn_mc_header_1_wrap').css("top","0");
      	$('.xn_mc_header_1_wrap').css("background","rgba(0,0,0,0.37)");
    }
    })
});
/*end_xn_mc_header_1_wrap*/
/*xn_c_index_351_wrap*/
$(function () {
    try {
        if ($("#EIMS_C_40029_11_wrap").length > 0) {
            EIMS_C_40029_11.Init();
        }
    } catch (error) { }
    //追加
    var speed = 600;
    var pkeyList = $("#EIMS_C_40029_11_PropertyKeyList");
    var cscr = $(".EIMS_C_40029_11_screen");
  cscr.eq(1).css("display","none");
    var pkey_h = cscr.height();
    var tl_h = $(".EIMS_C_40029_11_property").outerHeight(true);
    cscr.hover(function(){
        var cn_h = $(this).find(".EIMS_C_40029_11_scrm").outerHeight(true);
        //$(this).css("height",(tl_h+cn_h));
    },function(){
        //$(this).css("height",pkey_h);
    });
});
var EIMS_C_40029_11 = {
    Config: {
        ShowPromotion: true,    //是否显示“活动”筛选条件
        ShowOrder: true,    //是否显示“排序”筛选条件
        AscClass: "EIMS_C_40029_11_asc",    //升序样式
        DescClass: "EIMS_C_40029_11_desc",    //降序样式
        SelectedClass: "EIMS_C_40029_11_selected"    //选中样式
    },
    Init: function () {
        if (EIMS_C_40029_11.Config.ShowPromotion == false) {
            $("#EIMS_C_40029_11_promotions").css("display", "none");
        }
        if (EIMS_C_40029_11.Config.ShowOrder == false) {
            $("#EIMS_C_40029_11_orders").css("display", "none");
        }
        EIMS_C_40029_11.InitFilters();
        EIMS_C_40029_11.InitOrders();
        EIMS_C_40029_11.BindEvents();
    }, //初始化
    InitFilters: function () {
        var p1 = QueryString("p1");
        var p2 = QueryString("p2");
        var quantity = QueryString("quantity");    //仅显示有货
        var promotion = QueryString("promotion");    //活动
        $("#EIMS_C_40029_11_beginPrice").val(QueryString("bprice"));
        $("#EIMS_C_40029_11_endPrice").val(QueryString("eprice"));
        //商品属性   
        if (!IsNullOrEmpty(p1)) {
            var ids = p1.split(',');
            for (var i = 0; i < ids.length; i++) {
                var obj = $("#EIMS_C_40029_11_PropertyKeyList").find("span[data-id=" + ids[i] + "]");
                obj.parentsUntil("#EIMS_C_40029_11_PropertyKeyList", ".EIMS_C_40029_11_screen").children("span[data-id=0]").removeClass().addClass("EIMS_C_40029_11_property");
                obj.removeClass().addClass("EIMS_C_40029_11_focused");
              
               $("#c_name").remove($(obj).text()).append($(obj).text());
             
            }
        }
        //销售属性
        if (!IsNullOrEmpty(p2)) {
            var ids = p2.split(',');
            for (var i = 0; i < ids.length; i++) {
                var obj = $("#EIMS_C_40029_11_SalePropertyList").find("span[data-id=" + ids[i] + "]");
                obj.parentsUntil("#EIMS_C_40029_11_SalePropertyList", ".EIMS_C_40029_11_screen").children("span[data-id=0]").removeClass().addClass("EIMS_C_40029_11_propertyValue");
                obj.removeClass().addClass("EIMS_C_40029_11_focused");
            }
        }
        if (IsNullOrEmpty(promotion)) {
            promotion = 0;
        }
        $(".EIMS_C_40029_11_promotion[data-promotion=" + promotion + "]").addClass(EIMS_C_40029_11.Config.SelectedClass);
        if (quantity == 1) {
            $("#EIMS_C_40029_11_HasGoods").html("查看全部");
            $("#EIMS_C_40029_11_HasGoods").addClass(EIMS_C_40029_11.Config.SelectedClass);
        }
    },
    InitOrders: function () {
        var order = QueryString("Order");
        switch (order) {
            case null:
                $(".EIMS_C_40029_11_order[data-order=default]").addClass(EIMS_C_40029_11.Config.SelectedClass);
                break;
            case "1":
                $(".EIMS_C_40029_11_order[data-order=price]").addClass(EIMS_C_40029_11.Config.DescClass);
                break;
            case "2":
                $(".EIMS_C_40029_11_order[data-order=price]").addClass(EIMS_C_40029_11.Config.AscClass);
                break;
            case "3":
                $(".EIMS_C_40029_11_order[data-order=sales]").addClass(EIMS_C_40029_11.Config.DescClass);
                break;
            case "4":
                $(".EIMS_C_40029_11_order[data-order=new]").addClass(EIMS_C_40029_11.Config.DescClass);
                break;
            default:
                break;
        }
    },
    BindEvents: function () {
        $(".EIMS_C_40029_11_order").bind("click", function () {
            var clickOrder = $(this).attr("data-order");
            switch (clickOrder) {
                case "default":
                    order = "";
                    break;
                case "price":
                    var order = QueryString("order");
                    if (order == 1) order = 2;
                    else order = 1;
                    break;
                case "sales":
                    order = 3;
                    break;
                case "new":
                    order = 4;
                    break;
                default:
                    break;
            }
            document.location.href = MergeUrlParas(null, false, ["order"], [order]);
        });
        $(".EIMS_C_40029_11_promotion").bind("click", function () {
            var promotion = $(this).attr("data-promotion");
            if (promotion == "0") promotion = "";
            document.location.href = MergeUrlParas(null, false, ["promotion"], [promotion]);
        });
    },
    OnlyHasGoods: function () {
        var quantity = QueryString("quantity");
        if (quantity == 1) quantity = "";
        else quantity = 1
        document.location.href = MergeUrlParas(null, false, ["quantity"], [quantity]);
    }, //仅显示有货
    PreperyClick: function (obj) {
        var p1 = QueryString("p1");
        var p2 = QueryString("p2");
        //商品属性
        var row = $(obj).parentsUntil("#EIMS_C_40029_11_PropertyKeyList", ".EIMS_C_40029_11_screen");
        row.find("span").removeClass().addClass("EIMS_C_40029_11_property");
        $(obj).removeClass().addClass("EIMS_C_40029_11_focused");
       $("#c_name").remove($(obj).text()).append($(obj).text());
      	
        var p1 = "";
        $("#EIMS_C_40029_11_PropertyKeyList").find(".EIMS_C_40029_11_focused").each(function () {
            if (parseInt($(this).attr("data-id")) > 0) {
                p1 += "," + parseInt($(this).attr("data-id"));
            }
        });
        p1 = p1.replace(/^,/, "");
      
        //销售属性
        var row = $(obj).parentsUntil("#EIMS_C_40029_11_SalePropertyList", ".EIMS_C_40029_11_screen");
        row.find("span").removeClass().addClass("EIMS_C_40029_11_property");
        $(obj).removeClass().addClass("EIMS_C_40029_11_focused");
        var p2 = "";
        $("#EIMS_C_40029_11_SalePropertyList").find(".EIMS_C_40029_11_focused").each(function () {
            if (parseInt($(this).attr("data-id")) > 0) {
                p2 += "," + parseInt($(this).attr("data-id"));
            }
        });
        p2 = p2.replace(/^,/, "");
        document.location.href = MergeUrlParas(null, false, ["p1", "p2"], [p1, p2]);
      
    }, //根据商品属性查询
    ToSearch: function () {
        var p1 = QueryString("p1");
        var p2 = QueryString("p2");
        var bprice = $("#EIMS_C_40029_11_beginPrice").val();
        var eprice = $("#EIMS_C_40029_11_endPrice").val();
        if (isNaN(bprice) || isNaN(eprice)) {
            alert("输入的价格有误！");
            return;
        }
        if (IsNullOrEmpty(bprice) && !IsNullOrEmpty(eprice)) {
            alert("请输入起始价格！");
            return;
        }
        if (parseInt(eprice) < parseInt(bprice)) {
            alert("后面的价格应大于前面的价格！");
            return;
        }
        document.location.href = MergeUrlParas(null, false, ["bprice", "eprice", "pageindex"], [bprice, eprice, null]);
    } //根据价格范围查询
}
/*end_xn_c_index_351_wrap*/
/*ea_h*/
/*ea_ba*/
/*xn_mc_ban_1_wrap*/
/*end_xn_mc_ban_1_wrap*/
/*ea_ba*/
/*ea_c*/
/*xn_ba_js_1_banner*/
var xn_ba_js_1_autoPlay = true;
var xn_ba_js_1_interval = 4000;
var bannerW = "100%";
var xn_ba_js_1_nextfunc;
var xn_ba_js_1_timer;
$(document).ready(function () {
    if ($("#xn_ba_js_1_banner").length>0) {
        xn_ba_js_1_start();
    };
});
var xn_ba_js_1_start = function () {
    var maxLen = 0;
    var index = 0;
    var prev = -1;
    var imgW, imgH, sizeW, sizeH = 0;
    var running = false;
    maxLen = $(".xn_ba_js_1_element").length;
    imgW = $(".xn_ba_js_1_bigImg").find("img").eq(0).width();
    imgH = $(".xn_ba_js_1_bigImg").find("img").eq(0).height();
    for (var i = 0; i < $(".xn_ba_js_1_element").length; i++) {
        var ele = $(".xn_ba_js_1_element").eq(i).find("img");
        ele.attr("src", ele.attr("data-original"));
    }
    var btnData = "";
    for (var i = 0; i < maxLen; i++) btnData += '<li class="xn_ba_js_1_element_btn">';
    $(".xn_ba_js_1_btn").html(btnData);
    var btn = $(".xn_ba_js_1_btn").find("li").eq(0);
    var btnW = btn.width() + Math.round(btn.css("margin-left").replace(/[a-zA-Z]/g, ""));
    $(".xn_ba_js_1_btn").css("width", maxLen * btnW);
    btn.attr("class", "xn_ba_js_1_element_btn_on");
    $(".xn_ba_js_1_banner").css("visibility", "visible");
    for (var i = 0; i < maxLen; i++) {
        $(".xn_ba_js_1_element").eq(i).attr("id", "ea_ba_no_b_" + i);
        var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
        if (i == index) _opa = 1;
        if (_pos > sizeW) {
            _pos -= maxLen * imgW
        } else if (_pos < -imgW) {
            _pos += maxLen * imgW
        }
        $(".xn_ba_js_1_element").eq(i).css({
            left:0,
            opacity: 0
        }).animate({
            opacity: _opa
        }, {
            duration: 400,
            easing: 'linear'
        })
    }
    onResize();
    $(window).resize(onResize);
    function onResize() {
        for (var i = 0; i < maxLen; i++) {
            if (bannerW == "100%") {
                sizeW = $(window).width();
            } else {
                sizeW = parseInt(bannerW);
            }
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            var _opa = 1;
            if (i == index) _opa = 1;
            if (_pos > sizeW) {
                _pos -= maxLen * imgW
            }
            $(".xn_ba_js_1_element").eq(i).stop().css({
                left: 0,
                opacity: _opa
            })
        }
    };
    $(".xn_ba_js_1_btn li").each(function (i) {
        $(this).click(function () {
            skipHandler((i));
        });
    });
    timerRepeat();
    function skipHandler(target) {
        if (target == index) return;
        var d = 1;
        var pure = index;
        if (target < pure) d = -1;
        var btn = $(".xn_ba_js_1_btn").find("li");
        btn.eq(pure).attr("class", "xn_ba_js_1_element_btn");
        btn.eq(target).attr("class", "xn_ba_js_1_element_btn_on");
        var len;
        if (d == 1) {
            len = target - pure;
            if (len <= 1) {
                index = target;
                nextPage();
            } else {
                for (var k = pure; k <= target; k++) {
                    index = k;
                    nextPage();
                }
            }
        } else {
            len = index - target;
            if (len <= 1) {
                index = target;
                prevPage();
            } else {
                for (var k = index; k >= target; k--) {
                    index = k;
                    prevPage();
                }
            }
        }
    }
    function timerRepeat() {
        if (!xn_ba_js_1_autoPlay) return;
        xn_ba_js_1_nextfunc = isPause;
        xn_ba_js_1_timer = setInterval(xn_ba_js_1_nextfunc, xn_ba_js_1_interval);
    }
    function isPause() {
        var isRun = true;
        if (typeof parent.runonce != 'undefined') {
            isRun = parent.runonce;
        }
        if (isRun) {
            var cur = index;
            cur++;
            if (cur > maxLen - 1) cur = 0;
            skipHandler(cur);
            return false;
        } else {
            return true;
        }
    }
    function nextPage() {
        if (xn_ba_js_1_timer) {
            clearInterval(xn_ba_js_1_timer);
            timerRepeat();
        }
        if ($(window.parent.bannerparam).length > 0) {
            window.parent.bannerparam.cur_ba_index = index;
        }
        _pict = $(".xn_ba_js_1_element");
        for (var i = 0; i < maxLen; i++) {
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            var _opa = 1;
            if (i == index) _opa = 1;
            if (_pos > sizeW) {
                _pos -= maxLen * imgW
            } else if (_pos < -imgW * 2) {
                _pos += maxLen * imgW
            }
            _pict.eq(i).stop().css({
                left: imgW
            }).animate({
                left: _pos,
                opacity: _opa
            }, {
                duration: 700,
                easing: 'easeOutQuint'
            })
        }
    }
    function prevPage() {
        if (xn_ba_js_1_timer) {
            clearInterval(xn_ba_js_1_timer);
            timerRepeat();
        }
        if ($(window.parent.bannerparam).length > 0) {
            window.parent.bannerparam.cur_ba_index = index;
        }
        for (var i = 0; i < maxLen; i++) {
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            if (_pos < -imgW) {
                _pos += maxLen * imgW
            } else if (_pos > sizeW + imgW) {
                _pos -= maxLen * imgW
            }
            $(".xn_ba_js_1_element").eq(i).stop().css({
                left:imgW
            }).animate({
                left: _pos
            }, {
                duration: 700,
                easing: 'easeOutQuint'
            })
        }
    }
}
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuint',
    swing: function (x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    }, easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }
});
/*end_xn_ba_js_1_banner*/
/*xn_mc_cent_1_wrap*/
/*end_xn_mc_cent_1_wrap*/

/*xn_mc_dzpic_1_wrap*/
/*end_xn_mc_dzpic_1_wrap*/

/*xn_mc_cent_2_lmtj*/
/*end_xn_mc_cent_2_lmtj*/
/*xn_mc_cent_3_qhtc*/
$(document).ready(function(){
    $(".qhcasecenter_ct").find(".prolist").eq(0).show();        
    $(".tab_nav-tb").find("li").eq(0).addClass("curr");        
    $(".tab_nav-tb li").on("click",function(){ //给a标签添加事件  
        var index=$(this).index();  //获取当前a标签的个数  
        $(this).parent().parent().next().find(".prolist").hide().eq(index).show(); //返回上一层，在下面查找css名为box隐藏，然后选中的显示  
        $(this).addClass("curr").siblings().removeClass("curr"); //a标签显示，同辈元素隐藏  
  }) 
});
/*end_xn_mc_cent_3_qhtc*/
/*xn_mc_cent_4_dzcase*/
/*end_xn_mc_cent_4_dzcase*/
/*xn_mc_cent_5_qhcase*/
$(document).ready(function(){
    $(".qhcasecenter").find(".prolist").eq(0).show();        
    $(".tab_nav").find("li").eq(0).addClass("curr");        
    $(".tab_nav li").on("click",function(){ //给a标签添加事件  
        var index=$(this).index();  //获取当前a标签的个数  
        $(this).parent().parent().next().find(".prolist").hide().eq(index).show(); //返回上一层，在下面查找css名为box隐藏，然后选中的显示  
        $(this).addClass("curr").siblings().removeClass("curr"); //a标签显示，同辈元素隐藏  
  }) 
});
/*end_xn_mc_cent_5_qhcase*/
/*xn_mc_cent_6_dzliuc*/
/*end_xn_mc_cent_6_dzliuc*/
/*xn_mc_cent_7_khpl*/
$(document).ready(function(){
  	var linum=$(".xn_mc_cent_7_khpl .wrap .hd ul li").length;
  var ulw=linum*153;
  
  	 $(".xn_mc_cent_7_khpl .wrap .hd ul").css("width",ulw);
    $(".xn_mc_cent_7_khpl .wrap .hd").find("li").eq(0).addClass("on");
    $(".tabBar").slide({
        mainCell:".conWrap",
        effect:"left", 
        //trigger:"click", 
        pnLoop:false
      /*
      	startFun:function(i,c){
       */
         /* $(".ico_down").click(function(){
          	i==7;
          });
          */
          /*
          if(i>6 && i<14){
          	 $(".xn_mc_cent_7_khpl .wrap .hd ul").css("transform","translateX(-1080px)");
          }
          else if(i>13 && i<21){
          	 $(".xn_mc_cent_7_khpl .wrap .hd ul").css("transform","translateX(-2160px)");
          }
           else if(i>20 && i<28){
          	 $(".xn_mc_cent_7_khpl .wrap .hd ul").css("transform","translateX(-3240px)");
          }else{
          	$(".xn_mc_cent_7_khpl .wrap .hd ul").css("transform","translateX(0px)");
          }
          */
        	//$("#textarea").val( $("#textarea").val()+ "第"+(i+1)+"个效果开始，同时执行startFun函数。当前分页状态："+(i+1)+"/"+c+"\r\n")
    	/*}*/
    });
  
  $(".ico_down").click(function(){
    			var left = $('.conWrap').position().left;
    			if(left>-6055 && left<=0){
                	$(".hd li").eq(7).addClass("on");
    				$(".xn_mc_cent_7_khpl .wrap .hd ul").css("transform","translateX(-1080px)");
  					$(".conWrap").css("left","-6055px");
                }else if(left>-12110 && left<=-6055){
                  	$(".hd li").eq(14).addClass("on");
    				$(".xn_mc_cent_7_khpl .wrap .hd ul").css("transform","translateX(-2160px)");
  					$(".conWrap").css("left","-12110px");
                }
    /*else if(left>-18165 && left<=-12110){
                  	$(".hd li").eq(21).addClass("on");
    				$(".xn_mc_cent_7_khpl .wrap .hd ul").css("transform","translateX(-3240px)");
  					$(".conWrap").css("left","-18165px");
                }*/else{
                    $(".hd li").eq(0).addClass("on");
    				$(".xn_mc_cent_7_khpl .wrap .hd ul").css("transform","translateX(0)");
  					$(".conWrap").css("left","0");
                }
 		 });
  
    $(".ico_up").click(function(){
    			var left = $('.conWrap').position().left;
    			if(left>-6055 && left<=0){
                	$(".hd li").eq(0).addClass("on");
    				$(".xn_mc_cent_7_khpl .wrap .hd ul").css("transform","translateX(0)");
  					$(".conWrap").css("left","0");
                }else if(left>-12110 && left<=-6055){
                  	$(".hd li").eq(0).addClass("on");
    				$(".xn_mc_cent_7_khpl .wrap .hd ul").css("transform","translateX(0)");
  					$(".conWrap").css("left","0");
                }
   else if(left>-18165 && left<=-12110){
                  	$(".hd li").eq(7).addClass("on");
    				$(".xn_mc_cent_7_khpl .wrap .hd ul").css("transform","translateX(-1080px)");
  					$(".conWrap").css("left","-6055px");
                }else{
                    $(".hd li").eq(0).addClass("on");
    				$(".xn_mc_cent_7_khpl .wrap .hd ul").css("transform","translateX(0)");
  					$(".conWrap").css("left","0");
                }
 		 });

  
  
});
/*end_xn_mc_cent_7_khpl*/
/*xn_mc_cent_75_dzpic*/
/*end_xn_mc_cent_75_dzpic*/
/*xn_mc_cent_8_about*/
/*end_xn_mc_cent_8_about*/
/*xn_mc_cent_85_list*/
/*end_xn_mc_cent_85_list*/
/*xn_mc_cent_9_design*/
/*end_xn_mc_cent_9_design*/
/*xn_mc_cent_10_qhgl*/

/*
$(document).ready(function(){
    $(".tabcent").find(".itmlist").eq(0).show();        
    $(".tab_nv").find("a").eq(0).addClass("curr");        
    $(".tab_nv a").on("click",function(){ //给a标签添加事件  
        var index=$(this).index();  //获取当前a标签的个数  
        $(this).parent().next().find(".itmlist").hide().eq(index).show(); //返回上一层，在下面查找css名为box隐藏，然后选中的显示  
        $(this).addClass("curr").siblings().removeClass("curr"); //a标签显示，同辈元素隐藏  
  }) 
});
*/

/*end_xn_mc_cent_10_qhgl*/
/*ea_c*//*ea_b*/
/*foot_nav*/
/*end_foot_nav*/
/*xn_f_3_wrap*/
/*end_xn_f_3_wrap*/
/*xn_f_1_warp*/
/*end_xn_f_1_warp*/
/*xn_f_2_warp*/
/*end_xn_f_2_warp*/
/*foot_copy*/
/*end_foot_copy*/
/*ea_b*/
/*ea_bg*/
/*ea_bg*//*ea_m*/
/*ea_m*/
/*ea_pi*/
/*ea_pi*/
/*ea_wj*/
/*ea_wj*/
