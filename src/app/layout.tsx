import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        <div>
          EXERCÍCIO 3 - CATÁLOGO DE ESPAÇONAVES
        </div>
        <nav className="nav">
          <Link href={"/"}>Início</Link>
          <Link href={"/spaceships"}>Espaçonaves</Link>
          <Link href={"/categories"}>Categorias</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
