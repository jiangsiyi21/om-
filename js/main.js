$(document).ready(function(){
		$('.float_right ul li:first-child').click(function(){
			$('.fixed_div').show();		
		})
		$('.icon-remove').click(function(){
			$('.fixed_div').hide();		
		})

  		$('.navbar1 ul li:first-child a').addClass('active');


        $(".erweima .list-nav li:first").addClass('active');
            $(".erweima .tab-content .tab-pane:first").addClass('active in');

            $('.computer_btn').click(function(){
                $('.fixed_div_weixin').hide();
                $('.fixed_div_code').show();
            })
            $('.erweima_btn').click(function(){
                
                $('.fixed_div_user').hide();
                $('.fixed_div_weixin').show();
            });
            $('.fixed_div_code .bottom_index .a1').click(function(){
                $('.fixed_div_code').hide();
                $('.fixed_div_password').show();
            })
            $('.fixed_div_code .bottom_index .a2').click(function(){
                $('.fixed_div_code').hide();
                $('.fixed_div_register').show();
            })
            $('.fixed_div_register .bottom_index .a1').click(function(){
                $('.fixed_div_code').show();
                $('.fixed_div_register').hide();
            })
            $('.fixed_div_register .bottom_index .a2').click(function(){
                $('.fixed_div_password').show();
                $('.fixed_div_register').hide();
            })
            $('.fixed_div_password .bottom_index .a1').click(function(){
                $('.fixed_div_code').show();
                $('.fixed_div_password').hide();
            })
            $('.fixed_div_password .bottom_index .a2').click(function(){
                $('.fixed_div_register').show();
                $('.fixed_div_password').hide();
            })

            $(".chat_div").hover(function(){
                $(".weixin_chat").show(200);
            },function(){
                $(".weixin_chat").hide(200);
            });

            $('.appointment').click(function(){
                $('.appointmentPlate').fadeIn();
            })

            $('.appointmentPlate button').click(function(){
                $('.appAlert').show();
            })
            $('.appAlert').click(function(){
                $(this).hide();
                $('.appointmentPlate').fadeOut();
            })
            
            $('.bottomFixed').click(function(){
                $(this).hide();
            })


            $('.suitBtn1').click(function(){
                $('.fixed_suitBtn1').show();
            })
            $('.fixed_suitBtn1 .icon-remove').click(function(){
                $('.fixed_suitBtn1').hide();
            })
            $('.suitBtn2').click(function(){
                $('.fixed_suitBtn2').show();
            })
            $('.fixed_suitBtn2 .icon-remove').click(function(){
                $('.fixed_suitBtn2').hide();
            })
})

	//顶部导航替换
  	 var min_height=200;
  	 var max_height=100;
    $(window).scroll(function(){
        var s =$(window).scrollTop();
        if(s > min_height){
            //$(".nav_hide").stop().animate({marginTop:'-174px'},80);
            $(".nav_hide").css('display','none');
            $(".nav_show").stop().animate({marginTop:'0px'},200);
            $(".nav_show").addClass('navbar-fixed-top');
        }else if(s<=max_height){
            //$(".nav_hide").stop().animate({marginTop:'0'},20);
            $(".nav_show").stop().animate({marginTop:'-100px'},10);
            $(".nav_hide").css('display','block');
            $(".nav_show").removeClass('navbar-fixed-top');
        }
    })

//返回顶部
function pageScroll(){
	//把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
	window.scrollBy(0,-100);
	//延时递归调用，模拟滚动向上效果
	scrolldelay = setTimeout('pageScroll()',10);
	//获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
	var sTop=document.documentElement.scrollTop+document.body.scrollTop;
	//判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
	if(sTop==0) clearTimeout(scrolldelay);
}