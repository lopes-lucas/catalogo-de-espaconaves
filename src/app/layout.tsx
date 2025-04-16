import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="site-logo">Catálogo de Espaçonaves</div>
          <nav>
            <Link href={"/"}>Início</Link>
            <Link href={"/spaceships"}>Espaçonaves</Link>
            <Link href={"/categorias"}>Categorias</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
