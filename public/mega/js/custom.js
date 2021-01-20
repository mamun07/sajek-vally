$(document).ready(function() {
    // active main menu
    $( "#smmNavbar" ).superMegaMenu({
        backgroundColor: 'gray',
    });



    // added hover effect
    $('input:radio').change(function() {
        $("#smmNavbar").removeAttr('class');
        var newEffect = 'navbar sm-navbar navbar-expand-lg smmNavbar-' + this.value;
        $( "#smmNavbar" ).addClass(newEffect);
    });
});



//product-gallery js
if ($('.product-gallery-slider').length){
  $('.product-gallery-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      autoplayTimeout: 5000,
      nav: true,
      dots: false,
  });
}

//map js
function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
}



$('#btn-demo-settings').on('click', function(){
  if($(this).hasClass('open')){
      $('#demo-setting').css({
        'bottom': '-100%',
        'opacity': 0
      });
      $(this).removeClass('open');
  }else {
    $(this).addClass('open');
    $('#demo-setting').css({
      'bottom': 0,
      'opacity': 1
    });
  }
  
});

