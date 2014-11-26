
if ($(".game-title").length){

window.onload = canvas

// Canvas

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 722;
canvas.height = 408;

canvas.setAttribute('style', 'position:relative;display:block;margin:auto')

document.body.appendChild(canvas);

// Background

var backgReady = false;
var backgImage = new Image();

backgImage.onload = function(){
	backgReady = true;
};

backgImage.src = "assets/game/backg.png";

// Power

var powerReady = false;
var powerImage = new Image();
powerImage.onload = function () {
	powerReady = true;
};
powerImage.src = "assets/game/power_1.png";

// Monster

var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "assets/game/monster.png";

// Game objects

var power = {
	speed: 450,
	x: 0,
	y: 0
};

var monster = {
	x: 0,
	y: 0
};
var monsterCaught = 0;

// Keyboard controls

var keysDown = {};

addEventListener("keydown", function(e){
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e){
	delete keysDown[e.keyCode];
}, false);

// New game

var reset = function() {
	power.x = canvas.width / 2;
	power.y = canvas.height / 2;

	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Updating , moves...

var update = function (modifier) {
	if (87 in keysDown) {
		power.y -= power.speed * modifier;
	}
	if (83 in keysDown){
		power.y += power.speed * modifier;
	}
	if (65 in keysDown){
		power.x -= power.speed * modifier;
	}
	if (68 in keysDown) {
		power.x += power.speed * modifier;
	}

	// Touching the monster

	if (
		power.x <= (monster.x + 32)
		&& monster.x <= (power.x +32)
		&& power.y <= (monster.y + 32)
		&& monster.y <= (power.y +32)
	){
		++monsterCaught
	reset();
	}
};

// Draw

var render = function (){
	if (backgReady){
		ctx.drawImage(backgImage, 0, 0);
	}

	if (powerReady){
		ctx.drawImage(powerImage, power.x, power.y);
	}

	if(monsterReady){
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}
	// Score
	ctx.fillStyle = "rgb(208, 0, 0)";
	ctx.font = "24px Special Elite";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Monsters slain: " + monsterCaught, 32, 32);
};
// Main loop

var mainLoop = function(){
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	//To do it again ASAP

	requestAnimationFrame(mainLoop);
};

// A note about looping

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame
}

// Let´s start the game

var then = Date.now();
reset();
mainLoop();



// Chronometer *******************************************


var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec;
	document.getElementById("chronotime-field").value = hr + ":" + min + ":" + sec + ":" + msec;
	document.getElementById("kills-field").value = monsterCaught;
	timerID = setTimeout("chrono()", 10);
}
function chronoStart(){
	document.chronoForm.startstop.value = "STOP!"
	document.chronoForm.startstop.style.color = 'white'
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
	chrono()
	var mask_start = document.getElementById('mask_start');
	mask_start.setAttribute('style', 'display:none');
	var mask_stop = document.getElementById('mask_stop');
	mask_stop.setAttribute('style', 'display:none');
}
function chronoContinue(){
	document.chronoForm.startstop.value = "STOP!"
	document.chronoForm.startstop.style.color = 'white'
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
	var mask_stop = document.getElementById('mask_stop');
	mask_stop.setAttribute('style', 'display:none');
}
function chronoReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
	start = new Date()
	//var mask_start = document.getElementById('mask_start');
	//mask_start.setAttribute('style', 'display:block');
}
function chronoStopReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
	document.chronoForm.startstop.onclick = chronoStart
	var mask_start = document.getElementById('mask_start');
	mask_start.setAttribute('style', 'display:block');
	monsterCaught = 0;
	document.getElementById("chronotime-field").value = "0:00:00:000"
	document.getElementById("kills-field").value = 0;
}
function chronoStop(){
	document.chronoForm.startstop.value = "START"
	document.chronoForm.startstop.style.color = 'white'
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
	var mask_stop = document.getElementById('mask_stop');
	mask_stop.setAttribute('style', 'display:block')

}
