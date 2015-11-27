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
		    navigator.notification.alert(
			    'Localização Compartilhada com Sucesso!',  // message
			    null,         // callback
			    'Minha Localização',            // title
			    'Ok'                  // buttonName
			);
		  },
		  error: function(foodTruck, error) {
		    // The save failed.
		    // error is a Parse.Error with an error code and message.
		    navigator.notification.alert(
			    'Erro ao Compartilhada Localização!',  // message
			    null,         // callback
			    'Minha Localização',            // title
			    'Ok'                  // buttonName
			);

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
