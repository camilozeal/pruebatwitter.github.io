$(document).ready(function(){
	$('#myform').on('submit', function(event){
				var text = $('#mytext').val();
				event.preventDefault();
				$('#board').append('<div class="note">' 
					+ '<div class="pin">'
					+ '</div>' 
					+ text
					+ '<a href="#"><span class="glyphicon glyphicon-thumbs-up like"> 0 </span></a>'
					+ '</div>')
				$('#mytext').val('');
				$('#mytext').focus();
			});
	$('#board').on('click', '.pin', function(event){
		event.stopPropagation();
		$(this).parent().fadeOut(900);
	})

	$('#board').on('click', '.note', function(){
		$(this).toggleClass('strike');
	});

	$('#board').on('click', '.like', function() {
		var sumas = parseInt($(this).text())+1;
        $(this).html('<span>'+' '+sumas+'</span>');

	});


		})

