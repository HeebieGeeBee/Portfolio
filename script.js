/************************************************/
/*                                              */
/*           Porfolio by HeebieGeeBee           */
/*                                              */
/*             for FreeCodeCamp.com             */
/*                 13th May 2017                 */
/*                                              */
/*______________________________________________*/

/**********************/
/*  Global Variables  */
/*____________________*/

let mouseX;
let mouseY;
let mouseDown = false;

/********************/
/*  Window On Load  */
/*__________________*/

window.onload = () => {

	/* Initial Setup */

	// canvas //
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	canvas.id = "canvas";
	document.body.appendChild(canvas);

	// New Instances //

	const newBox = new Box($width(5), $height(10), $width(10), $height(10), "blue", false, canvas, ctx, mouseX, mouseY);
	
	// Draw Canvas with Interval //
	setInterval(draw, 10);


/***********************/
/*  Selector Function  */
/*_____________________*/

$ = (arg) => {
  splitArg = arg.split('');
  if(splitArg[0] === '#') {
    let argId = splitArg.slice(1).join('');
    return document.getElementById(argId);
  }
  if(splitArg[0] === '.') {
  	let argClass = splitArg.slice(1).join('');
  	return document.getElementsByClassName(argClass);
  }
  else {
  	return document.getElementsByTagName(arg);
  }
}

/*******************************/
/*  Responsive Size Functions  */
/*_____________________________*/

/* Percentage of window width value */
function $width(percent) {return window.innerWidth / 100 * percent;}
/* Percentage of window height value */
function $height(percent) {return window.innerHeight / 100 * percent;}
/* Text Size as percentage of window height value */
function $text(percent, font){
	let percentage = $height(100) / 100 * percent;
	return +percentage + "px " + font;
}

/**************************/
/*  Mouse Position Event  */
/*________________________*/

document.onmousemove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  newBox.mouseX = mouseX;
  newBox.mouseY = mouseY;
  if(mouseDown && newBox.y < $height(100) && newBox.y > 0 ){
  	newBox.y = mouseY - newBox.height/2;
  }
  
 
 
}

/**********************/
/*  Window On Resize  */
/*____________________*/

window.onresize = function() {
	
	// reset size of instances for responsivity //

	newBox.setSize($width(5), $height(10), $width(10), $height(10));
}


/************/
/*  Canvas  */
/*__________*/

function draw() {
	const height = ctx.canvas.height = $height(100);
	const width = ctx.canvas.width = $width(100);
	const canvas = $('#canvas');
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, width, height);
	newBox.render();

}

	
/********************/
/*  Event Handlers  */
/*__________________*/


/*  Mouse Scroll Listener  */

document.addEventListener('wheel', (event)=>{
	event.preventDefault();
	if(newBox.y < $height(100) - (newBox.height + 20) && event.deltaY > 0) {
	  newBox.y = Math.round(newBox.y) + 5 ;
	}
	if(newBox.y > 20 && event.deltaY < 0) {
	  newBox.y = Math.round(newBox.y) - 5 ;
	}
})

/*  Mouse Click Listener  */
/*
document.addEventListener('click', (event)=>{
	if(newBox.getBounds()) {
		if(newBox.clicked) {
			newBox.color = "blue";
			newBox.clicked = false;
		} else {
			newBox.color = "green";
			newBox.clicked = true;
		}
		
	}
})
*/
document.addEventListener('mousedown', (event)=>{
	event.preventDefault();
	event.stopPropagation();
	if(newBox.getBounds()) {
		mouseDown = true;
	}
}, false)

document.addEventListener('mouseup', (event)=>{
	event.preventDefault();
	event.stopPropagation();
		mouseDown = false;
	
}, false)

}