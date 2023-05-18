function confirmacion() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var comentario= document.getElementById("comentario").value;

    
    
    alert('Estos son los datos ingresados: '+ nombre + apellido + telefono + email+ comentario  );
}