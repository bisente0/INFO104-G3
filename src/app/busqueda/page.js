"use client";

import { useState } from "react";
import styles from "./busqueda.module.css";

export default function Busqueda() {
  const [busqueda, setBusqueda] = useState("");
  return (
    <main className={styles.main}>

      <section className={styles.cajaBusqueda}>
        <h1 className={styles.titulo}>
         BUSCAR LIBROS 🔍
        </h1>

         <div className={styles.buscador}>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Escribe un título, autor o ISBN"
          />

          <button className="beveled-button">
            BUSCAR
          </button>
        </div>

      </section>
    </main>
    
  );
}