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

function mostraMapa(lat, long){
    L.mapquest.key = 'RG2UKVPkCFjakwHvGjgzSq4588Yz1BqR';

        var map = L.mapquest.map('map', {
          center: [lat, -long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click", "#local", function(){
    var onSuccess = function(position){
      mostraMapa(position.coords.latitude, position.coords.longitude);
    };

      function onError(error){
        alert(
          "Erro: " + error.code + '\n' +
          "Mensagem: " + error.message);
      };

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
});


