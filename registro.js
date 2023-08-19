function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    var nombre = document.getElementById('nombre').value;
   var edad= document.getElementById('edad').value;
    var telefono= document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('contrasena').value;
  
    // Validar campos (puedes agregar más validaciones según tus necesidades)
    if (nombre.trim() === '') {
      alert('Por favor ingresa tu nombre');
      return;

    }
    if (edad.trim() === '') {
        alert('Por favor ingresa tu edad');
        return;
      }
    
    }
    if (telefono.trim() === '') {
        alert('Por favor ingresa tu telefono');
        return;
      }
    
  
    if (email.trim() === '') {
      alert('Por favor ingresa tu email');
      return;
    }
  
    if (contraseña.trim() === '') {
      alert('Por favor ingresa tu contraseña');
      return;
    }
  
    // Si todos los campos son válidos, puedes hacer algo con la información
    alert('Registro exitoso!');
    // Aquí puedes enviar los datos a tu servidor o realizar otras acciones
   