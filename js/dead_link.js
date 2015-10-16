$().ready(function(){
    $('a').click(function(){
        if($(this).attr('href') === '#') {
            alert('Sorry, but this link does not appear to be working yet. Please bear with me as the site continues to make improvements.');
        }
    });
});