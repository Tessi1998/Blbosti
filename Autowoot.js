function autowoot(){
	setTimeout(
		function(){
			$("#woot").click();
		},
	2000); 
}

API.on("dj-advance", autowoot);
