$(document).ready(function(){
    
    var owl = $(".owl-carousel");
    
    owl.owlCarousel({
        loop:true,
        dots:false,
        items: 1,
        mouseDrag: false
    });
    
    $(".right").click(function(){
        owl.trigger('next.owl.carousel', [500]);
    });
    $(".left").click(function(){
        owl.trigger('prev.owl.carousel', [500]);
    });
    
    $( "form" ).submit(function( event ) {
        if( checkspaces($('.form-name')) )
        {
            alert('В имени одни пробелы!');
            event.preventDefault();
            return;
        }
        if( checkspaces($('.form-adr')) )
        {
            alert('В адресе одни пробелы!');
            event.preventDefault();
            return;
        }
        if( !checkemail($('.form-adr').val()) )
        {
            alert('Введите корректный адрес!');
            event.preventDefault();
            return;
        }
        alert('Ваша заявка успешно отправлена!');
    });
});

function checkspaces( ths )
{
    var flag = false;
    for( var i = 0; i < ths.val().length; i ++)
        if( ths.val()[i] == " " )
            flag = true;
        else
        {
            flag = false;
            break;
        }
    return flag;
}

function checkemail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}