var UrlApiLogin = "http://localhost:5002/login/:codigo_usuario";

function FormularioLogin() {
  var LoginUsuario = {
    codigo_usuario: $("#codigo_usuario").val(),
    contra: $("#contra").val(),
    estado: $("#estado").val(),
  };

  var LoginUsuarioJson = JSON.stringify(LoginUsuario);

  // aqui es donde deben ir las validaciones
  $.ajax({
    url: UrlApiLogin,
    type: "POST",
    data: LoginUsuarioJson,
    datatype: "JSON",
    contentType: "application/json",
    success: function (response) {
      if (response.message === "El ususario no existe") {
        alert(response.message);
        window.location.href = "Login.html";
      } else if (
        response.message === "Por favor ingrese las credenciales correctas"
      ) {
        alert(response.message);
        window.location.href = "Login.html";
      } else if (response.message === "¡Credenciales correctas, Bienvenido!") {
        alert(response.message);
        window.location.href = "Home.html";
      } else {
        alert(response.message);
        window.location.href = "Login.html";
      }
    },
    error: function (textError, errorThrown) {
      alert("Error de codigo: " + textError + errorThrown);
    },
  });
}
