window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

import Tooltip from "./components/tooltip";

class App {

	constructor() {
		this.tooltip = new Tooltip('[data-toggle="tooltip"]');

		$(document).ready(this.run.bind(this));
	}

	run() {
		this.tooltip.handle();
	}
}

new App();


