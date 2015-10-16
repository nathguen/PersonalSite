$().ready(function () {


    landOnPage();

    function landOnPage() {
        // animate when page loads
        var logo = $('#logo-container');
        var logoText = $('#logo-text');
        var navTop = $('.nav-ul');
        var windowPosition = $(window).scrollTop();

        $(logo).addClass('animated').addClass('bounceInLeft');
        $(logoText).addClass('animated').addClass('bounceInLeft');

        if (windowPosition == 0) {
            $(navTop).addClass('animated').addClass('bounceInRight');
        }
    }



    var documentHeight = $(document).height();
    $('#sub-nav').css('height', documentHeight);
    $('#sub-nav').mouseover(function () {
        console.log('mouse enter');
        $(this).animate({
            width: '110px'
        }, 100);
    });
    $('#sub-nav').mouseleave(function () {
        $(this).animate({
            width: '30px'
        }, 100);
    });



    //function below hides and shows the navigation at the top
    $(window).scroll(function () {
        var lastScrollTop = 0;
        var direction = detectScrollDirection(lastScrollTop);
        if (direction === 'down') {
            headerAnimateUp();
        }
        
        
        //detects if the user arrives at the top
        var topElement = $('h1').first().offset().top;
        var topScreen = $(window).scrollTop();
        if ((topScreen < topElement) && direction === 'up') {
            headerAnimateDown();
        }

//        else if (direction === 'up' && currentPosition >= topBoundary) {
//            headerAnimateDown();
//        }
    });





    // detect direction of scroll
    //scroll detection from http://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event
    function detectScrollDirection(lastScrollTop) {
        var st = $(window).scrollTop();
        var direction;
        if (st > lastScrollTop) {
            // downscroll code
            direction = 'down';

        } else {
            // upscroll code
            direction = 'up';
        }
        lastScrollTop = st;
        return direction;
    }



    //checks the 




    function headerAnimateUp() {
        $('#logo-container').animate({
            width: '70px'
        }, 50);
        $('#logo-text').animate({
            fontSize: '69%',
            top: '36px',
            fontWeight: '200'
        }, 50);
        $('header').animate({
            height: '55px',
            borderBottom: '0'
        }, 50);
        $('.nav-buttons').removeClass().addClass('nav-buttons');
        $('.nav-buttons').addClass('animated').addClass('fadeOutUp');
    }


    function headerAnimateDown() {
        var windowPosition = $(window).scrollTop();
//        if (windowPosition !== 0) {

        $('#logo-container').animate({
            width: '120px'
        }, 50);
        $('#logo-text').animate({
            fontSize: '100%',
            top: '60px',
            fontWeight: '600'
        }, 50);
        $('header').animate({
            height: '95px'
        }, 50);
        $('header').css('border-bottom', '10px solid rgba(250, 250, 250, 0.3)');

        $('.nav-buttons').removeClass().addClass('nav-buttons');
        $('.nav-buttons').addClass('animated').addClass('fadeInDown');
//        }
    }


    $('header').mouseover(function () {
        headerAnimateDown();
    });




});