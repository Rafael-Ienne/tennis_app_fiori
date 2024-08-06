sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("desafioesporte85.appesporte.controller.Main", {
        onInit: function () {

            var oATPRanking = new JSONModel();
            var oWTARanking = new JSONModel();
            var oEvents = new JSONModel();

            this.getView().setModel(oATPRanking, "ATPRanking");
            this.getView().setModel(oWTARanking, "WTARanking");
            this.getView().setModel(oEvents, "Events");

            this.buscarATPRanking();
            this.buscarWTARanking();
            this.buscarEvents();

        },

        buscarATPRanking: function() {

            var oModel = this.getView().getModel("ATPRanking");

            const config = {
                async: true,
                crossDomain: true,
                url: 'https://sportscore1.p.rapidapi.com/tennis-rankings/atp?page=1',
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '93292309e4mshad9d3cc556a4c84p12dff9jsnd42f62390a01',
                    'x-rapidapi-host': 'sportscore1.p.rapidapi.com'
                }
            };

            $.ajax(config)

            .done(function(resposta) {
                oModel.setData(resposta);
            })
            .fail(function(error){

            });

        },

        buscarWTARanking: function() {

            var oModel = this.getView().getModel("WTARanking");

            const config = {
                async: true,
                crossDomain: true,
                url: 'https://sportscore1.p.rapidapi.com/tennis-rankings/wta?page=1',
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '93292309e4mshad9d3cc556a4c84p12dff9jsnd42f62390a01',
                    'x-rapidapi-host': 'sportscore1.p.rapidapi.com'
                }
            };

            $.ajax(config)

            .done(function(resposta) {
                oModel.setData(resposta);
            })
            .fail(function(error){

            });

        },

        buscarEvents: function(){

            var oModel = this.getView().getModel("Events");

            const config = {
                async: true,
                crossDomain: true,
                url: 'https://sportscore1.p.rapidapi.com/sports/2/events/live?page=1',
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '93292309e4mshad9d3cc556a4c84p12dff9jsnd42f62390a01',
                    'x-rapidapi-host': 'sportscore1.p.rapidapi.com'
	            }
            };

            $.ajax(config)

            .done(function(resposta) {
                oModel.setData(resposta);
            })
            .fail(function(error){

            });

        }
    });
});
