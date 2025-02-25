async function obtenerPersonajes() {
    try {
        const response = await fetch('https://api.batmanapi.com/v1/characters/');
        const datas = await response.json();
        const personajes = datas.data;
        
        // Filtrar personajes con ID <= 30
        const pepe = personajes.filter(caracter => caracter.id <= 20);
        console.log(pepe);
    } catch (error) {
        console.error("Error al obtener personajes:", error);
    }
}

window.onload = obtenerPersonajes;
