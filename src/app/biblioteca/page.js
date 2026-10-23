"use client";

import { useState } from "react";
import styles from "./biblio.module.css";

export default function Biblioteca(){
   const [biblioteca, setBiblioteca] = useState("");
    return (
      <main className={styles.main}>
    <section className={`beveled-box ${styles.card} ${styles.hero}`}>
          <h1 className={styles.titulopixel}>☆ MI BIBLIOTECA ☆</h1>
    </section>
    </main>
  );
}