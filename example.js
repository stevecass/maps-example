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

  // first construct the "service"
  var service = new google.maps.places.PlacesService(document.getElementById('map'));

  // now create a 'request' object - specifying where to search and what radius
  // a literal like {location:{lat:42, lng:-72}} would work equally well here
  var request = {location: position, radius:2000};

  /*
   now ask for the search and provide a callback function for the results.
   It will get called with the results and an indication of the status. Example above.
   In your case it will construct the params to send into your create request, 
   as we discussed earlier.
  */
  service.nearbySearch(request, exampleCallback);
}

// This is just an example document.ready to show the showPosition working
$(document).ready(function(){
  var samplePosition = {lat:42, lng:-72};
  showPosition(samplePosition);
});