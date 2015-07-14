API.off(API.CHAT, tessijesuper);

API.on(API.CHAT, tessijesuper);

function tessijesuper(love){
	var msgData = love;
	if(msgData.message.indexOf("!paint") > -1){

		if(msgData.un == "MRFALSE" || msgData.un == "Narcis"){
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

	if(text.indexOf("--") > -1){
		vybudujPismeno(text.replace("--", ""));
	} else {

		for (var h = 1; h < text.length; h++) {
			window.temp_letter.push(text[h]);
			posliPrikazNaKreslenie(h, (h*12500));
		};

	}

}
function posliPrikazNaKreslenie(index, timeout){

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
	
	if(pismeno == "M") {

		indexy[0] = [];
		indexy[1] = [6,10];
		indexy[2] = [6,7,9,10];
		indexy[3] = [6,8,10];
		indexy[4] = [6,10];				
		indexy[5] = [6,10];		
		indexy[6] = [6,10];
		indexy[7] = [6,10];
	}
	
	if(pismeno == "N") {

		indexy[0] = [];
		indexy[1] = [6,10];
		indexy[2] = [6,10];
		indexy[3] = [6,7,10];
		indexy[4] = [6,8,10];				
		indexy[5] = [6,9,10];		
		indexy[6] = [6,10];
		indexy[7] = [6,10];
	}
	
	if(pismeno == "O") {

		indexy[0] = [];
		indexy[1] = [7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [6,10];
		indexy[5] = [6,10];
		indexy[6] = [6,10];
		indexy[7] = [7,8,9];
	}
	
	if(pismeno == "P") {

		indexy[0] = [];
		indexy[1] = [6,7,8,9];
		indexy[2] = [6,10];
		indexy[3] = [6,10];
		indexy[4] = [6,7,8,9];
		indexy[5] = [6];
		indexy[6] = [6];
		indexy[7] = [6];
	}
	
	if(pismeno == "Q") {

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
		indexy[1] = [6,7,8,9,10];
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

	if(pismeno == "HI") {
		
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
	
	if(pismeno == "HEART") {

		indexy[0] = [];
		indexy[1] = ["4", "5", "6", "10", "11", "12"];
		indexy[2] = ["3", "4-red", "5-red", "6-red", "7", "9", "10-red", "11-red", "12-red", "13"];
		indexy[3] = ["3", "4-red", "5-red", "6-red", "7-red", "8", "9-red", "10-red", "11-red", "12-red", "13"];
		indexy[4] = ["3", "4-red", "5-red", "6-red", "7-red", "8", "9-red", "10-red", "11-red", "12-red", "13"];				
		indexy[5] = ["4", "5-red", "6-red", "7-red", "8-red", "9-red", "10-red", "11-red", "12"];		
		indexy[6] = ["5", "6-red", "7-red", "8-red", "9-red", "10-red", "11"];
		indexy[7] = ["6", "7-red", "8-red", "9-red", "10"];
		indexy[8] = ["7", "8-red", "9"];
		indexy[9] = ["8"];
		indexy[10] = [];

	}

	if(pismeno == "TESS") {

		indexy[0] = [];
		indexy[1] = ["1", "2", "3", "7", "9"];
		indexy[2] = ["2", "8", "6", "7-red", "9-red", "10"];
		indexy[3] = ["2", "6", "10", "7-red", "8-red", "9-red"];
		indexy[4] = ["1", "2", "3", "7", "9", "8-red"];				
		indexy[5] = ["8"];
		indexy[6] = [];
		indexy[7] = ["1", "2", "3", "5", "6", "7", "9", "10", "11", "13", "14", "15"];
		indexy[8] = ["2", "5", "9", "13"];
		indexy[9] = ["2", "5", "6", "9", "10", "11", "13", "14", "15"];
		indexy[10] = ["2", "5", "11", "15"];
		indexy[11] = ["2", "5", "6", "7", "9", "10", "11", "13", "14", "15"];
		indexy[12] = [];

	}

	if(pismeno == "SLOVAKIA") {
		
		indexy[0] = []
		indexy[1] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6", "7", "8", "9", "10", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[2] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6", "7", "8", "9", "10", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[3] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6", "7", "8", "9", "10", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[4] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6", "7", "8", "9", "10", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[5] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6", "7", "8", "9", "10", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[6] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6", "7", "8", "9", "10", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[7] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6", "7", "8", "9", "10", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[8] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6", "7", "8", "9", "10", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[9] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6", "7", "8", "9", "10", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[10] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[11] = ["1-white", "2-white", "3-red", "4-red", "5-red", "6-red", "7-red", "8-red", "9-red", "10-red", "11-white", "12-red", "13-red", "14-red", "15-red"];
		indexy[12] = ["1-white", "2-white", "3-red", "4-red", "5-red", "6-white", "7-red", "8-white", "9-white", "10-red", "11", "12-white", "13-red", "14-red", "15-red"];
		indexy[13] = ["1-white", "2-white", "3-red", "4-red", "5-red", "6-white", "7-red", "8-white", "9-white", "10-red", "11", "12", "13-white", "14-red", "15-red"];
		indexy[14] = ["1-white", "2-white", "3-red", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white", "12", "13", "14-white", "15-red"];
		indexy[15] = ["1-white", "2-white", "3-red", "4-red", "5-red", "6-white", "7-red", "8-white", "9-white", "10-red", "11", "12", "13-white", "14-red", "15-red"];
		indexy[16] = ["1-white", "2-white", "3-red", "4-red", "5-red", "6-white", "7-red", "8-white", "9-white", "10-red", "11", "12-white", "13-red", "14-red", "15-red"];
		indexy[17] = ["1-white", "2-white", "3-red", "4-red", "5-red", "6-red", "7-red", "8-red", "9-red", "10-red", "11-white", "12-red", "13-red", "14-red", "15-red"];
		indexy[18] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[19] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6", "7", "8", "9", "10", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[20] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6", "7", "8", "9", "10", "11-red", "12-red", "13-red", "14-red", "15-red"];
	        indexy[21] = []
	
		
	}

        if(pismeno == "NARCIS") {

		indexy[0] = [];
		indexy[1] = ["1", "2", "3", "7", "9"];
		indexy[2] = ["2", "8", "6", "7-red", "9-red", "10"];
		indexy[3] = ["2", "6", "10", "7-red", "8-red", "9-red"];
		indexy[4] = ["2", "7", "9", "8-red"];				
		indexy[5] = ["1", "2", "3", "8"];
		indexy[6] = [];
		indexy[7] = ["1", "4", "7", "10", "11", "14-red", "15-red"];
		indexy[8] = ["1", "4", "6", "8", "10", "12", "14-red", "15-red"];
		indexy[9] = ["1", "2", "4", "6", "7", "8", "10", "11", "14-red", "15-red"];
		indexy[10] = ["1", "3", "4", "6", "8", "10", "12", "14-red", "15-red"];
		indexy[11] = ["1", "4", "6", "8", "10", "12", "14-red", "15-red"];
		indexy[12] = ["14-red", "15-red"];
		indexy[13] = ["2", "3", "6", "7", "8", "11", "12", "14-red", "15-red"];
		indexy[14] = ["1", "4", "7", "10"];
		indexy[15] = ["1", "7", "11"];
		indexy[16] = ["1", "4", "7", "12", "14-red", "15-red"];
		indexy[17] = ["2", "3", "6", "7", "8", "10", "11", "14-red", "15-red"];
		indexy[18] = [];

	}

        if(pismeno == "CZECH") {
        	
		indexy[0] = []
		indexy[1] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
		indexy[2] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
		indexy[3] = ["1-white", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "15-red"];
		indexy[4] = ["1-white", "2-white", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14-red", "15-red"];
		indexy[5] = ["1-white", "2-white", "3-white", "5", "6", "7", "8", "9", "10", "11", "13-red", "14-red", "15-red"];
		indexy[6] = ["1-white", "2-white", "3-white", "4-white","6", "7", "8", "9", "10", "12-red", "13-red", "14-red", "15-red"];
		indexy[7] = ["1-white", "2-white", "3-white", "4-white", "5-white", "7", "8", "9", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[8] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "8", "10-red", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[9] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-red", "10-red", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[10] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-red", "10-red", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[11] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-red", "10-red", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[12] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-red", "10-red", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[13] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-red", "10-red", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[14] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-red", "10-red", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[15] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-red", "10-red", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[16] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-red", "10-red", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[17] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-red", "10-red", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[18] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-red", "10-red", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[19] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-red", "10-red", "11-red", "12-red", "13-red", "14-red", "15-red"];
		indexy[20] = ["1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-red", "10-red", "11-red", "12-red", "13-red", "14-red", "15-red"];
	        indexy[21] = []
	
	}

        if(pismeno == "FLOVER") {

		indexy[0] = [];
		indexy[1] = ["2-white", "3-white", "4-white", "5-white", "6-white", "10-white", "11-white", "12-white", "13-white", "14-white"];
		indexy[2] = ["2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white"];
		indexy[3] = ["2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white"];
		indexy[4] = ["2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white"];				
		indexy[5] = ["2-white", "3-white", "4-white", "5-white", "6-white", "7-yellow", "8-yellow", "9-yellow", "10-white", "11-white", "12-white", "13-white", "14-white"];
		indexy[6] = ["3-white", "4-white", "5-white", "6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow", "11-white", "12-white", "13-white"];
		indexy[7] = ["5-white", "6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow", "11-white"];
		indexy[8] = ["3-white", "4-white", "5-white", "6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow", "11-white", "12-white", "13-white"];
		indexy[9] = ["2-white", "3-white", "4-white", "5-white", "6-white", "7-yellow", "8-yellow", "9-yellow", "10-white", "11-white", "12-white", "13-white", "14-white"];
		indexy[10] = ["2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white"];
		indexy[11] = ["2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white"];
		indexy[12] = ["2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white"];
		indexy[13] = ["2-white", "3-white", "4-white", "5-white", "6-white", "10-white", "11-white", "12-white", "13-white", "14-white"];
		indexy[14] = [];


	}
	
	if(pismeno == "WOOT") {
		
		indexy[0] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white"];
		indexy[1] = ["0-white", "16-white"];
		indexy[2] = ["0-white", "8-green", "16-white"];
		indexy[3] = ["0-white", "7-green", "8-green", "9-green", "16-white"];
		indexy[4] = ["0-white", "6-green", "7-green", "8-green", "9-green", "10-green", "16-white"];
		indexy[5] = ["0-white", "7-green", "8-green", "9-green", "16-white"];
		indexy[6] = ["0-white", "7-green", "8-green", "9-green", "16-white"];
		indexy[7] = ["0-white", "7-green", "8-green", "9-green", "16-white"];
		indexy[8] = ["0-white", "16-white"];
		indexy[9] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white"];
		indexy[10] = ["0-green", "1-white", "2-white", "3-white", "4-green", "5-white", "6-green", "7-green", "8-green", "9-white", "10-green", "11-green", "12-green", "13-white", "14-green", "15-green", "16-green"];
		indexy[11] = ["0-green", "1-white", "2-green", "3-white", "4-green", "5-white", "6-green", "7-white", "8-green", "9-white", "10-green", "11-white", "12-green", "13-white", "14-white", "15-green", "16-white"];
		indexy[12] = ["0-green", "1-green", "2-green", "3-green", "4-green", "5-white", "6-green", "7-green","8-green", "9-white", "10-green", "11-green", "12-green", "13-white", "14-white", "15-green", "16-white"];
		indexy[13] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white"];

	}

        if(pismeno == "PLUG") {
        	
		indexy[0] = [];
		indexy[1] = ["5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white"];
		indexy[2] = ["4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white", "12-white"];
		indexy[3] = ["3-white", "4-white", "5-white", "11-white", "12-white", "13-white"];
		indexy[4] = ["2-white", "3-white", "4-white", "12-white", "13-white", "14-white"];				
		indexy[5] = ["2-white", "3-white", "13-white", "14-white"];
		indexy[6] = ["2-white", "3-white", "13-white", "14-white"];
		indexy[7] = ["2-white", "3-white", "13-white", "14-white"];
		indexy[8] = ["2-white", "3-white", "5", "6", "10", "11", "13-white", "14-white"];
		indexy[9] = ["2-white", "3-white", "5", "6", "10", "11", "13-white", "14-white"];
		indexy[10] = ["2-white", "3-white", "5", "6", "10", "11", "13-white", "14-white"];
		indexy[11] = ["5", "6", "10", "11"];
		indexy[12] = ["5", "6", "10", "11"];
		indexy[13] = [];

	}

        if(pismeno == "MEH") {
		
		indexy[0] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white"];
		indexy[1] = ["0-white", "16-white"];
		indexy[2] = ["0-white", "7-red", "8-red", "9-red", "16-white"];
		indexy[3] = ["0-white", "7-red", "8-red", "9-red", "16-white"];
		indexy[4] = ["0-white", "7-red", "8-red", "9-red", "16-white"];
		indexy[5] = ["0-white", "6-red", "7-red", "8-red", "9-red", "10-red", "16-white"];
		indexy[6] = ["0-white", "7-red", "8-red", "9-red", "16-white"];
		indexy[7] = ["0-white", "8-red", "16-white"];
		indexy[8] = ["0-white", "16-white"];
		indexy[9] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white"];
		indexy[10] = ["0-white", "1-red", "5-red", "7-red", "8-red", "9-red", "10-red","12-red", "15-red", "16-white"];
		indexy[11] = ["0-white", "1-red", "2-red", "4-red", "5-red", "7-red", "12-red", "15-red", "16-white"];
		indexy[12] = ["0-white", "1-red", "3-red", "5-red", "7-red", "8-red", "9-red", "12-red", "13-red", "14-red", "15-red", "16-white"];
		indexy[13] = ["0-white", "1-red", "5-red", "7-red", "12-red", "15-red", "16-white"]
		indexy[14] = ["0-white", "1-red", "5-red", "7-red", "8-red", "9-red", "10-red", "12-red", "15-red", "16-white"]
		indexy[15] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white"];

	}

        if(pismeno == "SUN") {
		
		indexy[0] = [];
		indexy[1] = ["8-yellow"];
		indexy[2] = ["8-yellow"];
		indexy[3] = ["3-yellow", "8-yellow", "13-yellow"];
		indexy[4] = ["4-yellow", "8-yellow", "12-yellow"];
		indexy[5] = ["5-yellow", "7-yellow", "8-yellow", "9-yellow", "11-yellow"];
		indexy[6] = ["6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow"];
		indexy[7] = ["5-yellow", "6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow", "11-yellow"];
		indexy[8] = ["1-yellow", "2-yellow", "3-yellow", "4-yellow", "5-yellow", "6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow", "11-yellow", "12-yellow", "13-yellow", "14-yellow", "15-yellow"];
		indexy[9] = ["5-yellow", "6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow", "11-yellow"];
		indexy[10] = ["6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow"];
		indexy[11] = ["5-yellow", "7-yellow", "8-yellow", "9-yellow", "11-yellow"];
		indexy[12] = ["4-yellow", "8-yellow", "12-yellow"];
		indexy[13] = ["3-yellow", "8-yellow", "13-yellow"];
		indexy[14] = ["8-yellow"];
		indexy[15] = ["8-yellow"];
		indexy[16] = [];

	}

   if(pismeno == "LOVE") {
		
	indexy[0] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white"];
	indexy[1] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-red", "8-red", "9-red", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white"];
	indexy[2] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-red", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white"];
	indexy[3] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-red", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white"];
	indexy[4] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-red", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white"];
	indexy[5] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-red", "8-red", "9-red", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white"];
	indexy[6] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white"];
	indexy[7] = ["0-white", "1-red", "2-white", "3-white", "4-white", "5-white", "6-red", "7-white", "8-white", "9-red", "10-white", "11-red", "12-white", "13-red", "14-red", "15-red", "16-white"];
	indexy[8] = ["0-white", "1-red", "2-white", "3-white", "4-white", "5-red", "6-white", "7-red", "8-white", "9-red", "10-white", "11-red", "12-white", "13-red", "14-white", "15-white", "16-white"];
	indexy[9] = ["0-white", "1-red", "2-white", "3-white", "4-white", "5-red", "6-white", "7-red", "8-white", "9-red", "10-white", "11-red", "12-white", "13-red", "14-red", "15-white", "16-white"];
	indexy[10] = ["0-white", "1-red", "2-white", "3-white", "4-white", "5-red", "6-white", "7-red", "8-white", "9-red", "10-white", "11-red", "12-white", "13-red", "14-white", "15-white", "16-white"];
	indexy[11] = ["0-white", "1-red", "2-red", "3-red", "4-white", "5-white", "6-red", "7-white", "8-white", "9-white", "10-red", "11-white", "12-white", "13-red", "14-red", "15-red", "16-white"];
	indexy[12] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white"];
	indexy[13] = ["0-white", "1-white", "2-white", "3-red", "4-white", "5-red", "6-white", "7-white", "8-red", "9-white", "10-white", "11-red", "12-white", "13-red", "14-white", "15-white", "16-white"];
	indexy[14] = ["0-white", "1-white", "2-white", "3-red", "4-white", "5-red", "6-white", "7-red", "8-white", "9-red", "10-white", "11-red", "12-white", "13-red", "14-white", "15-white", "16-white"];
	indexy[15] = ["0-white", "1-white", "2-white", "3-red", "4-red", "5-red", "6-white", "7-red", "8-white", "9-red", "10-white", "11-red", "12-white", "13-red", "14-white", "15-white", "16-white"];
	indexy[16] = ["0-white", "1-white", "2-white", "3-white", "4-red", "5-white", "6-white", "7-red", "8-white", "9-red", "10-white", "11-red", "12-white", "13-red", "14-white", "15-white", "16-white"];
	indexy[17] = ["0-white", "1-white", "2-white", "3-white", "4-red", "5-white", "6-white", "7-white", "8-red", "9-white", "10-white", "11-red", "12-red", "13-red", "14-white", "15-white", "16-white", ];
	indexy[18] = ["0-white", "1-white", "2-white", "3-white", "4-white", "5-white", "6-white", "7-white", "8-white", "9-white", "10-white", "11-white", "12-white", "13-white", "14-white", "15-white", "16-white" ];	

	}

   if(pismeno == "LOL"){
		
	indexy[0] = [];
	indexy[1] = ["2", "8", "12"];
	indexy[2] = ["2", "7", "9", "12"];
	indexy[3] = ["2", "7", "9", "12"];
	indexy[4] = ["2", "7", "9", "12"];
	indexy[5] = ["2", "3", "4", "8", "12", "13", "14"];
	indexy[6] = [];

	}

    if(pismeno == "MOON"){
		
	indexy[0] = [];
        indexy[1] = [];
        indexy[2] = ["6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow", "11-yellow"];
        indexy[3] = ["5-yellow", "6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow", "11-yellow", "12-yellow"];
        indexy[4] = ["4-yellow", "5-yellow", "6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow", "11-yellow", "12-yellow", "13-yellow"];
        indexy[5] = ["3-yellow", "4-yellow", "5-yellow", "6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow", "14-yellow"];
        indexy[6] = ["2-yellow", "3-yellow", "4-yellow", "5-yellow", "6-yellow", "7-yellow", "8-yellow", "9-yellow"];
        indexy[7] = ["2-yellow", "3-yellow", "4-yellow", "5-yellow", "6-yellow", "7-yellow", "8-yellow"];
        indexy[8] = ["2-yellow", "3-yellow", "4-yellow", "5-yellow", "6-yellow", "7-yellow", "8-yellow"];
        indexy[9] = ["2-yellow", "3-yellow", "4-yellow", "5-yellow", "6-yellow", "7-yellow", "8-yellow"];
        indexy[10] = ["2-yellow", "3-yellow", "4-yellow", "5-yellow", "6-yellow", "7-yellow", "8-yellow"];
        indexy[11] = ["2-yellow", "3-yellow", "4-yellow", "5-yellow", "6-yellow", "7-yellow", "8-yellow"];
        indexy[12] = ["2-yellow", "3-yellow", "4-yellow", "5-yellow", "6-yellow", "7-yellow", "8-yellow", "9-yellow"];
        indexy[13] = ["3-yellow", "4-yellow", "5-yellow", "6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow", "14-yellow"];
        indexy[14] = ["4-yellow", "5-yellow", "6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow", "11-yellow", "12-yellow", "13-yellow"];
        indexy[15] = ["5-yellow", "6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow", "11-yellow", "12-yellow"];
        indexy[16] = ["6-yellow", "7-yellow", "8-yellow", "9-yellow", "10-yellow", "11-yellow"];
        indexy[17] = [];
        indexy[18] = [];

	}
	
    if(pismeno == "LADYBIRD"){
		
	indexy[0] = ["0-green", "1-green", "2-green", "3-green", "4-green", "5-green", "6-green", "7-green", "8-green", "9-green", "10-green", "11-green", "12-green", "13-green", "14-green", "15-green", "16-green"];
        indexy[1] = ["0-green", "1-green", "2-green", "3-green", "4-green", "5-green", "7-green", "8-green", "9-green", "11-green", "12-green", "13-green", "14-green", "15-green", "16-green"];
        indexy[2] = ["0-green", "1-green", "2-green", "3-green", "4-green", "6-green", "8-green", "10-green", "12-green", "13-green", "14-green", "15-green", "16-green"];
        indexy[3] = ["0-green", "1-green", "2-green", "3-green", "4-green", "5-green", "6-green", "7-green", "9-green", "10-green", "11-green", "12-green", "13-green", "14-green", "15-green", "16-green"];
        indexy[4] = ["0-green", "1-green", "2-green", "3-green", "4-green", "5-green", "6-green", "10-green", "11-green", "12-green", "13-green", "14-green", "15-green", "16-green"];
        indexy[5] = ["0-green", "1-green", "2-green", "3-green", "4-green", "5-green", "6-green", "10-green", "11-green", "12-green", "13-green", "14-green", "15-green", "16-green"];
        indexy[6] = ["0-green", "1-green", "2-green", "3-green", "4-green", "5-green", "6-red", "7-red", "9-red", "10-red", "11-green", "12-green", "13-green", "14-green", "15-green", "16-green"];
        indexy[7] = ["0-green", "1-green", "2-green", "3-green", "4-green", "5-red", "7-red", "9-red", "10-red", "11-red", "12-green", "13-green", "14-green", "15-green", "16-green"];
        indexy[8] = ["0-green", "1-green", "2-green", "3-green", "4-red", "5-red", "6-red", "7-red", "9-red", "11-red", "12-red", "13-green", "14-green", "15-green", "16-green"];
        indexy[9] = ["0-green", "1-green", "2-green", "3-green", "4-red", "5-red", "7-red", "9-red", "10-red", "11-red", "12-red", "13-green", "14-green", "15-green", "16-green"];
        indexy[10] = ["0-green", "1-green", "2-green", "3-green", "4-red", "5-red", "6-red", "7-red", "9-red", "10-red", "12-red", "13-green", "14-green", "15-green", "16-green"];
        indexy[11] = ["0-green", "1-green", "2-green", "3-green", "4-red", "6-red", "7-red", "9-red", "10-red", "11-red", "12-red", "13-green", "14-green", "15-green", "16-green"];
        indexy[12] = ["0-green", "1-green", "2-green", "3-green", "4-red", "5-red", "6-red", "7-red", "9-red", "11-red", "12-red", "13-green", "14-green", "15-green", "16-green"];
        indexy[13] = ["0-green", "1-green", "2-green", "3-green", "4-green", "5-red", "7-red", "9-red", "10-red", "11-red", "12-green", "13-green", "14-green", "15-green", "16-green"];
        indexy[14] = ["0-green", "1-green", "2-green", "3-green", "4-green", "5-green", "6-red", "7-red", "9-red", "10-red", "11-green", "12-green", "13-green", "14-green", "15-green", "16-green"];
        indexy[15] = ["0-green", "1-green", "2-green", "3-green", "4-green", "5-green", "6-green", "7-green", "8-green", "9-green", "10-green", "11-green", "12-green", "13-green", "14-green", "15-green", "16-green"];

	}


	window.temp_spravy = [];

	for (var i = 0; i < indexy.length; i++) {

		var pozadie = Array();

		for (var e = 0; e < 17; e++) {
			pozadie.push(":black_circle:");
		};

		for (var ii = 0; ii < indexy[i].length; ii++) {

			if(indexy[i][ii].toString().indexOf("-red") > -1){

				var bezPomlcky = Number(indexy[i][ii].replace("-red", ""));
				     pozadie[bezPomlcky] = ":heart:";

			} else if(indexy[i][ii].toString().indexOf("-white") > -1){

				var bezPomlcky = indexy[i][ii].replace("-white", "");
				     pozadie[bezPomlcky] = ":white_circle:";
                        
			} else if(indexy[i][ii].toString().indexOf("-yellow") > -1){
			
				var bezPomlcky = indexy[i][ii].replace("-yellow", "");
				     pozadie[bezPomlcky] = ":full_moon:";
                           
			} else if(indexy[i][ii].toString().indexOf("-green") > -1){

				var bezPomlcky = indexy[i][ii].replace("-green", "");
				     pozadie[bezPomlcky] = ":green_heart:";	
		
			} else {
				pozadie[indexy[i][ii]] = ":blue_heart:";
			}
		};

		window.temp_spravy[i] = pozadie.join("");

	};



	for (var z = 0; z < window.temp_spravy.length; z++) {
		posliSpravu(z, (z*1200));
	};

}
