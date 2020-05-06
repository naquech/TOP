//alert("conected");
var numberSquares = 6;
var colors = generateRandomColors(numberSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");


colorDisplay.textContent = pickedColor;


for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		//console.log(clickedColor, pickedColor);
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Try Again?"
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}


resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numberSquares);
	//pick a random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change color of squares
	changeColorSquares();
	messageDisplay.textContent = "";
	this.textContent = "New Colors"
	h1.style.backgroundColor = "steelblue";
});


easyButton.addEventListener("click", function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numberSquares = 3
	colors = generateRandomColors(numberSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});


hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numberSquares = 6
	colors = generateRandomColors(numberSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});


function changeColors(color){
	for(var i=0; i<colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//get a random color and push it into arr
function generateRandomColors(num){
	var arr = [];

	for (var i=0; i<num; i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	//"rgb (r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColorSquares(){
	for(var i=0; i<squares.length; i++)
		squares[i].style.backgroundColor = colors[i];
}
