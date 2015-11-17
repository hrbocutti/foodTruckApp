var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       // app.receivedEvent('deviceready');
       var options = {enableHighAccuracy: true, timeout: 27000, maximumAge: 30000};
       navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError, options);
    },

    onSuccess: function(position){
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        var latLong = new google.maps.LatLng(latitude, longitude);

        var address = "latitude: "+latitude+"longitude: "+latitude;

        var contentString = address;

        var mapOptions = {
            center: latLong,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	   
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });

        var marker = new google.maps.Marker({
              position: latLong,
              map: map,
              title: 'my location'
          });
        marker.addListener('click',function(){
            infowindow.open(map, marker);
        });

    },
    
    onError: function(error){
        alert("the code is " + error.code + ". \n" + "message: " + error.message);
    },
};

app.initialize();