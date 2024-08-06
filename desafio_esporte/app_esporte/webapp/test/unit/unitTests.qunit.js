/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"desafioesporte85/app_esporte/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
