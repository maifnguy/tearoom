// CONTACT -- console.log form values
$('#submit').on('click', function() {
  log();
  clearForm();
});

function log () {
  console.log('Name: ' + $('#name').val() + ', Phone: ' + $('#phone').val() + ', Email: ' + $('#email').val() + ', Location: ' + $('#location').val() + ', Event: ' + $('#event').val() + ', Message: ' + $('#message').val());
}

function clearForm() {
  document.getElementById('name').value='';
  document.getElementById('phone').value='';
  document.getElementById('email').value='';
  document.getElementById('location').value='';
  document.getElementById('event').value='';
  document.getElementById('message').value='';
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
      var latLng1 = new google.maps.LatLng(47.6062, -122.3321);
      map.setZoom (15);
      map.panTo(latLng);

      var seattleMarker = new google.maps.Marker({
        position: new google.maps.LatLng(47.6062, -122.3321),
        title: 'Marker',
        map: map,
        draggable: true
      });
    } else if ($(this).val() == 'cambridge') {
      var latLng2 = new google.maps.LatLng(42.3736, -71.1097);
      map.setZoom (15);
      map.panTo(latLng);

      var cambridgeMarker = new google.maps.Marker({
        position: new google.maps.LatLng(42.3736, -71.1097),
        title: 'Marker',
        map: map,
        draggable: true
      });
    }
  });
}


// HOME -- carousel slideshow on homepage 
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName('slideshow');
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = 'block'; 
    setTimeout(carousel, 2800); 
}



