// $('#btn-1').click(function(){
//     alert('Button clicked...')
// })

// $('#btn-1').on('click', function(){
//     alert('Button Clicked !')
// })


// $('#btn-1').on('click',function(){
//     $('.para1').hide();
// })

// $('#btn-2').on('click',function(){        
//     $('.para1').show();
// })

// $('#btn-1').dblclick(function(){       it's perform when double click
//     $('.para1').toggle();
// })


// $('#btn-1').hover(function(){           hover takes both the events 'mouseEnter & mouseLeave'.
//     $('.para1').toggle();
// })

// $('#btn-1').mouseenter(function(){
//     $('.para1').toggle();
// })

// $('#btn-1').mouseleave(function(){
//     $('.para1').toggle();
// })

 // mouseMove

 // mouseDown
//  $('#btn-1').on('mousedown',function(){
//      $('.para1').toggle();
//  })

//  // MouseUP
//  $('#btn-1').on('mouseup',function(){
//     $('.para1').toggle();
// })


$('input').focus(function(){
    $(this).css('background', 'pink')
})

$('input').blur(function(){
    $(this).css('background', 'white');
})

$('select#slt1').change(function(e){
    alert(e.target.value);
})

$('form').submit(function(e){
    e.preventDefault();
    let values = $('input#input1').val();
    console.log(values)
})