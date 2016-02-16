function afksprava(a){
	
	if(a.text.indexOf("@Tessi Tess") > -1){
		API.sendChat("[AFK] @"+a.username+" I am afk sorry. ^.^");
	}
}

API.on("message", afksprava);
