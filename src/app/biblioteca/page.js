"use client";

import { useEffect, useState } from "react";
import styles from "./biblio.module.css";
import Link from "next/link";

export default function Biblioteca(){
   const [biblioteca, setBiblioteca] = useState([]);
   const [reseñas, setReseñas] = useState({});

   
    return (
      <main className={styles.main}>
    <section className={`beveled-box ${styles.card} ${styles.hero}`}>
          <h1 className={styles.titulopixel}>☆ MI BIBLIOTECA ☆</h1>
    </section>
    <section className={`${styles.botonAñadir}`}>  
        <Link href="/busqueda" className={`beveled-button ${styles.botonAñadir}`}>
          AÑADIR LIBRO 📚
        </Link>
    </section>  
    </main>
  );
}