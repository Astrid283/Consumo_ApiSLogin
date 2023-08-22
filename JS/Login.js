var UrlApiLogin = "http://localhost:5002/login/:codigo_usuario";

$(document).ready(function () {
    FormularioLogin();
  });


function FormularioLogin (){
    var datosUsuario = {
        codigo_usuario: $("#codigo_usuario").val(),
        contra: $("#contra").val(),
        estado: $("#estado").val(),
        ultimo_ingreso: $("#ultimo_ingreso").val(),
        expira_pass: $("#expira_pass").val(),
        dias_caducidad_pass: $("#dias_caducidad_pass").val(),
        intentos_incorrectos: $("#intentos_incorrectos").val(),
      };
    
      var datosUsuarioJson = JSON.stringify(datosUsuario);
    
      $.ajax({
        url: UrlApiLogin,
        type: "POST",
        data: datosUsuarioJson,
        datatype: "JSON",
        contentType: "application/json",
        //aqui es donde deben ir las validaciones
        success: function (response) {
          alert("Usuario Ingresado Exitosamente");
          $("#FormularioNuevoUsuario").submit();
        },
        error: function (textError, errorThrown) {
          alert("Error: " + textError + errorThrown);
        },
      });
      //hasta aqui es donde deben ir las validaciones
}

