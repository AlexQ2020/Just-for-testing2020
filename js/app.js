let screenHeight=$(window).height();
    $(window).scroll(function (){
        let currentPosition=$(this).scrollTop();
        if(currentPosition>screenHeight-100){
            $(".site-header").addClass("site-header-scroll");
        }else{
            $(".site-header").removeClass("site-header-scroll");
            // setActive("home");
        }
    });

    // $(".navbar-toggler").click(function (){
    //     let result=$(".navbar-collapse").hasClass("show");
    //     if(result){
    //         $(".menu-icon").removeClass("fa-close").addClass("fa-bars");
    //     }else{
    //         $(".menu-icon").removeClass("fa-bars").addClass("fa-close");
    //     }
    // });

    function setActive(current){
        $(".nav-link").removeClass('current-section');
        $(`.nav-link[href='#${current}']`).addClass('current-section');
        
    }
    function navScroll(){
        let currentSection=$("section[id]");
        currentSection.waypoint(function (direction){
            if(direction == "down"){
                let currentSectionId= $(this.element).attr('id');
                
                // console.log(currentSectionId);
                setActive(currentSectionId);
            }
        },{offset: '150px'});

        currentSection.waypoint(function (direction){
            if(direction == "up"){
                let currentSectionId= $(this.element).attr('id');
                // console.log(currentSectionId);
                setActive(currentSectionId);
            }
        },{offset: '150px'});
    }
    navScroll();
    new WOW().init();
$('.sliding-move').slick({
  arrows:false,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});