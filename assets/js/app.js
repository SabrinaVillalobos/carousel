$(document).ready(function(){

var imgItems = $(".carr li").length;
var positionImg = 1;
/*esconder las demas imagenes y mostrar la primera*/
  $(".carr li").hide()
  $(".carr li:first").show()

$(".fa-circle").click(bolitas);
$(".fa-chevron-right").click(rarrow);
$(".fa-chevron-left").click(prevImg);

/**
*que el circulo marque en que img está
*/
$(".bolitas i:first").css({"color": "#FC84A6"});

/**
*muestra la imagen del n° correspondiente al click en las bolitas
*/
function bolitas(){
  var bolitasPos = $(this).index() + 1;
  console.log(bolitasPos);

  $(".carr li").hide()
  $(".carr li:nth-child("+ bolitasPos +")").fadeIn();

/**
 *al hacer click en las bolitas cambia el color
 */
  $(".bolitas i").css({"color": "#5D413B"});
  $(this).css({"color": "#FC84A6"});

  positionImg = bolitasPos;
}

/**
*que al apretar las flechas delante-atras cambien la img
*/
function rarrow(){
if(positionImg >= imgItems){
  positionImg = 1
} else {
  positionImg++;
}
  console.log(positionImg);
/**
*los circulos van cambiando de color al apretar la flecha
*/
  $(".bolitas i").css({"color": "#5D413B"});
  $(".bolitas i:nth-child(" + positionImg +")").css({'color': "#FC84A6"});
/**
*las img van cambiando
*/
  $(".carr li").hide()
  $(".carr li:nth-child("+ positionImg +")").fadeIn();
}
function prevImg(){
if(positionImg <= 1){
  positionImg = imgItems
} else {
  positionImg--;
}
  console.log(positionImg);
/**
*los circulos van cambiando de color al apretar la flecha
*/
  $(".bolitas i").css({"color": "#5D413B"});
  $(".bolitas i:nth-child(" + positionImg +")").css({'color': "#FC84A6"});
/**
*las img van cambiando
*/
  $(".carr li").hide()
  $(".carr li:nth-child("+ positionImg +")").fadeIn();
}
});
