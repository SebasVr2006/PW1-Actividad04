document.querySelector('#form-container').addEventListener('submit', (btn) => {
    btn.preventDefault();
    if (validarFormulario()) {
        window.location.href = './mostrarResultados.html'
    }
})

function validarFormulario() {
    const nombre = document.querySelector('#nombre').value;
    const mail = document.querySelector('#mail').value;
    const edad = document.querySelector('#edad').value;
    const pais = document.querySelector('#select-pais').value;
    const terminos = document.querySelector('#terminos');
    let esValido = true;

    if (nombre.trim() === '') {
        alert('Error al validar.')
        esValido = false;
    } else {
        localStorage.setItem('nombre', nombre)
    }

    if (mail.trim() === '') {
        alert('Error al validar.')
        esValido = false;
    } else {
        localStorage.setItem('mail', mail)
    }

    if (edad.trim() === '') {
        alert('Error al validar.')
        esValido = false;
    } else {
        localStorage.setItem('edad', edad)
    }

    if (pais.trim() === '') {
        alert('Error al validar.')
        esValido = false;
    } else {
        localStorage.setItem('pais', pais)
    }

    if (!terminos.checked) {
        alert('Error al validar.')
        esValido = false;
    } else {
        localStorage.setItem('terminos', terminos)
    }

    return esValido;
}