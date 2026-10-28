"use client";

import GET from '../api/libros/busqueda/route';
import { useState } from "react";
import Bar from '../components/bar';
import styles from "./busqueda.module.css";

export default function Busqueda() {
  const [busqueda, setBusqueda] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!busqueda.trim()) return;
    
    window.location.href = `/resultados?q=${encodeURIComponent(busqueda)}`;
  }; 

  return (
    <>
      <Bar />
    <main className={styles.main}>

      <section className={styles.card}>
        <h1 className={styles.titulo}>
         BUSCAR LIBROS 🔍
        </h1>

         <form onSubmit={handleSearch} className={styles.buscador}>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Escribe un título, autor o ISBN"
          />


          <button className="beveled-button">
            BUSCAR
          </button>
        </form>

      </section>
    </main>
    </>
  );
}