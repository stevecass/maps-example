function exampleCallback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      console.log('place', results[i]);
      var html = "<li>" + JSON.stringify(results[i]) + "</li>";
      console.log('html', html);
      $('#results').append(html);
    }
  }
}

function showPosition(position) {
var service = new google.maps.places.PlacesService(document.getElementById('map'));
var request = {location: position, radius:2000};

service.nearbySearch(request, exampleCallback);
}

$(document).ready(function(){
  var samplePosition = {lat:42, lng:-72};
  showPosition(samplePosition);
});