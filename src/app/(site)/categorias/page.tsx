import spaceships from "@/app/data/spaceships.json"
import Link from "next/link"

export default function Page() {
    const categoriesSet = new Set(spaceships.map(ship => ship.category))
    const categoriesArray = Array.from(categoriesSet)
    return (
        <main>
            <h2>Categorias</h2>
            <ul>
                {categoriesArray.map(category => (
                    <li key={category}>
                        <Link href={`/categorias/${category.replace(' ', '_')}`}
                        className="btn">
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}