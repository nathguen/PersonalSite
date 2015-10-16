$(window).load(function () {
    //animation list

    //grab the images
    var elements = [];
    var codeMonkey = $('#code-monkey');
    elements.push(codeMonkey);
    var uxDesigner = $('#ux-designer');
    elements.push(uxDesigner);
    var cleanCode = $('#clean-code');
    elements.push(cleanCode);
    var languages = $('#languages');
    elements.push(languages);
    var idealCandidate = $('#ideal-candidate');
    elements.push(idealCandidate);
    var twoForOne = $('#two-for-one');
    elements.push(twoForOne);

    //animate the code monkey first
    animate(codeMonkey);


    //scroll event
    $(this).on('scroll scrollstop', function () {
        $.each(elements, function (i, element) {

            //if the element has already been animated then move to next element
            var classBoolean = beenAnimated(element);

            if (!classBoolean) {
                measureElement(element);
            }
        });
    });


    //checks if the element has been animated
    function beenAnimated(element) {
        var classText = $(element).attr('class');
        var classBoolean = classText.includes('animated');
        return classBoolean;
    }



    //measure the element against the user view
    function measureElement(element) {
        var elementPosition = $(element).offset();
        var windowTop = $(window).scrollTop();
        var windowBottom = ($(window).height()) + windowTop;
        if ((windowTop < elementPosition.top) && (windowBottom > elementPosition.top)) {
            animate(element);
        }
    }

    function animate(element) {
        var animation = animateList.attention[Math.floor(Math.random() * animateList.attention.length)];
        $(element).addClass('animated').addClass(animation);

    }


    // dealy function from http://stackoverflow.com/questions/1909441/jquery-keyup-delay
    var delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    //                    delay(function () {
////                        alert('Time elapsed!');
//                    }, 1000);
});