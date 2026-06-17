const nombre = localStorage.getItem('nombre');
const mail = localStorage.getItem('mail');
const edad = localStorage.getItem('edad');
const pais = localStorage.getItem('pais');
const terminos = localStorage.getItem('terminos'); 

function mostrarResultados() {
    const container = document.querySelector('.resultados-container');
    if (!container) return; 

    container.innerHTML = '';

    const div = document.createElement('div');

    div.innerHTML = `
            <p><strong>Nombre:</strong> ${nombre} </p>
            <p><strong>E-Mail:</strong> ${mail} </p>
            <p><strong>Edad:</strong> ${edad} </p>
            <p><strong>País:</strong> ${pais} </p>
            <p><strong>Términos:</strong> ${terminos ? 'Aceptado' : 'Rechazado'} </p>`;

    container.appendChild(div);
}

mostrarResultados();