$(document).ready(function() {
    
    var nowIdx = Math.floor(Math.random()*4);
    var $ticket = $("section>#ticket>ul>li>a");
    var $nav = $("header>nav>ol>li>a");
    var $pagination = $("#rollingbanner>.slides-pagination>li>a");
    var $container = $("#rollingbanner>.rollingbanner>div>ol");
    var intervalID = "";
    var $btnPlay = $("#rollingbanner>.btnPlay");
    var $btnStop = $("#rollingbanner>.btnStop");
    var $area = $(".list>#area>li>a");
    var $city = $(".list>#city>li>a");
    
//    $("html,body").animate({scrollTop: 0}, 100); //reload시 맨위로

    $(window).load(function(){
        $ticket.eq(0).parent().addClass("ticketOn");
        $(".modal").hide();
    });

    $ticket.bind("click",function(){
        nowIdx = $ticket.index($(this));
        $ticket.eq(nowIdx).parent().addClass("ticketOn").siblings().removeClass("ticketOn");
        return false;
    });
    
    $pagination.bind("click",function(){
        nowIdx = $pagination.index($(this));
        $pagination.eq(nowIdx).parent().addClass("paginationOn").siblings().removeClass("paginationOn");
        return false;
    });
    
    $nav.bind("mouseover",function(){
        $(".nav-toggle-container").stop().slideDown();
    });
    
    $("nav").bind("mouseleave",function(){
        $(".nav-toggle-container").stop().slideUp();
    });
    
    
    function move(){
		$pagination.eq(nowIdx).parent("li").addClass("paginationOn").siblings().removeClass("paginationOn");
		$container.stop().animate({
				"left":(-100*nowIdx)+"%"
		});
	 }

	   $pagination.bind("click",function(evt){
            nowIdx = $pagination.index($(this));
            move();
            evt.preventDefault();
	   });
    
    function nextIdx(){
        if(nowIdx > 2){
            nowIdx = 0;
        }else{
            nowIdx ++;
        }
    }
    
    function autoPlay(){
        intervalID = setInterval(function(){
        nextIdx();
        move();
        },2000);
    }
    
    function autoStop(){
		clearInterval(intervalID);
	}
    
    $btnPlay.bind("click",function(){
        autoStop();
        autoPlay();
        return false;
	});//재생시작
    
   $btnStop.bind("click",function(){
        autoStop();
        return false;
	});//일시정지

    
    $(window).load(function(){ 
        move();
        autoPlay();
    });
    

    $(".myBtn").bind("click",function(){
        $(".modal").show();
        return false;
    });
    $(".close").bind("click",function(){
        $(".modal").hide();
        return false;
    });
    
    
    $area.bind("click",function(){
        nowIdx = $area.index($(this));        $area.eq(nowIdx).parent("li").addClass("listOn").siblings().removeClass("listOn");
        return false;
    });

    
    $(window).load(function(){
        
        var bannerLeft=0;
        var first=1;
        var last=8;
        var imgCnt=0;
        var $img = $("#specialzone>.flow_bann_area>ol>li>a>img");
        var $first;
        var $last;

        $img.each(function(){ 
            $(this).css("left",bannerLeft);
            bannerLeft += $(this).width()+5;
            $(this).attr("id", "banner"+(++imgCnt));
            
        });
    
    
                if( imgCnt > 6){   
           
                    
                last = imgCnt;

                setInterval(function() {
                    $img.each(function(){
                        $(this).css("left", $(this).position().left-1); 
                });
                    $first = $("#banner"+first);
                    $last = $("#banner"+last);
                    
                if($first.position().left < -200) { 
                
                    $first.css("left", $last.position().left + $last.width()+5 );
                    first++;
                    last++;
                    if(last > imgCnt) 
                        { last=1; }   
                    if(first > imgCnt) 
                        { first=1; }
                    }
                }, 50);          
                }    
    }); //특가존 롤링배너
    
    $(window).load(function(){
        
        var $img = $("#eventzone>.flow_bann_area>ol>li>a>img");              
        var bannerLeft=0;
        var first=1;
        var last=6;
        var imgCnt=0;
        var $first;
        var $last;
        
        $img.each(function(){
            $(this).css("left",bannerLeft);
            bannerLeft += $(this).width()+20;
            $(this).attr("id", "eventbanner"+(++imgCnt)); 
            
        });
        
        
        if( imgCnt > 5){   

            last = imgCnt;

            setInterval(function() {
                $img.each(function(){
                    $(this).css("left", $(this).position().left-3); 
                });
                $first = $("#eventbanner"+first);
                $last = $("#eventbanner"+last);

                if($first.position().left < -200) { 

                    $first.css("left", $last.position().left + $last.width()+20 );
                    first++;
                    last++;
                if(last > imgCnt) 
                    { last=1; }   
                if(first > imgCnt) 
                    { first=1; }
                }
            }, 50);          
        }  
        
    }); //이벤트존 롤링배너
    
    
        $(window).load(function(){
        
            var $img = $("#servicezone>.flow_bann_area>ol>li>a>img");              
            var bannerLeft=0;
            var first=1;
            var last=6;
            var imgCnt=0;
            var $first;
            var $last;
        
            $img.each(function(){
                $(this).css("left",bannerLeft);
                bannerLeft += $(this).width()+20;
                $(this).attr("id", "servicebanner"+(++imgCnt)); 

         });
        
        
        if( imgCnt > 5){   

            last = imgCnt;

            setInterval(function() {
                $img.each(function(){
                    $(this).css("left", $(this).position().left-3); 
                });
                $first = $("#servicebanner"+first);
                $last = $("#servicebanner"+last);

                if($first.position().left < -200) { 

                    $first.css("left", $last.position().left + $last.width()+20 );
                    first++;
                    last++;
                if(last > imgCnt) 
                    { last=1; }   
                if(first > imgCnt) 
                    { first=1; }
                }
            }, 50);          
        }  
        
    });//서비스존 롤링배너
    
    
    
    //minus

    
    //plus

});
