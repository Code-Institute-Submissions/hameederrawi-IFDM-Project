function initMap() {
            var map =new google.maps.Map(document.getElementById("map"), {
                zoom: 2,
                center: {
                        lat: 46.619261,
                        lng: -33.134766
                }
            });
            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [
                	
                {lat: 31.9746628704, lng: 35.8416080475}, 
                {lat: 31.9656628704, lng: 35.8916080475},  
                                
            ];

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

    
    