$(function(){
    /* ======== 헤더 ======== */ 
    var $header = $('header'); //헤더를 변수에 넣기
    var $page = $('#visual'); //색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top; //색상 변할 부분의 top값 구하기
    
    $window.resize(function(){ 
    //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
    });
    $window.on('scroll', function(){
      var scrolled = $window.scrollTop() > pageOffsetTop; //스크롤된 상태; true or false
      $header.toggleClass('down', scrolled); //클래스 토글
    });


    /* ======== 스크롤 이벤트 ======== */
    let baseline = -200;// 실제로 화면을 차지하는 면적이 넓은 컨테이너대로 인식하게
    let con0 = $(".intro_beliefs").offset().top + baseline;
    let con1 = $(".intro_profile").offset().top + baseline;
    let con2 = $("#con2_web").offset().top + baseline;

    $(window).on("scroll", function(){ 
      let scroll = $(this).scrollTop(); // 현재 화면의 높이
    
      if(scroll >= con0 && scroll < con1){ // 가치관
        $(".intro_bg1").addClass("changebg");
      } else if(scroll >= con1 && scroll < con2) { // 프로필
        $(".circle").css({"transform":"rotateY(720deg)"});
        $(".career-history .line").addClass("line-active");
        setTimeout(function(){ // 목록 순차적으로 등장
          $(".career-history li:nth-child(1)").stop().animate({"opacity":"1", "margin-right":"10px"}, function(){
            $(".career-history li:nth-child(2)").stop().animate({"opacity":"1", "margin-right":"10px"}, function(){
              $(".career-history li:nth-child(3)").stop().animate({"opacity":"1", "margin-right":"10px"})
            })
          })
        }, 1000)
      } else{
      }
    })

    /* ======== 프로필 ======== */
    // $(".career-history h3").on("mouseover", function(){
    //   $(".career-history h3").siblings("dl").children("dt, dd").stop().slideUp();
    //   $(this).siblings("dl").children("dt, dd").stop().slideDown();
    //   console.log(`d`)
    // })
});
