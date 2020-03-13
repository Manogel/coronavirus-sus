Parse.Cloud.define("getDicas", function (request, response) {
    var query = new Parse.Query("dicas");
    query.descending("updatedAt");
    query.find({
        success: function (dicas) {
            response.success(dicas);
        },
        error: function (error) {
            error.message("Falha na recuperacao de dicas!");
            response.error(error);
        }
    });
});
