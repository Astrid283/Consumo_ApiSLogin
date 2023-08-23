var UrlApiGetAllUsuarios = "http://localhost:5002/usuario/getall";

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