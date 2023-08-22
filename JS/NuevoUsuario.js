var UrlApiInsertUsuario = "http://localhost:5002/usuario/insertar/:codigo_usuario";

$(document).ready(function () {
  CargarUsuarios();
});

function InsertarUsuario() {
  var datosUsuario = {
    codigo_usuario: $("#codigo_usuario").val(),
    nombre: $("#nombre").val(),
    apellido: $("#apellido").val(),
    contra: $("#contra").val(),
    email: $("#email").val(),
    estado: $("#estado").val(),
    ultimo_ingreso: $("#ultimo_ingreso").val(),
    expira_pass: $("#expira_pass").val(),
    dias_caducidad_pass: $("#dias_caducidad_pass").val(),
    rol: $("#rol").val(),
    intentos_incorrectos: $("#intentos_incorrectos").val(),
    fecha_registro: $(Date).val()
  };

  var datosUsuarioJson = JSON.stringify(datosUsuario);

  $.ajax({
    url: UrlApiInsertUsuario,
    type: "POST",
    data: datosUsuarioJson,
    datatype: "JSON",
    contentType: "application/json",
    success: function (response) {
      alert("Usuario Ingresado Exitosamente");
      $("#FormularioNuevoUsuario").submit();
    },
    error: function (textError, errorThrown) {
      alert("Error: " + textError + errorThrown);
    },
  });
}

