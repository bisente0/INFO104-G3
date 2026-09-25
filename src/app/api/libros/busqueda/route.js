/* función que facilita el proceso al frontend creando una función GET usando
    funciones asincronas que cree una solicitud de búsqueda y la maneje*/
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q"); // encuentre la solicitud 'q'
    if (!query) {
        return Response.json(
            { error: "Missing query" },
            { status: 400 }
        );
    }

    const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
    )

    // si response no ok... entonces atao de open lib.......
    if (!response.ok) {
        return Response.json(
            { error: "Open Library request failed" },
            { status: 500 }
        );
    }

    const data = await response.json();
    return Response.json(data); // CAMBIAR ESTO PARA HACERLO MÁS BONITO Y QUE NO RETORNE EL JSON ENTERO.

}