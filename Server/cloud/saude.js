Parse.Cloud.define("listapontos", function(request, response) {
    var geoPoint = request.params.geoPoint;
    var moment = require("moment");
    var query = new Parse.Query("saude");
    query.descending("createdAt");

    var d = new Date();
    var start = new moment(d);
    var finish = new moment(start);

    start.subtract(3, 'days'); //comeca 3 dias atras
    finish.add(3, 'days'); //termina em 3 dias

    query.greaterThanOrEqualTo('createdAt', start.toDate());
    query.lessThan('createdAt', finish.toDate());

    query.withinKilometers("localizacao", geoPoint,1000);
    query.limit(100);
    query.find({
        success: function(results) {
            response.success(results);
        },
        error: function(error) {
          error.message("Falha na recuperacao de pontos!");
          response.error(error);
        }
    });
});

Parse.Cloud.define("createPontos", function (request, response) {

    var Saude = Parse.Object.extend("saude");
    var saude = new Saude();
    var date = new Date();

    var ponto = request.params;
    var point = new Parse.GeoPoint({latitude: ponto.latitude, longitude: ponto.longitude});
    saude.set("localizacao", point);
    saude.set("data", date);
    saude.set("sintomas", ponto.sintomas);
    saude.set("estou_bem", ponto.estou_bem);
    saude.set("device", ponto.device);
    saude.save().then(
        function(object) {
         response.success(object)
        },
        function(error) {
          response.error(error)
        });

});
