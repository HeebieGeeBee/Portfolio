class Box {
	constructor(_x, _y, _width, _height, _color, _clicked, _parent, _ctx, _mouseX, _mouseY) {

			this.x = _x;
			this.y = _y;
			this.width = _width;
			this.height = _height;
			this.color = _color;
			this.clicked = _clicked
			this.parent = _parent
			this.ctx = _ctx;
			this.mouseX = _mouseX;
			this.mouseY = _mouseY;

			this.render = () => {
				this.ctx.fillStyle = this.color;
				this.ctx.fillRect(this.x,this.y,this.width,this.height);
			}

			this.getBounds = () => {
				return this.mouseX >= this.x 
					&& this.mouseX <= this.x + this.width
					&& this.mouseY >= this.y 
					&& this.mouseY <= this.y + this.height; 
			}

			this.setSize = (_x, _y, _width, _height) => {
				this.x = _x;
				this.y = _y;
				this.width = _width;
				this.height = _height;
			}

			this.setColor = (_color) => {
				this.color = _color;
			}

		}
}

class Line {
	constructor(_x, _y, _width, _height, _color, _clicked, _parent, _ctx, _mouseX, _mouseY, _linecap) {

			this.x = _x;
			this.y = _y;
			this.width = _width;
			this.height = _height;
			this.color = _color;
			this.clicked = _clicked
			this.parent = _parent
			this.ctx = _ctx;
			this.mouseX = _mouseX;
			this.mouseY = _mouseY;
			this.linecap = _linecap;

			this.render = () => {
				this.ctx.strokeStyle = this.color;
				this.ctx.lineCap = this.linecap;
				this.ctx.lineWidth = this.width;
				this.ctx.shadowBlur = this.width * 2;
				this.ctx.shadowColor = this.color;
				this.ctx.beginPath();
				this.ctx.lineTo(this.x, this.y);
				this.ctx.lineTo(this.x, this.y + this.height);
				this.ctx.stroke();
			}

			this.getBounds = () => {
				return this.mouseX >= this.x - (this.width/2)
					&& this.mouseX <= this.x + (this.width/2)
					&& this.mouseY >= this.y - (this.width/2) 
					&& this.mouseY <= this.y + this.height + (this.width/2);
					
			}

			this.setSize = (_x, _y, _width, _height) => {
				this.x = _x;
				this.y = _y;
				this.width = _width;
				this.height = _height;
			}

			this.setColor = (_color) => {
				this.color = _color;
			}

		}
}