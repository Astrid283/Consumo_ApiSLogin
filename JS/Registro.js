var UrlApiNuevoUsuario = 'http://localhost:5002/nuevousuario/agregar/:codigo_usuario';

function Registro(){
    var NuevoUsuario = {
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

    var NuevoUsuariojson = JSON.stringify(NuevoUsuario);

    $.ajax({
        url:UrlApiNuevoUsuario,
        type: 'POST',
        data : NuevoUsuariojson,
        datatype: 'JSON',
        contentType : 'application/json',
        success : function(response){
            alert('Usuario registrado de forma correcta');
            $('#Miformulario').submit();
        },
        error : function(textError, errorThrown){
            alert('Error: '+ textError + errorThrown);
        }
    });
}