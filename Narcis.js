API.off(API.CHAT, tessijesuper);
API.on(API.CHAT, tessijesuper);

function tessijesuper(love){
	var msgData = love;
	if(msgData.message.indexOf("!maluj") > -1){
		console.log(msgData.un);
		if(msgData.un == "Tessi Tess" || msgData.un == "Narcis"){
			var narcisekjekrasavec = msgData.message.replace("!maluj ", "");
			nakresli(narcisekjekrasavec);
		} else {
			API.sendChat("@"+msgData.un+" :( ");
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
	
	var indexy = [];

	if(pismeno == "A") {

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

	}

	if(pismeno == "B") {

		indexy[0] = [];
		indexy[1] = [5, 6, 7, 8, 9, 10];
		indexy[2] = [5, 11];
		indexy[3] = [5, 11];
		indexy[4] = [5, 11];
		indexy[5] = [5, 6, 7, 8, 9, 10];
		indexy[6] = [5, 11];
		indexy[7] = [5, 11];
		indexy[8] = [5, 11];
		indexy[9] = [5, 6, 7, 8, 9, 10];

	}

	if(pismeno == "C"){

		indexy[0] = [];
		indexy[1] = [7, 8, 9, 10];
		indexy[2] = [6, 11];
		indexy[3] = [5];
		indexy[4] = [5];				
		indexy[5] = [5];		
		indexy[6] = [5];
		indexy[7] = [5];
		indexy[8] = [6, 11];
		indexy[9] = [7, 8, 9, 10];
	}

	if(pismeno == "D") {

		indexy[0] = [];
		indexy[1] = [5, 6, 7, 8, 9];
		indexy[2] = [5, 10];
		indexy[3] = [5, 11];
		indexy[4] = [5, 11];
		indexy[5] = [5, 11];
		indexy[6] = [5, 11];
		indexy[7] = [5, 11];
		indexy[8] = [5, 10];
		indexy[9] = [5, 6, 7, 8, 9];

	}
	
	if(pismeno == "E") {

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

	}
	
        	if(pismeno == "F") {

		indexy[0] = [];
		indexy[1] = [5, 6, 7, 8, 9, 10, 11];
		indexy[2] = [5];
		indexy[3] = [5];
		indexy[4] = [5];
		indexy[5] = [5, 6, 7, 8];
		indexy[6] = [5];
		indexy[7] = [5];
		indexy[8] = [5];
		indexy[9] = [5];

	}
	
        	if(pismeno == "G") {

		indexy[0] = [];
		indexy[1] = [7, 8, 9, 10];
		indexy[2] = [6, 11];
		indexy[3] = [5];
		indexy[4] = [5];
		indexy[5] = [5];
		indexy[6] = [5, 9, 10, 11];
		indexy[7] = [5, 11];
		indexy[8] = [6, 11];
		indexy[9] = [7, 8, 9, 10];

	}

        if(pismeno == "H") {

		indexy[0] = [];
		indexy[1] = [5, 11];
		indexy[2] = [5, 11];
		indexy[3] = [5, 11];
		indexy[4] = [5, 11];
		indexy[5] = [5, 6, 7, 8, 9, 10, 11];
		indexy[6] = [5, 11];
		indexy[7] = [5, 11];
		indexy[8] = [5, 11];
		indexy[9] = [5, 11];

	}
	
	if(pismeno == "I") {

		indexy[0] = [];
		indexy[1] = [5, 6, 7, 8, 9, 10, 11];
		indexy[2] = [8];
		indexy[3] = [8];
		indexy[4] = [8];
		indexy[5] = [8];
		indexy[6] = [8];
		indexy[7] = [8];
		indexy[8] = [8];
		indexy[9] = [5, 6, 7, 8, 9, 10, 11];

	}
	
	if(pismeno == "L") {

		indexy[0] = [];
		indexy[1] = [5];
		indexy[2] = [5];
		indexy[3] = [5];
		indexy[4] = [5];
		indexy[5] = [5];
		indexy[6] = [5];
		indexy[7] = [5];
		indexy[8] = [5];
		indexy[9] = [5, 6, 7, 8, 9, 10, 11];

	}
	
	if(pismeno == "M"){

		indexy[0] = [];
		indexy[1] = [5, 11];
		indexy[2] = [5, 6, 10, 11];
		indexy[3] = [5, 7, 9, 11];
		indexy[4] = [5, 8, 11];				
		indexy[5] = [5, 11];		
		indexy[6] = [5, 11];
		indexy[7] = [5, 11];
		indexy[8] = [5, 11];
	}

	if(pismeno == "N"){

		indexy[0] = [];
		indexy[1] = [5, 11];
		indexy[2] = [5, 6, 11];
		indexy[3] = [5, 7, 11];
		indexy[4] = [5, 8, 11];				
		indexy[5] = [5, 9, 11];		
		indexy[6] = [5, 10, 11];
		indexy[7] = [5, 11];
	}

	if(pismeno == "P"){

		indexy[0] = [];
		indexy[1] = [5, 6, 7, 8, 9];
		indexy[2] = [5, 10];
		indexy[3] = [5, 11];
		indexy[4] = [5, 11];
		indexy[5] = [5, 10];
		indexy[6] = [5, 6, 7, 8, 9];
		indexy[7] = [5];
		indexy[8] = [5];
		indexy[9] = [5];
	
	}
	
	if(pismeno == "R"){

		indexy[0] = [];
		indexy[1] = [5, 6, 7, 8, 9];
		indexy[2] = [5, 10];
		indexy[3] = [5, 11];
		indexy[4] = [5, 11];
		indexy[5] = [5, 10];
		indexy[6] = [5, 6, 7, 8, 9];
		indexy[7] = [5, 9];
		indexy[8] = [5, 10];
		indexy[9] = [5, 11];
	
	}
	
	if(pismeno == "S") {

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

	}
	
	if(pismeno == "T") {

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

	}

	if(pismeno == "HEART") {

		indexy[0] = [];
		indexy[1] = [4, 5, 6, 10, 11, 12];
		indexy[2] = [3, 7, 9, 13];
		indexy[3] = [3, 8, 13];
		indexy[4] = [3, 8, 13];				
		indexy[5] = [4, 12];		
		indexy[6] = [5, 11];
		indexy[7] = [6, 10];
		indexy[8] = [7, 9];
		indexy[9] = [8];

	}

	if(pismeno == "I_LOVE_TESS") {

		indexy[0] = [];
		indexy[1] = [1, 2, 3, 7, 9];
		indexy[2] = [2, 8, 6, 10];
		indexy[3] = [2, 6, 10];
		indexy[4] = [1, 2, 3, 7, 9];				
		indexy[5] = [8];
		indexy[6] = [];
		indexy[7] = [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15];
		indexy[8] = [2, 5, 9, 13];
		indexy[9] = [2, 5, 6, 9, 10, 11, 13, 14, 15];
		indexy[10] = [2, 5, 11, 15];
		indexy[11] = [2, 5, 6, 7, 9, 10, 11, 13, 14, 15];
		indexy[12] = [];

	}
	window.temp_spravy = [];

	for (var i = 0; i < indexy.length; i++) {

		var pozadie = Array();

		for (var e = 0; e < 17; e++) {
			pozadie.push(" :black_circle:");
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
