function recogerDatos() {

    let nombre=document.getElementById('nombre').value;
    let apellidos=document.getElementById('apellidos').value;
    let telefono=document.getElementById('telefono').value;
    let año=document.getElementById('año').value;
    let correo=document.getElementById('correo').value;
    let contraseña=document.getElementById('contraseña').value;

    let mensajeFinal = "Nombre: " +nombre+ "<br>"+
                       "Apellidos: " + apellidos+ "<br>"+
                       "Telefono: "+ telefono+"<br>"+
                       "Año: "+ año+"<br>"+
                       "Correo: "+correo+"<br>"+
                       "Contraseña: "+contraseña+"";
    
    document.getElementById('resultado').innerHTML = mensajeFinal;
}