API.on(API.CHAT, tessijesuper);

function tessijesuper(love){
	var msgData = love;
	if(msgData.message.indexOf("!paint") > -1){

		if(msgData.un == "Tessi Tess", "Narcis"){
			var narcisekjekrasavec = msgData.message.replace("!paint ", "");
			nakresli(narcisekjekrasavec);
		} else {
			API.sendChat("@"+msgData.un+" ty nemĹŻĹľeĹˇ malovat!");
		}
	}

}

function posliSpravu(index, timeout){
	setTimeout(function(){
		API.sendChat(window.temp_spravy[index]);
	}, timeout);
}

function nakresli(text){
	vybudujPismeno(text[0]);
	window.temp_letter = [];
	for (var h = 1; h < text.length; h++) {
		console.log("h: "+h);
		window.temp_letter.push(text[h]);
		posliPrikazNaKreslenie(h, (h*12000));
	};

}
function posliPrikazNaKreslenie(index, timeout){
	console.log("INDEX: "+index);
	setTimeout(function(){
		vybudujPismeno(window.temp_letter[index-1]);
	}, timeout);
}
function vybudujPismeno(pismeno){
	console.log("PISEMENO: "+pismeno);
	if(pismeno == "T") {
		var indexy = [];

		indexy[0] = [];
		indexy[1] = [5, 6, 7, 8, 9, 10, 11];
		indexy[2] = [8];
		indexy[3] = [8];
		indexy[4] = [8];
		indexy[5] = [8];
		indexy[6] = [8];
		indexy[7] = [8];
		indexy[8] = [8];
		indexy[9] = [8];
		indexy[10] = [];

	}

	if(pismeno == "E") {
		var indexy = [];

		indexy[0] = [];
		indexy[1] = [5, 6, 7, 8, 9, 10, 11];
		indexy[2] = [5];
		indexy[3] = [5];
		indexy[4] = [5];
		indexy[5] = [5, 6, 7, 8];
		indexy[6] = [5];
		indexy[7] = [5];
		indexy[8] = [5];
		indexy[9] = [5, 6, 7, 8, 9, 10, 11];
		indexy[10] = [];

	}

	if(pismeno == "S") {
		var indexy = [];

		indexy[0] = [];
		indexy[1] = [5, 6, 7, 8, 9, 10, 11];
		indexy[2] = [5];
		indexy[3] = [5];
		indexy[4] = [5];
		indexy[5] = [5, 6, 7, 8, 9, 10, 11];
		indexy[6] = [11];
		indexy[7] = [11];
		indexy[8] = [11];
		indexy[9] = [5, 6, 7, 8, 9, 10, 11];
		indexy[10] = [];

	}

	if(pismeno == "I") {
		var indexy = [];

		indexy[0] = [];
		indexy[1] = [8];
		indexy[2] = [];
		indexy[3] = [8];
		indexy[4] = [8];
		indexy[5] = [8];
		indexy[6] = [8];
		indexy[7] = [8];
		indexy[8] = [8];
		indexy[9] = [8];
		indexy[10] = [];

	}
	
	if(pismeno == "A") {
		var indexy = [];

		indexy[0] = [];
		indexy[1] = [7, 8, 9];
		indexy[2] = [6, 10];
		indexy[3] = [5, 11];
		indexy[4] = [5, 11];
		indexy[5] = [5, 6, 7, 8, 9, 10, 11];
		indexy[6] = [5, 11];
		indexy[7] = [5, 11];
		indexy[8] = [5, 11];
		indexy[9] = [5, 11];
		indexy[10] = [];

	}

	if(pismeno == "HEART") {
		var indexy = [];

		indexy[0] = [];
		indexy[1] = [4,5,6,10,11,12];
		indexy[2] = [3,7,9,13];
		indexy[3] = [3,8,13];
		indexy[4] = [3,8,13];				
		indexy[5] = [4,12];		
		indexy[6] = [5,11];
		indexy[7] = [6,10];
		indexy[8] = [7,9];
		indexy[9] = [8];
		indexy[10] = [];

	}
	window.temp_spravy = [];
	for (var i = 0; i < 10; i++) {

		var pozadie = Array();

		for (var e = 0; e < 17; e++) {
			pozadie.push(":yellow_heart:");
		};

		for (var ii = 0; ii < indexy[i].length; ii++) {
			pozadie[indexy[i][ii]] = ":blue_heart:";
		};

		window.temp_spravy[i] = pozadie.join("");

	};



	for (var z = 0; z < window.temp_spravy.length; z++) {
		posliSpravu(z, (z*1100));
	};

}
