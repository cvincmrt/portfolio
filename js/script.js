$(document).ready(function(){
    $("#adon").click(function(){
        const iconRight = $(".right-arrow");
        const iconLeft = $(".left-arrow");

        iconLeft.toggleClass("active");
        iconRight.toggleClass("active");
        
        $(".panel").toggleClass("active");
        $("main").toggleClass("active");
        $(".sidebar").toggleClass("active");
    });
});





