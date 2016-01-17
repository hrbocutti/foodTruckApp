function autenticarLogin(){

 	Parse.initialize("4tghv6GjleCbjLsaAem8jH12IceJRr26qSAAsbka", "r3fXhrjJuCbASHszvQlmHm5A5tcdZaw98zp8znal");

	var usuario = $("#user").val();
	var senha 	= $("#password").val();

    var autUser = Parse.Object.extend("usuario");
    var query = new Parse.Query(autUser);
    query.equalTo("user", usuario);
        query.find({
	        success:function(results) {
	            var userArray = new Array();
	            for (var i = 0; i < results.length; i++) {
	              var object = results[i];
	              var userValido = object.get("user");
	              if(userValido != null){
	              	var senhaCrypt = object.get("password");
	              	var decrypted  = CryptoJS.Rabbit.decrypt(senhaCrypt, "appFoodTruck");
					if(decrypted.toString( CryptoJS.enc.Utf8 ) === senha){
			        	alert("sucesso senha liberada !");
			        }else{
			        	alert("Usuário ou senha incorreto!");
			        	$('input').val("");
			        }
	              }		                        
	            }
	        }
	            
    	});       
}

    //var decrypted = CryptoJS.Rabbit.decrypt(encrypted, "appFoodTruck");
