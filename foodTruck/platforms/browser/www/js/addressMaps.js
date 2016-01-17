function pegarEndereco(latlng){
var pegarEndereco = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlng + "&sensor=false";
        $.ajax({
            url: pegarEndereco,
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function(data, status){
                //data loaded
                var address = data;
            },
            error: function(){
                //error loading data
                alert('no data');
            }
        });    
}
