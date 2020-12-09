(function($) {
    $.fn.lnb = function(){
        $('.lnb_wrap li .menu_cont').hide();
        $('.lnb_wrap li').eq(0).addClass('on');
        $('.lnb_wrap li').eq(0).children('.menu_cont').show();
        $('.lnb_wrap li .menu_tit').on('click', function(){
            if(!$(this).parent('li').hasClass('on')){
                $(this).parent('li').addClass('on');
                $(this).siblings('.menu_cont').stop().slideDown();
                
            }else{
                $(this).parent('li').removeClass('on');
                $(this).siblings('.menu_cont').stop().slideUp();
            }
        });
    }
    $.fn.toggle = function(){
        $('.toggle_wrap dt').on('click', function(){
            if(!$(this).hasClass('on')){
                $(this).addClass('on');
                $(this).siblings('dd').stop().slideDown();
                
            }else{
                $(this).removeClass('on');
                $(this).siblings('dd').stop().slideUp();
            }
        });
    }
    $.fn.catagory_tab = function(){
        var tab_btn = $('.catagory_wrap .tab_navi li');
        var tab_cont = $('.catagory_wrap .tab_content');

        tab_cont.hide();
        tab_cont.eq(0).show();

        tab_btn.on('click', function(){
            var i=$(this).index();
            tab_cont.hide();
            tab_cont.eq(i).show();
            tab_btn.removeClass('on');
            $(this).addClass('on');
        });
    }
    $.fn.tab = function(){
        var $tabBtn = $('.tab_wrap .tab_navi li');
        var $tabCont = $('.tab_wrap .tab_content');
        var contNum = $tabCont.length;
        $tabCont.hide();
        $tabCont.eq(0).show();
        $tabBtn.on('click', function(){
        var i=$(this).index();
        $tabBtn.removeClass('on');
        $(this).addClass('on');
            if(contNum > 1){
                $tabCont.hide();
                $tabCont.eq(i).show();
            }
        });
    }
    
    
    $.fn.calendar = function(){
        $( ".datepicker" ).datepicker({
            changeYear: true,
            changeMonth: true, 
            monthNamesShort:[ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ],
            dayNamesMin: [ '일', '월', '화', '수', '목', '금', '토'],
            showMonthAfterYear: true,
            showOtherMonths: true
        });
    }
})(jQuery);

window.onload = function(){
    $.fn.lnb();             //lnb
    $.fn.toggle();          //toggle
    $.fn.catagory_tab();    //catagory_tab
    $.fn.tab();             //tab
    $.fn.calendar();        //calendar
}
