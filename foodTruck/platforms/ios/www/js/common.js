var Address = {};
var Coords = {};


function latLngGps(){
    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //

    

    function onDeviceReady() {
        var options = { enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        Coords.localizacao = position.coords.latitude+","+position.coords.longitude;

        Coords.localizacaoLat = position.coords.latitude;
        Coords.localizacaoLng = position.coords.longitude;
        
        $('.principal.topo').html('Latitude: '  + position.coords.latitude     + '<br />' +
                                  'Longitude: ' + position.coords.longitude    + '<br />');
        getEndereco();
        
        
    }
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
}

function pegaPosicao(){
   return Coords.localizacao;
}   

function getEndereco(){

 $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng='+Coords.localizacao+'&apikey=AIzaSyCFqAbU6JQNyEgc46IgNR31Qze83PYJcQw',function(data) {
    var location = data.results[0].formatted_address;
    // coordinates are location.lat and location.lng
    $('.principal.topo').append("Endereço: " + location);
 });

}

function voltarTelaInicial(){
    window.location.assign("index.html");
}

function registarNovoUsuario(){
    window.location.assign("cadastro.html");
}

function limparForm(){
    $("input").val("");
}

function paginaRecuperarLoginSenha(){
    window.location.assign("recuperar.html");
}