const params = new URLSearchParams(window.location.search)

function mostrarResultados() {
    const container = document.querySelector('.resultados-container');
    if (!container) return; 

    container.innerHTML = '';

    const div = document.createElement('div');

    div.innerHTML = `
            <p><strong>Nombre:</strong> ${params.get('nombre')} </p>
            <p><strong>E-Mail:</strong> ${params.get('email')} </p>
            <p><strong>Edad:</strong> ${params.get('edad')} </p>
            <p><strong>País:</strong> ${params.get('pais')} </p>
            <p><strong>Términos:</strong> ${params.get('terminos') ? 'Aceptado' : 'Rechazado'} </p>`;

    container.appendChild(div);
}

document.addEventListener('DOMContentLoaded', mostrarResultados);