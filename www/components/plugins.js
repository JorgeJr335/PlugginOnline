$(document).on("click", "#alerta", function(){
    navigator.notification.alert("Isso é um alerta!",null,"Teste","Blz");
    navigator.notification.beep(1);
    navigator.vibrate(1000);
});
$(document).on("click","#confirm",function(){
  function onConfirm(buttonIndex){
    alert("Você escolheu " + (buttonIndex));
  };
  navigator.notification.confirm("Confirme o teste", onConfirm, "Teste", ['sim','não']);
});
$(document).on("click", "#beep", function(){
    navigator.notification.beep(1);
});
$(document).on("click", "#vibrar", function(){
    navigator.vibrate([1000,1000,3000,1000,5000]);
});
$(document).on("click", "#local", function(){
    var onSuccess = function(position){
      alert(
      "Latitude: " + position.coords.latitude + '\n' +
      "longitude: " + position.coords.longitude + '\n' +
      "altitude: " + position.coords.altitude + '\n' +
      "Precisão: " + position.coords.accuracy + '\n' +
      "precisão de altitude: " + position.coords.altitudeAccuracy + '\n' +
      "Título: " + position.coords.heading + '\n' +
      "Velocidade: " + position.coords.speed + '\n' +
      "Registro de Data: " + position.coords.timestamp);
    };

      function onError(error){
        alert(
          "Erro: " + error.code + '\n' +
          "Mensagem: " + error.message);
      };

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
});


