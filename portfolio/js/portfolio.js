$(document).ready(function() {

    //각 article 높이
    var posArticleTop = [];
    
    $("article.cont, footer").each(function(index){
        posArticleTop[index] = $(this).offset().top;
	});
    
    console.log(posArticleTop);
    
    //화면로드시 스크롤 맨 위로
    $("html,body").animate({scrollTop: 0}, 100); //100ms for example


    
    //main-name 에니메이션 효과
    $(function() {
        function swing() {                  
            $('.name_text').animate({'top':'180px'},600).animate({'top':'182px'},600, swing);
        }
        swing();
    });
    
    
    //skill 에니메이션 효과
    $(".skill>ul>li").hide();
    //show nav
    $("header").hide();

    $(window).scroll(function(){
        if($(this).scrollTop() >= 1500 ) {
            $(".skill>ul>li").fadeIn();
        } else if ($(this).scrollTop() > 800 ){
            $("header").fadeIn();
        } else if ($(this).scrollTop() < 900 ){
            $("header").fadeOut();      
        }
    });


    //각 aticle로 이동
    var nowIdx = 0;
    var $menu = $("nav>ul>li>a");
    
    $menu.bind("click",function(){
        nowIdx = $menu.index($(this));
        $menu.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
        $("html,body").animate({scrollTop:posArticleTop[nowIdx]-10});
        return false;
    });
    
});

    
