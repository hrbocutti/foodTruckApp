function recuperarLoginSenha(){

	Parse.initialize("4tghv6GjleCbjLsaAem8jH12IceJRr26qSAAsbka", "r3fXhrjJuCbASHszvQlmHm5A5tcdZaw98zp8znal");

	var email = $("#email").val();

	var autEmail = Parse.Object.extend("usuario");
    var query = new Parse.Query(autEmail);
    query.equalTo("email", email);
    
    query.find({
    	success:function(results){
    		if(results.length > 0 ){
	    		for(var i = 0; i < results.length; i++){
	    			var object = results[i];
	    			var emailValido = object.get("email");
	    			if(emailValido != null){
	    				var senhaCrypt = object.get("password");
		            	var decrypted  = CryptoJS.Rabbit.decrypt(senhaCrypt, "appFoodTruck");
		            	var usuario    = object.get("user"); 
		            	data = {'email':emailValido, 'senha': decrypted.toString(CryptoJS.enc.Utf8), 'user': usuario};
		            	enviarEmail(data);
		            	$("#email").val("");
		            	navigator.notification.alert(
								    'Foi enviado um email para sua caixa de entrada !',  // message
								    voltarTelaInicial,         // callback
								    'Recuperar Login/Senha',            // title
								    'Ok'                  // buttonName
								    );
		        	}
	    		}
	    	}else{
	    		$("#email").val("");
	    		alert("O e-mail informado não foi encontrado em nossa base, favor verificar !");
	    	}
    	}
    });
	
}

function enviarEmail(){
	$.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'Zp6wHI02RAcrckONJov7MQ',
      'message': {
        'from_email': 'teste@apliance.bugs3.com',
        'to': [
          {
            'email': data.email,
            'name': data.user,
            'type': 'to'
          }
        ],
        'subject': 'Recuperar Senha',
        'html': '<h1> </h1> <p>Este e-mail &eacute; em resposta ao seu pedido recente para recuperar uma senha esquecida. Recursos de seguran&ccedil;a de senha est&atilde;o no local para garantir a seguran&ccedil;a das suas informa&ccedil;&otilde;es de perfil. Caso n&atilde;o tenha feito essa solicita&ccedil;&atilde;o favor desconsiderar este e-mail.<br /> <br /> Login: '+ data.user+' <br /> Password: '+ data.senha +' <br />	&nbsp;</p>'
      }
    }
  });
}