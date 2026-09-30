/* función que facilita el proceso al frontend creando una función GET usando
    funciones asincronas que cree una solicitud de búsqueda y la maneje*/

function limpiarDatos(data){
    return data.docs.map((doc) => ({
        book_name: doc.title,
        book_author: doc.author_name[0] ?? "Autor desconocido",
        book_first_publish: doc.first_publish_year ?? null,
        books_found: data.num_found,
        book_languages: doc.language ?? "Lenguaje desconocido",
        book_key: doc.key
    }))
}

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
    return Response.json(limpiarDatos(data));
}