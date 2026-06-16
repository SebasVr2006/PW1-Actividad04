
const parametrosURL = window.location.search;

const urlParams = new URLSearchParams(parametrosURL);

const nombre = urlParams.get('nombre');
const mail = urlParams.get('mail');
const edad = urlParams.get('edad');
const pais = urlParams.get('pais');
const terminos = urlParams.get('terminos'); 

function mostrarResultados() {
    const container = document.querySelector('.resultados-container');
    if (!container) return; 

    container.innerHTML = '';

    const div = document.createElement('div');

    div.innerHTML = `
            <p><strong>Nombre:</strong> ${nombre || 'No provisto'} </p>
            <p><strong>E-Mail:</strong> ${mail || 'No provisto'} </p>
            <p><strong>Edad:</strong> ${edad || 'No provisto'} </p>
            <p><strong>País:</strong> ${pais || 'No provisto'} </p>
            <p><strong>Términos:</strong> ${terminos === 'true' ? 'Aceptado' : 'Rechazado'} </p>`;

    container.appendChild(div);
}

mostrarResultados();