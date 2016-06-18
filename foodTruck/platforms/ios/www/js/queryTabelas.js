function queryLocalizacao(){
  Parse.initialize("4tghv6GjleCbjLsaAem8jH12IceJRr26qSAAsbka", "r3fXhrjJuCbASHszvQlmHm5A5tcdZaw98zp8znal");
  var arrayLocalizacao = [];
  var foodTruck = Parse.Object.extend("FoodTruck");
  var query = new Parse.Query(foodTruck);
  query.select("localizacao");
  query.find({
    success:function(results) {
    for (var i = 0; i < results.length; i++) {
          var object = results[i];
          arrayLocalizacao[i] = object.get("localizacao");
        }
      },
    error: function({
      console.log("Error: " + error.message);
    });
  });

  //TODO 

  /** 

  Function para pegar o arrayLocalizacao e dividir em longitude e latitude 

  */ 
}