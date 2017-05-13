/************************************************/
/*                                              */
/*           Porfolio by HeebieGeeBee           */
/*                                              */
/*             for FreeCodeCamp.com             */
/*                 5th May 2017                 */
/*                                              */
/*______________________________________________*/


/**********************/
/*  Global Variables  */
/*____________________*/



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
$width = (percent) => window.innerWidth / 100 * percent;
/* Percentage of window height value */
$height = (percent) => window.innerHeight / 100 * percent;
/* Text Size as percentage of window height value */
$text = (percent, font) => {
	let percentage = height / 100 * percent;
  return +percentage + "px " + font;
}

/********************/
/*  Window On Load  */
/*__________________*/

window.onload = () => {

	setup();
	draw();
}

/**********************/
/*  Window On Resize  */
/*____________________*/

window.onresize = () => {
	draw();
}

/***********/
/*  Setup  */
/*_________*/

setup = () => {
	const canvas = document.createElement('canvas');
	canvas.id = "canvas";
	canvas.style.margin = "auto";
	document.body.appendChild(canvas);
}

/************/
/*  Canvas  */
/*__________*/

draw = () => {

	const canvas = $('#canvas');
	const ctx = canvas.getContext('2d');
	const height = ctx.canvas.height = $height(100);
	const width = ctx.canvas.width = $width(100);
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, width, height);
}

/********************/
/*  Event Handlers  */
/*__________________*/


/*  Mouse Scroll Listener  */

	document.addEventListener('wheel', (event)=>{
		event.preventDefault();
	})



