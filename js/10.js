async function obtenerPersonajes() {
    try {
        const response = await fetch('http://gia.com.co:8080/empresarial');
        const datas = await response.json();
        console.log(datas);
    } catch (error) {
        console.error("Error al obtener personajes:", error);
    }
}

window.onload = obtenerPersonajes;
