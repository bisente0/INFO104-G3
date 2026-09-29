import { nextResponse } from "next/server";
import { obtenerPosts, agregarPost } from "../comunidad";

export async function GET() {
    return NextResponse.json(obtenerPosts());
}

export async function POST(request){
    const DATOS_FORMULARIO = await request.json();

    const CAMPOS_REQUERIDOS = ["user", "msg", "book_isbn13", "book_name"];
    const faltantes = CAMPOS_REQUERIDOS.filter((campo) => !DATOS_FORMULARIO[campo]);

    if (faltantes.length > 0) {
        return NextResponse.json(
            { error: `Faltan campos obligatorios: ${faltantes.join(", ")}` },
            { status: 400 }
        );
    }

    const NUEVO_POST = agregarPost(DATOS_FORMULARIO);

    return NextResponse.json(NUEVO_POST, { status: 201 });
}

