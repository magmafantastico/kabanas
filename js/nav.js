/* Nav */

var Nav = (function() {

	function Nav(items) {

		var self = this;

		this.items = items;

		this.clickCtrl = function() {

			scrollTo(this.scrollTo.offsetTop);

		};

	}

	Nav.prototype.init = function() {

		for (var i = this.items.length; i--; ) {
			this.items[i].target.scrollTo = this.items[i].scrollTo;
			addListener(this.items[i].target, 'click', 'onclick', this.clickCtrl, false);
		}

	};

	return Nav;

})();