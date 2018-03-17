/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Customers in the list
// * All 3 Customers have at least one Orders

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
		"example/app/flc-northwind/test/integration/MasterJourney",
		"example/app/flc-northwind/test/integration/NavigationJourney",
		"example/app/flc-northwind/test/integration/NotFoundJourney",
		"example/app/flc-northwind/test/integration/BusyJourney",
		"example/app/flc-northwind/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});