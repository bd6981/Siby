
import markers from '../../crimeData.json'
const mapOptions = {

center: new google.maps.LatLng(33.71, -84.35),
mapTypeId: google.maps.MapTypeId.ROADMAP
};
const infoWindow = new google.maps.InfoWindow();
const map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

for (i = 0; i < markers.length; i++) {
const data = markers[i]
const myLatlng = new google.maps.LatLng(data.lat, data.long);
const marker = new google.maps.Marker({
position: myLatlng,
map: map,
title: data.UC2_Literal
});
(function(marker, data) {
// Attaching a click event to the current marker
google.maps.event.addListener(marker, "click", function(e) {
infoWindow.setContent(data.UC2_Literal);
infoWindow.open(map, marker);
});
})(marker, data);
}
