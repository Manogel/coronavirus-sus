Parse.Cloud.define("getMembros", function(request, response) {
  var query = new Parse.Query("membros");
  query.descending("createdAt");
  query.equalTo("cpfUsuarioLogado", "02687278130");
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
