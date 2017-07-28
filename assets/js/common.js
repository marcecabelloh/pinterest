$(document).ready(function(){
	//función que llama a masonry, página que permite desplegar imagenes una abajo de la otra.
	$('.contenedor').masonry({
  		itemSelector: '.elemento',
	});

//llamo a mi json
	jason.forEach(function(e){
		console.log(e.title);
		var titulo = e.title;
		var description = e.description;
		for(var i=0; i < e; i++){
			var elemento = e[i];
			console.log(elemento);
			$('.elemento').append('<p class="titulo">'+i.title+'</p>');
		}
	})

/*
('https://api.dribbble.com/v1/users/wellscollins/shots?access_token=4644069fd6dfeba94b66e75c1b47e088f3444120a121ba0b481f9e7637a72ccb&callback=?', function(resp) {
      if (resp.data.length > 0) {
      console.log(resp);            
        $.each(resp.data.reverse(), function(i, val) {
        $('.project').prepend('<a href='+val.html_url+'><div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 box-project"><img class="img-responsive" src="'+val.images.normal+'"/><div class="overlay"><div class="text">'+ val.description+'</div></div><span><i class="fa fa-eye" aria-hidden="true"></i>'+val.views_count+'</span><span><i class="fa fa-comment-o" aria-hidden="true"></i>'+val.comments_count+'<i class="fa fa-heart" aria-hidden="true"></i>'+val.likes_count+'</span></div></a>')
      });
      }else{
          $('.project').append('<li>No shots.</li>');
        }
      });                       
  });*/
})