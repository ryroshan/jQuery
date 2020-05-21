$('document').ready(function(){
    // $('#result').load('test.html', function(responseTxt, statusTxt, xhr){
    //     if(statusTxt=='success'){
    //         alert('it went fine!!')
    //     }
    //     else if(statusTxt=='error'){                                                     // load method 
    //         alert('Error :'+xhr.statusTxt)
    //     }
        
    // });

    // $.get('test.html', function(data){

    //         $('#result').html(data);
    // })


    // $.getJSON("users.json", function(data){
    //     $.each(data, function(i , user){
    //         $('ul#users').append('<li>'+user.firstName+'</li>')                // getJson data
    //     }) 
    // })

    // $.ajax({
    //     method : 'GET',
    //     url : "https://jsonplaceholder.typicode.com/posts",
    //     dataType : 'json'
    // }).done(function(data){
    //     console.log(data);
    //     $.map(data ,function(post , i){
    //             $('#result').append('<h2>'+post.title+'</h2><p>'+post.body+'</p>')         using ajax
    //     })

    // })

    $('#postform').submit(function(e){
        e.preventDefault();

        var title = $('#title').val();
        var body = $('#body').val();
        var url = $(this).attr('action');

        $.post(url, {title:title, body:body}).
        done(function(data){
                console.log('data saved!!');
                console.log(data);
        })
    })


});