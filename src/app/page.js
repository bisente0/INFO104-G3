import styles from "./page.module.css";
import Bar from "./components/bar";
import Link from "next/link";
import { obtenerPosts, obtenerTopLibros } from "./api/comunidad/comunidad";


export const dynamic = "force-dynamic";

export default function Home() {
  const ranking = obtenerTopLibros(3);
  const lectores = obtenerPosts();



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
          <div className={styles.slider}>
            <div className={styles.sliderContenido}>
            {lectores.map((lector, i) => (
            <div className={styles.post} key ={i}>

              <h3>{lector.user}</h3>
              <strong>{lector.book_name}</strong>
              <p>{lector.msg}</p>

              <img
                src={`https://covers.openlibrary.org/b/isbn/${lector.book_isbn13}-M.jpg`}
                alt={`Portada de ${lector.book_name}`}
                className={styles.portada}
              />

              </div>
              ))}
          </div>
          </div>
        </section>
      </div>

      <div className={styles.columnaLateral}>
        <section className={styles.sugerencias}>
          <h2 className={styles.tituloSeccion}>RANKING</h2>
          <div className={styles.grid}>
            {ranking.length === 0 && <p>No hay datos todavía.</p>}
            {ranking.map((libro, i) => (
              <details key={libro.book_isbn13}>
                <summary>
                  {i + 1}. {libro.book_name} ({libro.book_author}) — {libro.total} lecturas
                  </summary>
                  <ul>
                    {libro.lectores.map((usuario) => (
                      <li key={usuario}>{usuario}</li>
                      ))}
                      </ul>
                      </details>
                    ))}
                    </div>
                    </section>
                    </div>
                    </div>


      <footer className={`beveled-box ${styles.footer}`}>
        <p> PROTOTIPO DE APLICACIÓN. ÚLTIMA UPDATE (29/09/2026) </p>
      </footer>

      </main>
    </>

  );
}
