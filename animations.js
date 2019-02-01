//START OPEN CLOSE TOGGLE BUTTON

$(document).ready(function() {


  $(".button").click(function() {
    //wrapping the if/ else statement inside the text
    $(this).text($(this).text() == 'View More +' ? 'View Less -' : 'View More +');
    $(this).toggleClass("animation");
    $(".text").stop().toggle("fast", "linear");

 });

//END OPEN / CLOSE BUTTON


$(".red-square-button").click(function(){
location.reload(true);
});

});




//vanilla JS & HTML5 canvas



// START NEW CANVAS RANDOM RED SQUARES

function draw() {
  var canvas = document.getElementById('red-squares');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');


    for (var i =0; i < 20; i++) {
      var x = Math.random() * canvas.width;
      var y = Math.random() * canvas.height;
         x= Math.floor(x) + 1;
         y= Math.floor(y) + 1;
         console.log(x, y);
    ctx.beginPath;
    ctx.moveTo(0,0);
    ctx.fillStyle="red";
    ctx.fillRect (x, y, 15, 15);

    }
  }

      }
