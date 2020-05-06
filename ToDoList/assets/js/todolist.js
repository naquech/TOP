//alert("connected")

	
//strike a list item when clicked
//cannot use click() because it will not add listeners to new elements
$("ul").on(
	"click", "li", function(){
	$(this).toggleClass("strikeThrough");
});


//add text entry to list
$("input[type='text']").keypress(function(event){
	if (event.which === 13){								//check for enter key
		var newItem  = $(this).val();						//save the new string in a var
		$(this).val("");
		$("ul").append("<li><span> <i class='fa fa-trash' aria-hidden='true'></i></span> " + newItem + "</li>");			//add new string to list
	}
});


//delete list items: mouse over shows delete icon, press icon to delte item (fades out and deltes it)
$("ul").on(
	"click", "span", function(event){
		$(this).parent().fadeOut("slow", function(){				//span is inside parent <li> 
			$(this).remove();
		});										
		event.stopPropagation();
});


//show/hide input when + is clicked
$("h1 i").click(function(){
	$("input[type='text']").slideToggle("slow");
});