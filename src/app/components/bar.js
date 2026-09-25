import Link from "next/link";
import styles from "./bar.module.css";

// array de objetos, href a medias jaja
const enlaces = [
    { texto : "INICIO", href : "/" },
    { texto : "BÚSQUEDA", href : "/busqueda" },
    { texto : "MI BIBLIOTECA", href : "/biblioteca" },
    { texto : "LOGROS", href : "/logros" }
]

export default function Bar()
{
    return (
        <header className={styles.header}>
            <div className={styles.marquesina}>
                <span className="marquesina-texto">
                   ★ HOLA A TODOS LOS MUCHACHOS!!!! ★
                </span>
            </div>
        <nav className={styles.nav}>

            {enlaces.map((enlace) => (
                <Link
                    key={enlace.href}
                    href={enlace.href}
                    className={`beveled-button ${styles.navBoton}`}
                    >
                        {enlace.texto}
                    </Link>
            ))}
        </nav>
        </header>
    );
}