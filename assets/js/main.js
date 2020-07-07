//search bar micro interaction
$(".ms-input").focus(function(){
    $(this).parent().addClass('active');

}).blur(function(){
    $(this).parent().removeClass('active');
})