/* Roulette */

var Roulette = (function() {

	function Roulette(viewport, options) {

		var self = this;

		this.viewport = viewport;

		this.target = options.target;
		this.images = options.images;

		this.used = [];

		this.intervalTime = 30000;

		this.imgLoadCtrl = function() {

			self.viewport.classList.remove('is-active');

			var image = this.src;

			self.used.push(image);

			setTimeout(function() {
				self.addBackground(image);
				self.viewport.classList.add('is-active');
			}, 600);

		};

		this.loadBtnCtrl = function() {

			self.loadImage();

			clearInterval(self.interval);
			self.interval = setInterval(self.loadBtnCtrl, self.intervalTime);

		};

		this.intervalCtrl = function() {

			self.loadImage();

		};

	}

	Roulette.prototype.addBackground = function(image) {

		this.viewport.style.backgroundImage = 'url(' + image + ')';

	};

	Roulette.prototype.buildImgElement = function(image) {

		var element = document.createElement('img');
		element.style.display = 'none';
		element.src = image;

		addListener(element, 'load', 'onload', this.imgLoadCtrl, false);

	};

	Roulette.prototype.getRandom = function() {

		return Math.floor(Math.random() * this.images.length);

	};

	Roulette.prototype.getRandomImage = function() {

		var image;

		while (image = this.images[this.getRandom()])
			if (this.used[this.used.length - 1] != image)
				return image;

	};

	Roulette.prototype.loadImage = function() {

		var self = this;

		var image = this.getRandomImage();

		if (image)
			this.buildImgElement(image);

	};

	Roulette.prototype.init = function() {

		var self = this;

		this.loadImage();

		this.interval = setInterval(self.loadBtnCtrl, this.intervalTime);

	};

	return Roulette;

})();