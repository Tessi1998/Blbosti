API.off(API.CHAT, tessijesuper);
API.on(API.CHAT, tessijesuper);

function tessijesuper(love){
	var msgData = love;
	if(msgData.message.indexOf("!paint") > -1){
		console.log(msgData.un);
		if(msgData.un == "Tessi Tess" || msgData.un == "Narcis"){
			var narcisekjekrasavec = msgData.message.replace("!paint ", "");
			nakresli(narcisekjekrasavec.toUpperCase());
		} else {
			API.sendChat("@"+msgData.un+" Toto je soukromé. Ty malovat nemůžeš. :P ");
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

	if(text.indexOf("special:") > -1){
		vybudujPismeno(text.replace("special:", ""));
	} else {

		for (var h = 1; h < text.length; h++) {
			window.temp_letter.push(text[h]);
			posliPrikazNaKreslenie(h, (h*4500));
		};

	}

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
		indexy[1] = [8];
		indexy[2] = [7,9];
		indexy[3] = [6,10];
		indexy[4] = [6,7,8,9,10];
		indexy[5] = [6,10];
		indexy[6] = [6,10];
		indexy[7] = [6,10];

	}

	if(pismeno == "B") {

		indexy[0] = [];
		indexy[1] = [6,7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [6,7,8,9];
		indexy[5] = [6,10];
		indexy[6] = [6,10];
		indexy[7] = [6,7,8,9];

	}

	if(pismeno == "C"){

		indexy[0] = [];
		indexy[1] = [7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [6];
		indexy[4] = [6];				
		indexy[5] = [6];		
		indexy[6] = [6,10];
		indexy[7] = [7,8,9];
	}

	if(pismeno == "D") {

		indexy[0] = [];
		indexy[1] = [6,7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [6,10];
		indexy[5] = [6,10];
		indexy[6] = [6,10];
		indexy[7] = [6,7,8,9];

	}
	
	if(pismeno == "E") {

		indexy[0] = [];
		indexy[1] = [6,6,7,8,9,10];
		indexy[2] = [6];
		indexy[3] = [6];
		indexy[4] = [6,7,8];
		indexy[5] = [6];
		indexy[6] = [6];
		indexy[7] = [6,7,8,9,10];

	}
	
        	if(pismeno == "F") {

		indexy[0] = [];
		indexy[1] = [6,7,8,9,10];
		indexy[2] = [6];
		indexy[3] = [6];
		indexy[4] = [6,7,8];
		indexy[5] = [6];
		indexy[6] = [6];
		indexy[7] = [6];

	}
	
        	if(pismeno == "G") {

		indexy[0] = [];
		indexy[1] = [7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [6];
		indexy[4] = [6];
		indexy[5] = [6,9,10];
		indexy[6] = [6,10];
		indexy[7] = [7,8,9];

	}
	
        	if(pismeno == "H") {

		indexy[0] = [];
		indexy[1] = [6,10];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [6,7,8,9,10];
		indexy[5] = [6,10];
		indexy[6] = [6,10];
		indexy[7] = [6,10];

	}
	
	        if(pismeno == "I") {

		indexy[0] = [];
		indexy[1] = [6,7,8,9,10];
		indexy[2] = [8];
		indexy[3] = [8];
		indexy[4] = [8];
		indexy[5] = [8];
		indexy[6] = [8];
		indexy[7] = [6,7,8,9,10];

	}
        
        if(pismeno == "J") {

		indexy[0] = [];
		indexy[1] = [6,7,8,9,10];
		indexy[2] = [10];
		indexy[3] = [10];
		indexy[4] = [10];
		indexy[5] = [10];
		indexy[6] = [6,10];
		indexy[7] = [7,8,9];

	}
        
        if(pismeno == "K") {

		indexy[0] = [];
		indexy[1] = [6,10];
		indexy[2] = [6,9];
		indexy[3] = [6,8];
		indexy[4] = [6,7];
		indexy[5] = [6,8];
		indexy[6] = [6,9];
		indexy[7] = [6,10];

	}
        
        if(pismeno == "L") {

		indexy[0] = [];
		indexy[1] = [6];
		indexy[2] = [6];
		indexy[3] = [6];
		indexy[4] = [6];
		indexy[5] = [6];
		indexy[6] = [6];
		indexy[7] = [6,7,8,9,10];

	}
	
	if(pismeno == "M"){

		indexy[0] = [];
		indexy[1] = [6,10];
		indexy[2] = [6,7,9,10];
		indexy[3] = [6,8,10];
		indexy[4] = [6,10];				
		indexy[5] = [6,10];		
		indexy[6] = [6,10];
		indexy[7] = [6,10];
	}
	
	if(pismeno == "N"){

		indexy[0] = [];
		indexy[1] = [6,10];
		indexy[2] = [6,10];
		indexy[3] = [6,7,10];
		indexy[4] = [6,8,10];				
		indexy[5] = [6,9,10];		
		indexy[6] = [6,10];
		indexy[7] = [6,10];
	}
	
	if(pismeno == "O"){

		indexy[0] = [];
		indexy[1] = [7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [6,10];
		indexy[5] = [6,10];
		indexy[6] = [6,10];
		indexy[7] = [7,8,9];
	}
	
	if(pismeno == "P"){

		indexy[0] = [];
		indexy[1] = [6,7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [6,7,8,9];
		indexy[5] = [6];
		indexy[6] = [6];
		indexy[7] = [6];
	}
	
	if(pismeno == "Q"){

		indexy[0] = [];
		indexy[1] = [7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [6,10];
		indexy[5] = [6,8,10];
		indexy[6] = [6,9,10];
		indexy[7] = [7,8,9,10];
	}
	
	if(pismeno == "R"){

		indexy[0] = [];
		indexy[1] = [6,7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [6,7,8,9];
		indexy[5] = [6,8];
		indexy[6] = [6,9];
		indexy[7] = [6,10];
	}
	
	if(pismeno == "S") {

		indexy[0] = [];
		indexy[1] = [7,8,9,10];
		indexy[2] = [6];
		indexy[3] = [6];
		indexy[4] = [7,8,9];
		indexy[5] = [10];
		indexy[6] = [10];
		indexy[7] = [6,7,8,9,];

	}
	
	if(pismeno == "T") {

		indexy[0] = [];
		indexy[1] = [6,6,7,8,9,10];
		indexy[2] = [8];
		indexy[3] = [8];
		indexy[4] = [8];
		indexy[5] = [8];
		indexy[6] = [8];
		indexy[7] = [8];

	}

	if(pismeno == "U") {

		indexy[0] = [];
		indexy[1] = [6,10];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [6,10];
		indexy[5] = [6,10];
		indexy[6] = [6,10];
		indexy[7] = [7,8,9];

	}
	
	if(pismeno == "V") {

		indexy[0] = [];
		indexy[1] = [6,10];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [6,10];
		indexy[5] = [6,10];
		indexy[6] = [7,9];
		indexy[7] = [8];

	}
	
	if(pismeno == "W") {

		indexy[0] = [];
		indexy[1] = [6,10];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [6,10];
		indexy[5] = [6,10];
		indexy[6] = [6,8,10];
		indexy[7] = [7,9];

	}
	
	if(pismeno == "X") {

		indexy[0] = [];
		indexy[1] = [6,10];
		indexy[2] = [6,10];
		indexy[3] = [7,9];
		indexy[4] = [8];
		indexy[5] = [7,9];
		indexy[6] = [6,10];
		indexy[7] = [6,10];

	}
	
	if(pismeno == "Y") {

		indexy[0] = [];
		indexy[1] = [6,10];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [7,8,9];
		indexy[5] = [8];
		indexy[6] = [8];
		indexy[7] = [8];

	}
	
	if(pismeno == "Z") {

		indexy[0] = [];
		indexy[1] = [6,7,8,9,10];
		indexy[2] = [10];
		indexy[3] = [9];
		indexy[4] = [8];
		indexy[5] = [7];
		indexy[6] = [6];
		indexy[7] = [6,7,8,9,10];

	}
	
	if(pismeno == "1") {

		indexy[0] = [];
		indexy[1] = [8];
		indexy[2] = [7,8];
		indexy[3] = [6,8];
		indexy[4] = [8];
		indexy[5] = [8];
		indexy[6] = [8];
		indexy[7] = [6,7,8,9,10];

	}
	
	if(pismeno == "2") {

		indexy[0] = [];
		indexy[1] = [7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [10];
		indexy[4] = [9];
		indexy[5] = [8];
		indexy[6] = [7];
		indexy[7] = [6,7,8,9,10];

	}
	
	if(pismeno == "3") {

		indexy[0] = [];
		indexy[1] = [7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [10];
		indexy[4] = [8,9];
		indexy[5] = [10];
		indexy[6] = [6,10];
		indexy[7] = [7,8,9];

	}
	
	if(pismeno == "4") {

		indexy[0] = [];
		indexy[1] = [9];
		indexy[2] = [8,9];
		indexy[3] = [7,9];
		indexy[4] = [6,9];
		indexy[5] = [6,7,8,9,10];
		indexy[6] = [9];
		indexy[7] = [9];

	}
	
	if(pismeno == "5") {

		indexy[0] = [];
		indexy[1] = [6,7,8,9,10];
		indexy[2] = [6];
		indexy[3] = [6];
		indexy[4] = [6,7,8,9];
		indexy[5] = [10];
		indexy[6] = [6,10];
		indexy[7] = [7,8,9];

	}
	
	if(pismeno == "6") {

		indexy[0] = [];
		indexy[1] = [7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [6];
		indexy[4] = [6,7,8,9];
		indexy[5] = [6,10];
		indexy[6] = [6,10];
		indexy[7] = [7,8,9];

	}
	
	if(pismeno == "7") {

		indexy[0] = [];
		indexy[1] = [6,7,8,9,10];
		indexy[2] = [10];
		indexy[3] = [9];
		indexy[4] = [8];
		indexy[5] = [7];
		indexy[6] = [7];
		indexy[7] = [7];

	}
	
	if(pismeno == "8") {

		indexy[0] = [];
		indexy[1] = [7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [7,8,9];
		indexy[5] = [6,10];
		indexy[6] = [6,10];
		indexy[7] = [7,8,9];

	}
	
	if(pismeno == "9") {

		indexy[0] = [];
		indexy[1] = [7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [7,8,9,10];
		indexy[5] = [10];
		indexy[6] = [6,10];
		indexy[7] = [7,8,9];

	}
	
	if(pismeno == "0") {

		indexy[0] = [];
		indexy[1] = [7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [6,7,10];
		indexy[4] = [6,8,10];
		indexy[5] = [6,9,10];
		indexy[6] = [6,10];
		indexy[7] = [7,8,9];

	}
	
	if(pismeno == "!") {

		indexy[0] = [];
		indexy[1] = [6,7,8,9,10];
		indexy[2] = [6,10];
		indexy[3] = [7,9];
		indexy[4] = [7,9];
		indexy[5] = [8];
		indexy[6] = [];
		indexy[7] = [8];

	}
	
	if(pismeno == "?") {

		indexy[0] = [];
		indexy[1] = [7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [10];
		indexy[4] = [9];
		indexy[5] = [8];
		indexy[6] = [];
		indexy[7] = [8];

	}
	
	if(pismeno == ".") {

		indexy[0] = [];

	}
	
	if(pismeno == "hi") {

		indexy[0] = [];
		indexy[1] = [1,2,6,7,10,11,12,13,14,15];
		indexy[2] = [1,2,6,7,10,11,12,13,14,15];
		indexy[3] = [1,2,6,7,12,13];
		indexy[4] = [1,2,3,4,5,6,7,12,13];
		indexy[5] = [1,2,3,4,5,6,7,12,13];
		indexy[6] = [1,2,6,7,12,13];
		indexy[7] = [1,2,6,7,12,13];
		indexy[8] = [1,2,6,7,10,11,12,13,14,15];
		indexy[9] = [1,2,6,7,10,11,12,13,14,15];
		indexy[10] = [];

	}
	
	if(pismeno == "heart") {

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

	if(pismeno == "i_love_tess") {

		indexy[0] = [];
		indexy[1] = [1,2,3,7,9];
		indexy[2] = [2,8,6,10];
		indexy[3] = [2,6,10];
		indexy[4] = [1,2,3,7,9];				
		indexy[5] = [8];
		indexy[6] = [];
		indexy[7] = [1,2,3,5,6,7,9,10,11,13,14,15];
		indexy[8] = [2,5,9,13];
		indexy[9] = [2,5,6,9,10,11,13,14,15];
		indexy[10] = [2,5,11,15];
		indexy[11] = [2,5,6,7,9,10,11,13,14,15];
		indexy[12] = [];

	}
	window.temp_spravy = [];

	for (var i = 0; i < indexy.length; i++) {

		var pozadie = Array();

		for (var e = 0; e < 17; e++) {
			pozadie.push(":black_circle:");
		};

		for (var ii = 0; ii < indexy[i].length; ii++) {
			pozadie[indexy[i][ii]] = ":blue_heart:";
		};

		window.temp_spravy[i] = pozadie.join("");

	};



	for (var z = 0; z < window.temp_spravy.length; z++) {
		posliSpravu(z, (z*500));
	};

}
