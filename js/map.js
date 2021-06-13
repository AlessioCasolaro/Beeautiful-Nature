const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

function initMap() {
    const bangalore = { lat: 12.97, lng: 77.59 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: bangalore,
    });
    
    google.maps.event.addListener(map, "click", (event) => {
        addMarker(event.latLng, map);
    });
    // Add a marker at the center of the map.
    addMarker(bangalore, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
    new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map,
    });
}