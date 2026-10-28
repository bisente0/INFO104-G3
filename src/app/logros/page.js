import Bar from "../components/bar";
import styles from "./logros.module.css";

const logros = [
    {
        id: 1,
        titulo: "LOGRO 01",
        descripcion: "PIPIPPIIPI",
        icono: "🔥",
        desbloqueado: true
    },
    {
        id: 2,
        titulo: "LOGRO 02",
        descripcion: "BLABLABLA",
        icono: "🚬",
        desbloqueado: true
    },
    {
        id: 3,
        titulo: "LOGRO 03",
        descripcion: "TA BLOKEAO",
        icono: "💀",
        desbloqueado: false
    },
    {
        id: 4,
        titulo: "LOGRO 67",
        descripcion: "ta blokiaoaoooaoo",
        icono: "😴",
        desbloqueado: false
    }
];

export default function Logros() {
    const desbloqueados = logros.filter((logro) => 
        logro.desbloqueado).length;

    return (
        <>
            <Bar />
            <main className={styles.main}>
                <section className={`beveled-box ${styles.card}`}>
                    <h1 className={styles.titulo}>
                        ☆ MIS LOGROS ☆
                    </h1>
                    <p className={styles.contador}>
                        {desbloqueados} de {logros.length} de desbloqueados
                    </p>
                </section>

                <section className={styles.logros}>
                    {logros.map((logro) => (
                        <article
                            key = {logro.id}
                            className={`${styles.logro} ${logro.desbloqueado ? styles.desbloqueado : styles.bloqueado}`}

                        >
                            <div className={styles.medalla}>
                                {logro.desbloqueado ? logro.icono: "🔒"}
                            </div>
                            <h2 className={styles.logroTitulo}>
                                {logro.titulo}
                            </h2>
                            <p className={styles.descripcion}>
                                {logro.descripcion}
                            </p>
                            <span className={styles.estado}>
                                {logro.desbloqueado ? "DESBLOKEAO" : "BLOKEAO"}
                            </span>
                        </article>
                    ))}
                </section>
            </main>
        </>
    )
}