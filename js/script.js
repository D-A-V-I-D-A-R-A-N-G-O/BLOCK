async function obtenerPersonajes() {
    try {
        const response = await fetch('https://batapi-77nt.onrender.com/API/aves');
        const datas = await response.json();
        const personajes = datas;
        const avesContainer = document.getElementById('pelsonajes');
        console.log(personajes);
        console.log(personajes.constructor.name)
        personajes.forEach(personaje => {
            const personajeElement = document.createElement('div');
            personajeElement.classList.add('ave');
            personajeElement.innerHTML = 
            `<div class="contenedor">
                <h2 id="alias">${personaje.nombre}</h2>
                <h2 id="nombre"> estado: ${personaje.alimentacion}</h2>
                <img  id="imgo" src="${personaje.imgUrl}" alt="${personaje.nombre}">

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
