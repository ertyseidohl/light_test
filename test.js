;(function(exports){

	var Test = function(canvas_id) {
		var canvas = document.getElementById(canvas_id);
		this.ctx = canvas.getContext('2d');

		this.lights = [];
		this.boxes = [];

		this.lights.push(new Light({
			x: 300,
			y: 300,
			color: "yellow"
		}));

		this.boxes.push(new Box({
			x: 600,
			y: 300,
			w: 100,
			h: 100
		}))
	}

	Test.prototype.loop = function() {
		this.ctx.fillColor = "#000000";
		this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

		this.lights.forEach(function(light) {
			light.loop(this);
		});
	};

	exports.Test = Test;

})(this);
