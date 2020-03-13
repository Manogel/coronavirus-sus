Parse.Cloud.define("getSintomas", function(request, response) {
  var query = new Parse.Query("sintomas");
  query.ascending("nome");
  query.find({
    success: function(results) {
      response.success(results);
    },
    error: function(error) {
      error.message("Falha na recuperacao de sintomas!");
      response.error(error);
    }
  });
});
