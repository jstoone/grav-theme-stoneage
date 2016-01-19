class Tooltip {

	constructor(selector) {
		this.selector = selector;
		this.$element = $(selector);
	}

	handle() {
		this.$element.tooltip();
	}

}

export default Tooltip;