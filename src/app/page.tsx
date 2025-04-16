import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
    return (
        <main>
            <h2>Conheça as Naves do Universo</h2>

            <p>
                <Link className="btn" href={"/categorias"}>Ver Todos</Link>
            </p>
        </main>
    );
}