async function obtenerPersonajes() {
    try {
        const response = await fetch('https://api.batmanapi.com/v1/characters/');
        const datas = await response.json();
        const avesContainer = document.getElementById('Personajes');
        console.log(datas.data); 
        datas.data.forEach(ave => {
            const aveElement = document.createElement('div');
            aveElement.classList.add('ave');
            aveElement.innerHTML = 
            `
            <div id="contenedor">
                <h2 id="alias">${ave.attributes.alias}</h2>
                <h2 id="nombre">${ave.attributes.name}</h2>
                <h3 id="rol">ROL: ${ave.attributes.role}</h3>
            </div>`;
            avesContainer.appendChild(aveElement);
        });
    } catch (error) {
        console.error("no se pudo hacer", error);
    }
}
window.onload = obtenerPersonajes();

function personajesBoton() {
    const personajes = document.getElementById('Personajes');
    const inicio = document.getElementById('Inicio');
    personajes.style.display = 'flex';
    inicio.style.display = 'none';
}
function inicioBoton() {
    const personajes = document.getElementById('Personajes');
    const inicio = document.getElementById('Inicio');
    personajes.style.display = 'none';
    inicio.style.display = 'flex';
}
