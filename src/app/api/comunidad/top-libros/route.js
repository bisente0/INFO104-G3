import { NextResponse } from "next/server";
import { obtenerTopLibros } from "../../comunidad";

export const dynamic = "force-dynamic";

export async function GET() {
    return NextResponse.json(obtenerTopLibros(3));
}