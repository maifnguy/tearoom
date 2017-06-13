// CONTACT -- console.logs form values
$('#submit').on('click', log);
function log () {
  console.log('Name: ' + $('#name').val() + ' Phone: ' + $('#tel').val() + ' Email: ' + $('#email').val() + ' Location: ' + $('#location').val() + ' Event: ' + $('#event').val() + ' Message: ' + $('#message').val());
}


// CONTACT -- slippy map 
function initMap () {
  var map = new google.maps.Map( $('#google-map')[0], { 
    center: { lat: 47.6062, lng: -122.3321 },
    zoom: 15
  });
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(47.6062, -122.3321),
      title: 'Marker',
      map: map,
      draggable: true
      });

  $('#select').on('change', function () {
    if($(this).val() == 'seattle') {
      var latLng = new google.maps.LatLng(47.6062, -122.3321);
      map.setZoom (15);
      map.panTo(latLng);

      var marker = new google.maps.Marker({
      position: new google.maps.LatLng(47.6062, -122.3321),
      title: 'Marker',
      map: map,
      draggable: true
      });
    } else if ($(this).val() == 'cambridge') {
      var latLng = new google.maps.LatLng(42.3736, -71.1097);
      map.setZoom (15);
      map.panTo(latLng);

      var marker = new google.maps.Marker({
      position: new google.maps.LatLng(42.3736, -71.1097),
      title: 'Marker',
      map: map,
      draggable: true

    })}
  })
};

// HOME -- carousel slideshow on homepage 
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName('slideshow');
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'; 
    };
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = 'block'; 
    setTimeout(carousel, 2800); 
};



