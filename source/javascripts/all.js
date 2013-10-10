var map;
function initializeMap() {
  var feny = new google.maps.LatLng(40.720982, -74.00137799999999);

  var mapOptions = {
    zoom: 17,
    center: feny,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.getElementById('js-gmap'), mapOptions);

  var marker = new google.maps.Marker({
    position: feny,
    map: map
  });
}

google.maps.event.addDomListener(window, 'load', initializeMap);