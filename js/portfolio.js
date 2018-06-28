$(document).ready(function() {

    //각 article 높이
    var posArticleTop = [];

    var nowIdx = 0;
    var $menu = $("nav>ul>li>a");

    $("article.cont, footer").each(function(index){
        posArticleTop[index] = $(this).offset().top;
	});

    console.log(posArticleTop);

    // 화면로드시 스크롤 맨 위로
    $("html,body").animate({scrollTop: 0}, 100);



    //main-name 에니메이션 효과
    $(function() {
        function swing() {
            $(".name_text,.block1").animate({'top':'205px'},600).animate({'top':'210px'},600, swing);
            $(".block2").animate({'top':'450px'},500).animate({'top':'465px'},500, swing);
            $(".block3").animate({'top':'385px'},700).animate({'top':'390px'},700, swing);
            $(".block4").animate({'top':'100px'},400).animate({'top':'105px'},400, swing);
            $(".block5").animate({'top':'100px'},700).animate({'top':'120px'},700, swing);
            $(".block6").animate({'top':'265px'},400).animate({'top':'275px'},400, swing);
            $(".block7").animate({'top':'480px'},500).animate({'top':'490px'},500, swing);
            $(".block8").animate({'top':'-10px'},500).animate({'top':'-5px'},500, swing);
        }
        swing();
    });


    //skill 에니메이션 효과
    $(".skill>ul>li").hide();
    //show nav
    $("header").hide();

    $(window).scroll(function(){

      var nowIdx = 0;
      //현재 스크롤탑의 높이값 측정
      var scrollH = $(this).scrollTop();


      console.log("posArticleTop:",posArticleTop);
      for(var i=0;i<$menu.size();i++){
        if(scrollH >= posArticleTop[i]-450){
          $menu.eq(i).parent().addClass("on").siblings().removeClass("on");}
          }

              if($(this).scrollTop()>=800){
                  $("header").fadeIn(300);
              }else{
                  $("header").fadeOut(300);
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

    $("#img1").bind("mouseover",function(){
      $(".mouseover1").fadeIn();
    });
    $(".mouseover").bind("mouseleave",function(){
      $(".mouseover1").fadeOut();
    });

    $("#img2").bind("mouseover",function(){
      $(".mouseover2").fadeIn();
    });
    $(".mouseover").bind("mouseleave",function(){
      $(".mouseover2").fadeOut();
    });

    $("#img3").bind("mouseover",function(){
      $(".mouseover3").fadeIn();
    });
    $(".mouseover").bind("mouseleave",function(){
      $(".mouseover3").fadeOut();
    });

});
