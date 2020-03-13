Parse.Cloud.define("getNotificacoes", function(request, response) {

});

Parse.Cloud.define("createNotificacoes", function (request, response) {

  var NotificacoesAgente = Parse.Object.extend("notificacoesAgente");
  var notificacao = new NotificacoesAgente();
  var date = new Date();

  var formulario = request.params;
  var point = new Parse.GeoPoint({latitude: formulario.latitude, longitude: formulario.longitude});

  notificacao.set("localizacao", point);
  notificacao.set("data", date);
  notificacao.set("device", formulario.device);

  notificacao.set("situacaoNotificada", formulario.situacaoNotificada);
  notificacao.set("principalSuspeita", formulario.principalSuspeita);
  notificacao.set("casosSuspeitosEConfirmados", formulario.casosSuspeitosEConfirmados);
  notificacao.set("descricaoSituacao", formulario.descricaoSituacao);

  notificacao.set("localOcorrencia", formulario.localOcorrencia);
  notificacao.set("estadoDaOcorrencia", formulario.estadoDaOcorrencia);
  notificacao.set("municipioDaOcorrencia", formulario.municipioDaOcorrencia);

  notificacao.set("origemNotificacao", formulario.origemNotificacao);
  notificacao.set("outraOrigem", formulario.outraOrigem);
  notificacao.set("nomeNotificador", formulario.nomeNotificador);
  notificacao.set("profissaoOcupacaoNotificador", formulario.profissaoOcupacaoNotificador);
  notificacao.set("estadoNotificador", formulario.estadoNotificador);
  notificacao.set("municipioNotificador", formulario.municipioNotificador);
  notificacao.set("telefoneNotificador", formulario.telefoneNotificador);
  notificacao.set("emailNotificador", formulario.emailNotificador);

  notificacao.save().then(
      function(object) {
       response.success(object)
      },
      function(error) {
        response.error(error)
      });

});
