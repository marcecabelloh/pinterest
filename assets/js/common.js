$(document).ready(function(){


//llamo a mi json
	jason.forEach(function(e){
		$('.elemento').append('<img class="materialboxed modal-trigger" href="#modal1" src="dist/img/'+ e.image_url +'">'+ '<br>' + '<i class="fa fa-check grey-text right" aria-hidden="true"> 6</i>'+'<i class="fa fa-thumb-tack grey-text right" aria-hidden="true"> 36,6k</i>'+'<h6 class="titulo left-align">'+ e.title+'</h6><p class= "descripcion left-align">'+ e.description+'</p><p class= "user left-align">'+ e.user + '&nbsp<span>#</span>' + e.hashtag + '</p>');	
	})

	jason.forEach(function(e){
		$('.contenido-modal').append("<h6 class='titulo left-align'>"+ e.title+"</h6>"+"<br>"+ "<img src='dist/img/"+ e.id +".jpg'>" +"<div class='row'>"+"<a href='#'><i class='fa fa-upload' aria-hidden='true'></i></a>" +"<a href='#'><i class='fa fa-check' aria-hidden='true'></i></a>"
			+"<a href='#'><i class='fa fa-ellipsis-h' aria-hidden='true'></i></a>"+"<a class='btn red right'><i class='fa fa-thumb-tack' aria-hidden='true'></i> Guardar</a>"+"</div>"+"</div>" + "<div class='row'>"+"<div class='col m6 l6 xl6'>"+"<p class='user left-align'>"+ e.user +"&nbsp<span>#</span>"+e.hashtag + "</p>"+"</div>"+"<div class='col m6 l6 xl6'>"+"<a class='btn btn-leerlo right'>Leerlo</a>"+"</div>"+"</div>"+"<p class='descripcion left-align'>"+e.description+"</p>");	
	})


 $('.modal').modal();
});