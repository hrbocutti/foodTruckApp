function populaTabelaLocalizacao(){



	Parse.initialize("4tghv6GjleCbjLsaAem8jH12IceJRr26qSAAsbka", "r3fXhrjJuCbASHszvQlmHm5A5tcdZaw98zp8znal");

	var foodTruck = Parse.Object.extend("FoodTruck");
	var foodTruckScore = new foodTruck();
	var position = pegaPosicao(position);

	if(position != undefined){

		foodTruckScore.save({
			localizacao: position
		}, {
			success: function(foodTruck) {
				alert('Localização Compartilhada com Sucesso!');
			},
			error: function(foodTruck, error) {
		    // The save failed.
		    // error is a Parse.Error with an error code and message.
		    alert('Erro ao Compartilhada Localização!');

		}
	});

	}else{
		navigator.notification.alert(
			    error.message,  // message
			    null,         // callback
			    'Error',            // title
			    'Ok'                  // buttonName
			    );
	}
}

function populaTabelaCliente(){
	
	Parse.initialize("4tghv6GjleCbjLsaAem8jH12IceJRr26qSAAsbka", "r3fXhrjJuCbASHszvQlmHm5A5tcdZaw98zp8znal");

	var enc = CryptoJS.Rabbit.encrypt($("#password").val(), "appFoodTruck");
	var data      = {};
	data.user     = $("#user").val();
	data.password = enc.toString();
	data.email 	  = $("#email").val();

    //var decrypted = CryptoJS.Rabbit.decrypt(encrypted, "appFoodTruck");

    var usuario = data.user;
    var autUser = Parse.Object.extend("usuario");
    var query = new Parse.Query(autUser);
    query.equalTo("user", usuario);
    query.find({
    	success:function(results) {
    		if(results.length > 0){

    			$("#user").val("");
    			
    			alert("usuário existente !");

    		}else if(data.user != "" && data.email != "" && $("#password").val() != "	"){
    			var cadastroUsuario = Parse.Object.extend("usuario");
    			var cadastroUsuarioSave = new cadastroUsuario();

    			cadastroUsuarioSave.save(data,{
    				sucess:function(data){
    					$("#user").val("");
    					$("#email").val("");
    					$("#password").val("");
    					alert('Dados Salvo com sucesso');
    					voltarTelaInicial();
    				},
    				error:function(error){
    					console.log("Erro: "+message.error);

    				}
    			});
    		}else{
    			alert("Preencha todos os dados corretamente!");
    		}
    	},
    	error:function(error){
    		console.log("Erro: " + message.error);
    	}

    });
}
