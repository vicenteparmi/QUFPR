var inGame = false;
var selectedCell = "nullCell";
var tries = 3;
var correct = 0;
var wrong = 0;

function toggleCell(element) {
	if (inGame == true) {
		if (element.className == "hiddenCell") {
			document.getElementById(selectedCell).className = "hiddenCell";
			element.className = "selectedCell";
			selectedCell = element.id;
		} else if (element.className == "selectedCell") {
			element.className = "hiddenCell";
		}
	}
}

function startGame() {
	document.getElementById('game1').className = "input";
	document.getElementById('game2').className = "input";

	inGame = true;
	window.scroll(0,0);

	var elementBox = []

	for (var i = 1; i < 119; i++) {
		elementBox[i] = document.getElementById('el'+i);
	}

	var interval = setInterval(animation, 30);
	var stage = 0;

	function animation() {
		if (stage == 118) {
			clearInterval(interval);
		} else {
			stage++;
			elementBox[stage].className = "hiddenCell";
		}
	}
}

function checkAnswer() {
	var answer = document.getElementById('answerInput').value;

	var simbols00 = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"];
	var simbols01 = ["","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Og"];
	var simbols09 = simbols00 + simbols01;
	var simbols09 = simbols09.split(",");

	var elementNumber = Number(selectedCell.replace('el','')) -1;

	if (simbols09[elementNumber] == answer) {
		document.getElementById(selectedCell).className = "visibleCell";
		selectedCell = "nullCell";
		tries = 3;
		correct++;
	} else {
		if (tries == 0) {
			document.getElementById(selectedCell).className = "wrongCell";
			tries = 3;
			selectedCell = "nullCell";
			wrong++;
		} else {
			tries--;
			alert("Wrong. You have "+tries+" tries left.");
		}
	}

	document.getElementById("correctA").innerHTML = "Correct: "+correct;
	document.getElementById("wrongA").innerHTML = "Wrong: "+wrong;
}

function summary() {
	var reset = confirm("Voc\u00ea acertou "+correct+" de 118 elementos, aproximadamente "+Math.round((correct/118*100))+"% da tabela, e errou "+wrong+" elementos. Aperte OK para reiniciar ou Cancelar para retornar \u00e0 tabela.");

	if (reset == true) {
		correct = 0;
		wrong = 0;
		tries = 3;
		var elementBox = []

		for (var i = 1; i < 119; i++) {
			elementBox[i] = document.getElementById('el'+i);
		}
		var interval = setInterval(animation2, 30);
		var stage = 0;

		function animation2() {
			if (stage == 118) {
				clearInterval(interval);
			} else {
				stage++;
				elementBox[stage].className = "";
			}
		}

		document.getElementById('game1').className = "null";
		document.getElementById('game2').className = "null";
	}
}
