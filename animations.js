//Toggling between One element i.e., Expanding text & hiding it

$(document).ready(function() {



  //Reveal Text/toggle


  $(".button").click(function() {

    //wrapping the if/ else statemetn inside the text
    $(this).text($(this).text() == 'View More +' ? 'View Less -' : 'View More +');
    $(this).toggleClass("animation");
    $(".text").stop().toggle("fast", "linear");

 });

});
