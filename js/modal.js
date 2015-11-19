/*!
 * Mowe Modal v1.0.0 (http://letsmowe.com/)
 * Copyright 2013-2016 Kabana's Info Developers
 * Licensed under MIT (https://github.com/noibe/villa/blob/master/LICENSE)
 */

var Modal = (function() {

	/**
	 * The Modal Constructor
	 * @param viewport
	 * @constructor
	 */
	function Modal(viewport) {

		var self = this;

		this.viewport = viewport;

		this.wrapper = {};

		this.backdrop = {};

		this.active = false;

		this.triggerCtrl = function() {

			self.toggle();

		};

		this.openCtrl = function() {

			self.open();

		};

		this.closeCtrl = function() {

			self.close();

		};

	}

	Modal.prototype.open = function() {

		this.active = true;

		var self = this;

		this.viewport.style.display = 'block';

		setTimeout(function() {

			self.viewport.classList.add('is-active');

		}, 200);

	};

	Modal.prototype.close = function() {

		this.active = false;

		var self = this;

		this.viewport.classList.remove('is-active');

		setTimeout(function() {

			self.viewport.style.display = 'none';

		}, 200);

	};

	Modal.prototype.toggle = function() {

		if (this.active)
			this.close();
		else this.open();

	};

	Modal.prototype.getCloseButton = function() {

		var closeButtons = this.viewport.querySelectorAll('.ModalClose');

		for (var i = closeButtons.length; i--; )
			addListener(closeButtons[i], 'click', 'onclick', this.closeCtrl, false);

	};

	Modal.prototype.getBackDrop = function() {

		if (this.backdrop.viewport = this.viewport.querySelector('.ModalBackDrop'))
			addListener(this.backdrop.viewport, 'click', 'onclick', this.closeCtrl, false);

	};

	Modal.prototype.addListeners = function() {

		this.getCloseButton();
		this.getBackDrop();

	};

	Modal.prototype.getModalInner = function() {

		this.wrapper.viewport = this.viewport.querySelector('.ModalWrapper');

	};

	Modal.prototype.init = function() {

		this.getModalInner();
		this.addListeners();

		this.active = false;
		this.viewport.style.display = 'none';

	};

	return Modal;

})();