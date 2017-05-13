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
	
	const backLine = new Line($width(2), $height(5), $width(.3), $height(90), "grey", false, canvas, ctx, mouseX, mouseY, "round");
	const newLine = new Line($width(2), $height(5), $width(.3), $height(2), "yellow", false, canvas, ctx, mouseX, mouseY, "round");
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
  newLine.mouseX = mouseX;
  newLine.mouseY = mouseY;
  let minY = Math.floor($height(5));
  let maxY = Math.floor($height(95) - newLine.height);
  if(mouseDown && mouseY < maxY && mouseY > minY){
  	newLine.y = (newLine.y < minY) ? minY : ((newLine.y > maxY) ? maxY : mouseY);  	
  }
  
 
 
}

/**********************/
/*  Window On Resize  */
/*____________________*/

window.onresize = ()=> {
	
	// reset size of instances for responsivity //

	newLine.setSize($width(2), $height(5), $width(0.3), $height(2));
	backLine.setSize($width(2), $height(5), $width(0.3), $height(90));
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
	backLine.render();
	newLine.render();

}

	
/********************/
/*  Event Handlers  */
/*__________________*/


/*  Mouse Scroll Listener  */

document.addEventListener('wheel', (event)=>{
	event.preventDefault();
	let minY = Math.floor($height(5));
  	let maxY = Math.floor($height(95) - newLine.height);
	if(newLine.y < maxY && event.deltaY > 0) {
	  newLine.y = Math.round(newLine.y) + 5 ;
	} 
	if(newLine.y > minY && event.deltaY < 0) {
	  newLine.y = Math.round(newLine.y) - 5 ;
	}
})

/*  Mouse Click Listener  */

document.addEventListener('click', (event)=>{
	//console.log("click", newLine.x + (newLine.width/2), newLine.getBounds(), newLine.mouseX, newLine.y + newLine.height, mouseY );
	if(newLine.getBounds()) {
		console.log('inbounds');
		if(newLine.clicked) {
			
			newLine.clicked = false;
		} else {
			newLine.setColor('yellow');
			newLine.clicked = true;
		}
		
	}
})

/* Mouse Down Listener  */

document.addEventListener('mousedown', (event)=>{
	event.preventDefault();
	event.stopPropagation();
	if(newLine.getBounds()) {
		mouseDown = true;
	}
}, false)

/*  Mouse Up Listenere  */

document.addEventListener('mouseup', (event)=>{
	event.preventDefault();
	event.stopPropagation();
		mouseDown = false;
	
}, false)



}