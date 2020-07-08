function initMap() {
            var map =new google.maps.Map(document.getElementById("map"), {
                zoom: 5,
                center: {
                        lat: 31.974204,
                        lng: 35.865809
                }
            });
            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [
                	
                {lat: 31.9746628704, lng: 35.8416080475}, 
                {lat: 31.9656628704, lng: 35.8916080475},  
                                
            ];
// Added label: "Reality Decor" to display on markers.
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length],
                    label: "Reality Decor",

                });
            });

            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

        }

    
    