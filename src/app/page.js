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
            NOVEDADES DEL MES!!!
          </h2>
          <div className={styles.grid}>
            LA IDEA ES RENDERIZAR LOS LIBROS ACÁ CON UN .MAP()
            MISIÓN DE CREAR OBJETOS TIPO BOOKINFO O ALGO ASÍ PARA PODER RECORRER TODOS Y IMPRIMIRLOS CON GRID.
            PROBABLEMENTE NECESITE OTROS DOS ARCHIVOS EN COMPONENTES, UNO DE LIBROS Y OTRO EL MÓDULO DE ESTE,
            Y PARA TESTEAR, UN .JSON CON LOS LIBROS A LEER.
          </div>
        </section>
        </div>

        <div className={styles.columnaLateral}>
        <section className={styles.sugerencias}>
          <h2 className={styles.tituloSeccion}>
            SUGERIDOS!!!!
          </h2>
          <div className={styles.grid}>
            AQUÍ SE DESARROLLARÍA UN ALGORITMO PARA ENCONTRAR, POR ORDEN DE PRIORIDAD, LOS LIBROS CON MÁS
            COINCIDENCIAS DE GÉNERO SEGÚN LA BIBLIOTECA DEL USUARIO.
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
