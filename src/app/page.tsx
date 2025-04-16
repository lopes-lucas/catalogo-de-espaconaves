import Link from "next/link";
import "./globals.css";

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