"use client";

import { useEffect, useState } from "react";
import styles from "./resultados.module.css";
import Link from "next/link";

export default function Resultados() {
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("q");

    fetch(`/api/libros/busqueda?q=${encodeURIComponent(query)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al buscar libros");
        return res.json();
      })
      .then((data) => setLibros(data))
      .catch(() => setError("No se pudieron cargar los libros :("))
      .finally(() => setCargando(false)); });

  return (
    <main className={styles.main}>
      <section className={`beveled-box ${styles.card}`}>
        <h1 className={styles.titulo}>☆ RESULTADOS DE BÚSQUEDA ☆</h1>
      </section>

      {cargando && <p>Buscando ↺</p>}
      {error && <p>{error}</p>}

      {!cargando && !error && libros.length === 0 && (
        <p>No se encontraron libros</p>
      )}

      <section className={styles.libros}>
        {libros.map((libro) => (
          <article className={`beveled-box ${styles.libro}`}
            key={libro.book_key}>
            <div>
              <h2>{libro.book_name}</h2>
              <p>Autor: {libro.book_author}</p>
              <p>
                Primera publicación:{" "}
                {libro.book_first_publish ?? "Desconocida"}
              </p>
            </div>

            <button
              type="button"
              className={`beveled-button ${styles.botonAnadir}`}>
              AÑADIR 📚
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
