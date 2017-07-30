$(document).ready(function(){


//llamo a mi json, funcion que permite ordenar imagenes en columnas de 2, a través de jason llamo a imagen, titulo, user, hashtag y descripción, a la imagen le doy clase materialboxed para que cree el efecto de lupa y opacidad además de clases para desplegar el modal que está creado en mi html
	jason.forEach(function(e){
		$('.elemento').append('<div class= "col m2 l2 xl2">'+'<img class="materialboxed modal-trigger img-pinterest" href="#modal1" src="dist/img/'+ e.image_url +'">'+ '<br>' + '<i class="fa fa-check grey-text right" aria-hidden="true"> 6</i>'+'<i class="fa fa-thumb-tack grey-text right" aria-hidden="true"> 36,6k</i>'+'<h6 class="titulo left-align">'+ e.title+'</h6><p class= "descripcion left-align">'+ e.description+'</p><p class= "user left-align">'+ e.user + '&nbsp<span>#</span>' + e.hashtag + '</p>' +'</div>');	
	})

//función que permite desplegar modal con  imagen, titulo, descripcion, usuario y hashtag

	jason.forEach(function(e){
		$(".contenido-modal").html("");//la única manera que encontré de que no se desplegaran todas las imágenes en el modal, sin embargo solo muestra la última imagen
		$('.contenido-modal').append("<h6 class='titulo left-align'>"+ e.title+"</h6>"+"<br>"+ "<img class='img-modal' src='dist/img/"+ e.id +".jpg'>" +"<div class='row'>"+"<a href='#'><i class='fa fa-upload' aria-hidden='true'></i></a>" +"<a href='#'><i class='fa fa-check' aria-hidden='true'></i></a>"
			+"<a href='#'><i class='fa fa-ellipsis-h' aria-hidden='true'></i></a>"+"<a class='btn red right'><i class='fa fa-thumb-tack' aria-hidden='true'></i> Guardar</a>"+"</div>"+"</div>" + "<div class='row'>"+"<div class='col m6 l6 xl6'>"+"<p class='user left-align'>"+ e.user +"&nbsp<span>#</span>"+e.hashtag + "</p>"+"</div>"+"<div class='col m6 l6 xl6'>"+"<a class='btn btn-leerlo right'>Leerlo</a>"+"</div>"+"</div>"+"<p class='descripcion left-align'>"+e.description+"</p>");	


	})


 $('.modal').modal();
});