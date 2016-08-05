/* Header */

var Header = (function() {

	function Header(viewport, wrapper) {

		var self = this;

		this.viewport = viewport;

		this.inner = {};
		this.inner.viewport = wrapper;

		this.resizeCtrl = function() {

			self.resizeViewport();

		};

	}

	Header.prototype.resizeViewport = function() {

		this.viewport.style.height = this.inner.viewport.offsetHeight + 'px';

	};

	Header.prototype.init = function() {

		addListener(window, 'resize', 'onresize', this.resizeCtrl, false);
		this.resizeViewport();

	};

	return Header;

})();