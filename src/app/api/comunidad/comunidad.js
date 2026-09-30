import fs from "node:fs";
import path from "node:path";

const RUTA_ARCHIVO = path.join(process.cwd(), "public/post_test.json");

function leerArchivo() {
    const CONTENIDO = fs.readFileSync(RUTA_ARCHIVO, "utf-8");
    return JSON.parse(CONTENIDO); // convierter a array
}

function escribirArchivo(posts) {
    fs.writeFileSync(RUTA_ARCHIVO, JSON.stringify(posts, null, 2), "utf-8");
}

function fechaHoy() {
    const HOY = new Date();
    const DIA = String(HOY.getDate()).padStart(2, "0");
    const MES = String(HOY.getMonth()).padStart(2, "0");
    const ANO = String(HOY.getFullYear());
    return `${DIA}-${MES}-${ANO}`;
}

export function obtenerPosts() {
    return leerArchivo();
}

export function agregarPost(datos) {
    const POSTS = leerArchivo();

    const NUEVO_POST = {
        user : datos.user,
        date : fechaHoy(),
        msg : datos.msg,
        book_isbn13 : datos.isbn13,
        book_name : datos.book_name,
        book_author : datos.book_author,
        book_year : datos.book_year,
        book_category : datos.book_category,
        book_language : datos.book_language,
        book_publisher : datos.book_publisher
    }

    POSTS.push(NUEVO_POST);
    escribirArchivo(POSTS);

    return NUEVO_POST;
}

// sistema ranking
export function obtenerTopLibros(cantidad = 3) {
    const conteo = {};

    for (const post of obtenerPosts()) {
        const clave = post.book_isbn13;

    if (!conteo[clave]) {
        conteo[clave] = {
        book_isbn13: clave,
        book_name: post.book_name,
        book_author: post.book_author,
        total: 0,
        lectores: [],
    };
    }

    conteo[clave].total++;

    if (!conteo[clave].lectores.includes(post.user)) {
        conteo[clave].lectores.push(post.user);
        }
    }

    return Object.values(conteo)
    .sort((a, b) => b.total - a.total)
    .slice(0, cantidad);
    }




