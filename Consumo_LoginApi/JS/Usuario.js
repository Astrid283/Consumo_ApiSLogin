var UrlApiGetAllUsuarios = "http://localhost:5002/usuario/getall";
var UrlApiInsertUsuario = "http://localhost:5002/usuario/insertar/:codigo_usuario";

$(document).ready(function () {
  CargarUsuarios();
});

function CargarUsuarios() {
  $.ajax({
    url: UrlApiGetAllUsuarios,
    type: "GET",
    datatype: "JSON",
    success: function (response) {
      var MisUsuarios = response;
      var Usuarios = "";
      for (i = 0; i < MisUsuarios.length; i++) {
        Usuarios +=
          "<tr>" +
          "<td>" +
          MisUsuarios[i].codigo_usuario +
          "</td>" +
          "<td>" +
          MisUsuarios[i].nombre +
          "</td>" +
          "<td>" +
          MisUsuarios[i].apellido +
          "</td>" +
          "<td>" +
          MisUsuarios[i].contra +
          "</td>" +
          "<td>" +
          MisUsuarios[i].email +
          "</td>" +
          "<td>" +
          MisUsuarios[i].estado +
          "</td>" +
          "<td>" +
          MisUsuarios[i].ultimo_ingreso +
          "</td>" +
          "<td>" +
          MisUsuarios[i].expira_pass +
          "</td>" +
          "<td>" +
          MisUsuarios[i].dias_caducidad_pass +
          "</td>" +
          "<td>" +
          MisUsuarios[i].rol +
          "</td>" +
          "<td>" +
          MisUsuarios[i].intentos_incorrectos +
          "</td>" +
          "<td>" +
          MisUsuarios[i].fecha_registro +
          "</td>" +
          "</tr>";
        $("#DataUsuarios").html(Usuarios);
      }
    },
  });
}


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
    fecha_registro: $("#fecha_registro").val(),
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
      $("#FormularioUsuarios").submit();
    },
    error: function (textError, errorThrown) {
      alert("Error: " + textError + errorThrown);
    },
  });
}

