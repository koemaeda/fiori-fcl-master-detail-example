/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"example/app/flc-northwind/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"example/app/flc-northwind/test/integration/pages/App",
	"example/app/flc-northwind/test/integration/pages/Browser",
	"example/app/flc-northwind/test/integration/pages/Master",
	"example/app/flc-northwind/test/integration/pages/Detail",
	"example/app/flc-northwind/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "example.app.flc-northwind.view."
	});

	sap.ui.require([
		"example/app/flc-northwind/test/integration/NavigationJourneyPhone",
		"example/app/flc-northwind/test/integration/NotFoundJourneyPhone",
		"example/app/flc-northwind/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});