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
})(jQuery);

window.onload = function(){
    $.fn.lnb();         //lnb
    $.fn.catagory_tab();         //tab
    $.fn.tab();         //tab
}
