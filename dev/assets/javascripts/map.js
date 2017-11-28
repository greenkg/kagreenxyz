function initMap() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {lat: 64.707, lng: -18.660},

        zoom: 5,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#DCDCDC'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#ffffff'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#000000'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#000000'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#99ccff'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#000000'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]

    });
    var marker1 = new google.maps.Marker({
        position: {lat: 63.9868067, lng: -22.6301555},
        map: map,
        title: "Keflavik Airport"
    });
    var marker = new google.maps.Marker({
        position: {lat: 63.419, lng: -19.015},
        map: map,
        title: 'Vik'
    });
    var marker3 = new google.maps.Marker({
        position: {lat: 64.0761707, lng: -16.2793214},
        map: map,
        title: "Jokulsarlon"
    });
    var marker4 = new google.maps.Marker({
        position: {lat: 64.2572664, lng: -21.1793101},
        map: map,
        title: "Thingvellir"
    });

}

initMap();

