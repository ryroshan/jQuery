$('document').ready(function(){
    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(2000, function(){
            $('#btnFadeOut').text('it is gone!!');
        });
    });

    $('#btnFadeIn').click(function(){
        $('#box').fadeIn(2000, function(){
            $('#btnFadeIn').text('it is come!!')
        });
    });

    $('#btnFadeTog').click(function(){
        $('#box').toggle(1000);
    });


    $('#btnSlideUp').click(function(){
        $('#box').slideUp();
    })

    $('#btnSlideDown').click(function(){
        $('#box').slideDown();
    });

    $('#btnSlideTog').click(function(){
        $('#box').slideToggle(2000);
    });

    $('#btnStop').click(function(){
        $('#box').stop();
    });

    $('#moveRight').click(function(){
        $('#box2').animate({
            left:500, width: '250px', height : '250px',
            opacity: '0.5'
        });
    });

    $('#moveLeft').click(function(){
        $('#box2').animate({
            left:0, width: '100px', height : '100px',
             opacity: '1'
        });
    });

    $('#moveAround').click(function(){
        var box = $('#box2');
        box.animate({
            left:300
        });
        box.animate({
            top: 200
        });
        box.animate({
            left:0,
            top:200
        });
        box.animate({
            left:0,
            top:0
        })

    })


})