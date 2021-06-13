$(".panel").click(function() {
    console.log(this);
    $(".panel").removeClass('active');
    $(this).addClass('active');
});