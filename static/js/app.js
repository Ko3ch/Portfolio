$(document).ready(function(){
    $('#hamburger').click(function(){
        $('#nav-links').toggleClass('open');
    })
    let meet = $(this).find('.meet').text();
    meet = ''
    let splitText = meet.split("")    
    $('.meet').append(splitText).each(function(i){
        $(this).delay(1000 * i).fadeIn();
    })
// });
//     splitText.forEach(element => {
//         console.log(element)

    // var spans = '<span>' + splitText.join(' </span><span>') + '</span>';


    // $(spans).hide().appendTo('.par').each(function(i) { 
    // });
})

