import Image from "next/image";
import styles from "./page.module.css";
import Bar from "./components/bar";
import Link from "next/link";
import EmblaCarousel from "embla-carousel";


export default function Home() {

  return (
    <>
      <Bar />
      <main className={styles.main}>
        <section className={`beveled-box ${styles.hero}`}>
          <h1 className={styles.tituloPixel}>SUPERPAGINA!!</h1>
          <p className={styles.subtitulo}>
            <span className="parpadear">  ☆★ ATENCIOOOON ★☆  </span>
            LEE IGNORANTE 🔥🔥🔥🔥
          </p>
          <Link href="/busqueda" className="beveled-button">
            BÚSQUEDA 🔍
          </Link>
        </section>

        <div className={styles.layoutColumnas}>

        <div className={styles.columnaPrincipal}>
        <section className={styles.novedades}>
          <h2 className={styles.tituloSeccion}>
            PUBLICACIONES RECIENTES
          </h2>
          <div className={styles.grid}>
            Establecer colección de datos iniciales
            (usuario, libro, mensaje, autor),
            diseñar función POST(request) en API/COMUNIDAD,
            usar la función en el frontend 
            (diseño visualización).
          </div>
        </section>
        </div>

        <div className={styles.columnaLateral}>
        <section className={styles.sugerencias}>
          <h2 className={styles.tituloSeccion}>
            RANKING
          </h2>
          <div className={styles.grid}>
            Usar colección de datos iniciales para tener información
            reemplazable de un ranking de libros más leídos por los usuarios.
            (Desarrollar a futuro en api/comunidad), esto implica tener un sistema
            de registro para los usuarios.
          </div>
        </section>
        </div>
      </div>

      <footer className={`beveled-box ${styles.footer}`}>
        <p> PROTOTIPO DE APLICACIÓN. ÚLTIMA UPDATE (27/08/2026) </p>
      </footer>

      </main>
    </>

  );
}
