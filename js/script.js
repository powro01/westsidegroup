function myMap() {
    var myCenter = new google.maps.LatLng(49.9642873, 20.5944314);
    var myCanvas = document.getElementById('myMap');
    var mapOptions = {center: myCenter, zoom: 17.25};
    var map = new google.maps.Map(myCanvas, mapOptions);
    var marker = new google.maps.Marker({position: myCenter});

    marker.setMap(map);
}