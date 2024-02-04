$('#summary').click(function(){
    $('#hidden_info').slideToggle('slow', function(){
        if( $('#hidden_info').is(':hidden') ){
            $('#summary').text('Summary');
        } else {
            $('#summary').text('Hide content');
        }
    });
    
});

$('#testimonial').click(function(){
    $('#hidden_infoZ').slideToggle('slow', function(){
        if( $('#hidden_infoZ').is(':hidden') ){
            $('#testimonial').text('Testimonials');
        } else {
            $('#testimonial').text('Hide content');
        }
    });
    
});

$('#norellAbout').click(function(){
    $('#hidden_infoN').slideToggle('slow', function(){
        if( $('#hidden_infoN').is(':hidden') ){
            $('#norellAbout').text('Artist Statement');
        } else {
            $('#norellAbout').text('Hide content');
        }
    });
    
});

$('#norellTest').click(function(){
    $('#hidden_infoN2').slideToggle('slow', function(){
        if( $('#hidden_infoN2').is(':hidden') ){
            $('#norellTest').text('Testimonials');
        } else {
            $('#norellTest').text('Hide content');
        }
    });
    
});

$('#blogs').click(function(){
    $('#hidden_infoBlogs').slideToggle('slow', function(){
        if( $('#hidden_infoBlogs').is(':hidden') ){
            $('#blogs').text('Blogs');
        } else {
            $('#blogs').text('Hide content');
        }
    });
    
});

$(".view a").on('click', function(){
    $('.products ul').toggleClass('list');
    return false;
});