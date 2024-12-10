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
    
    /* ======== 슬라이드 ======== */
    let total = $(".siteinfo > li").length; // 총 이미지 개수
    let i = 0 // 이미지 순번
    start();

    /* 페이드 함수 */
    function fade(){
        // 정보
        $(".siteinfo > li").stop().fadeOut();
        $(".siteinfo > li").eq(i).fadeIn();
        // 홈페이지 사진
        // $(".center .img_list li").stop().removeClass("active");
        // $(".center .img_list li").eq(i).addClass("active");
        $(".center .img_list li").hide();
        $(".center .img_list li").eq(i).show();
        // 배경
        $(".centerbg li").stop().removeClass("active");
        $(".centerbg li").eq(i).addClass("active");
    }

    /* 자동 전환 */
    function start(){
        timer = setInterval(function(){
            if(i == total - 1){
                i = 0;
            } else{
                i++;
            }
            console.log(i); // 확인용이므로 나중에 지울 것
            fade();
        }, 5000)
    }

    /* 다음 버튼 */
    $(".next").on("click", function(){
        clearInterval(timer); // 슬라이드쇼 하던 거 멈추기
        if(i == total - 1){
            i = 0; // 마지막 장이면 처음으로 되돌린다
        } else {
            i++; // 아니면 하나씩 더한다
        }
        fade();
        start();
    })

    /* 이전 버튼 */
    $(".prev").on("click", function(){
        clearInterval(timer);
        if(i == 0){
            i = total - 1; // 처음이면은 마지막으로 돌아가야함
        } else {
            i = --i; // 아니면 하나씩 빼야함
        }
        fade();
        start();
    })
});
