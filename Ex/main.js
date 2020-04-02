// creare uno slider
$(document).ready(function(){

  //EVENTI AL CLICK

    // freccia next
   $('.next').click(
     nextImg
   );

   // freccia prev
    $('.prev').click(
        prevImg
    );

    //click sul pallino




  //FUNZIONI

   // funzione NEXT --------------------------------
  function nextImg() {

     // salvo ref a img attiva al momento del click
     var imgActive = $('.images img.active');
     // salvo il pallino attivo
     var ballActive = $('.nav i.active');

     // tolgo la classe active all'img selezionata
     imgActive.removeClass('active');
     // tolgo la classe active al pallino selezionato
     ballActive.removeClass('active');


     // verifico se questa img era l'ultima
     if(imgActive.hasClass('last')){
       $('.images img.first').addClass('active');
       $('.nav i.first').addClass('active');
     } else {
       // applica classe active alla prox img
       imgActive.next().addClass('active');
       ballActive.next().addClass('active');
     }
  }

  // funzione PREV ---------------------------------------
  function prevImg() {

    // salvo ref a img e ball attiva al momento del click
    var imgActive = $('.images img.active');
    var ballActive = $('.nav i.active');
    // tolgo la classe active all'img e ball selezionati
    imgActive.removeClass('active');
    ballActive.removeClass('active');

    // verifico se questa img era la prima
    if(imgActive.hasClass('first')){
      $('.images img.last').addClass('active');
      $('.nav i.last').addClass('active');
    } else {
      // applica classe active alla prox img
      imgActive.prev().addClass('active');
      ballActive.prev().addClass('active');
    }

  }

  var imgOfImages = $('.images img');

  for (var i = 0; i <= imgOfImages.length; i++) {
    //assegnare classe a immagini
    var selectorImg = '.images img:nth-child'+'('+ i +')';
    var classToAddImg = 'img'+i
    $(selectorImg).addClass(classToAddImg);

    //assegnare classe a ball
    var selectorBall = '.nav i:nth-child'+'('+ i +')';
    var classToAddBall = 'ball'+i
    $(selectorBall).addClass(classToAddBall);

  }






});
