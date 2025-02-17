async function obtenerPersonajes() {
    try {
        const response = await fetch('https://api.batmanapi.com/v1/characters/');
        const datas = await response.json();
        const personajes = datas.data;
        const avesContainer = document.getElementById('Personajes');
        console.log(personajes);
        personajes.forEach(personaje => {
            const personajeElement = document.createElement('div');
            personajeElement.classList.add('ave');
            personajeElement.innerHTML = 
            `<div class="contenedor">
                <h2 id="alias">${personaje.attributes.alias}</h2>
                <h2 id="nombre">${personaje.attributes.name}</h2>
                <h3 id="rol">ROL: ${personaje.attributes.role}</h3>
            </div>`;
            avesContainer.appendChild(personajeElement);
        });
    } catch (error) {
        console.error("no se pudo hacer", error);
    }
}
window.onload = obtenerPersonajes();

function personajesBoton() {
    const personajes = document.getElementById('Personajes');
    const inicio = document.getElementById('Inicio');
    const contacto = document.getElementById('Contacto');
    personajes.style.display = 'block';
    inicio.style.display = 'none';
    contacto.style.display = 'none';

}
function inicioBoton() {
    const personajes = document.getElementById('Personajes');
    const inicio = document.getElementById('Inicio');
    const contacto = document.getElementById('Contacto');
    personajes.style.display = 'none';
    inicio.style.display = 'flex';
    contacto.style.display = 'none';
}
function contactoBoton() {
    const personajes = document.getElementById('Personajes');
    const inicio = document.getElementById('Inicio');
    const contacto = document.getElementById('Contacto');
    personajes.style.display = 'none';
    inicio.style.display = 'none';
    contacto.style.display = 'flex';
}
