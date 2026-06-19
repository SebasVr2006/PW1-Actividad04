document.querySelector('#form-container').addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('#nombre').value.trim();
    const email = document.querySelector('#mail').value.trim();
    const edad = parseInt(document.querySelector('#edad').value);
    const pais = document.querySelector('#select-pais').value;
    const terminos = document.querySelector('#terminos').checked;

    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación nombre
    if (nombre.length < 5) {
        document.querySelector('#error-nombre').textContent = 'Nombre muy corto'
        return;
    }

    // Validación email
    if (!regEx.test(email)) {
        document.querySelector('#error-mail').textContent = 'Email no válido'
        return;
    }

    // Validación edad
    if (isNaN(edad) || edad < 18) {
        document.querySelector('#error-edad').textContent = 'Edad no válida'
        return;
    }

    // Validación pais
    if (pais === '') {
        document.querySelector('#error-pais').textContent = 'Seleccione un país'
        return;
    }

    // Validación terminos
    if (!terminos) {
        document.querySelector('#error-terminos').textContent = 'Debe aceptar los términos para continuar'
        return;
    }
    console.log({ nombre, email, edad, pais, terminos });
    
    const searchParams = new URLSearchParams({
        nombre: nombre,
        email: email,
        edad: edad,
        pais: pais,
        terminos: terminos
    })

    window.location.href = `mostrarResultados.html?${searchParams.toString()}`
})