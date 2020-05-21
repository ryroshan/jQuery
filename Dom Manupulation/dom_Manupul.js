$(document).ready(function(){
    // $('p.para1').css('color', 'red')
    $('p.para1').css( {color : 'red', background : 'grey'});
    // $('p.para2').addClass('myClass');     // add class 
    // $('p.para2').removeClass('myClass');  // remove class

    $('#btn1').click(function(){
        $('p.para2').toggleClass('myClass');
    })

    

    // $('#mydiv').text('hello World!!')
    // $('#mydiv').html('<h3>hello World!!</h3>')
    // alert($('#mydiv') .text());

  //  $('a').attr('target', 'blank');    // it will open into anther tab -- attr

//   $('p').wrap('<h1>')    

var arr = ['keley', 'john', 'doe', 'caley', 'siken','ritwiz'];
$.each(arr, function(i, val){
    $('#users').append('<li>'+val+'</li>');
})

})




