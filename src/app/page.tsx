import Image from "next/image";
import Link from "next/link";
// import "./page.module.css"
export default function Home(){
    return (
        <main>
            <h1>Conheça as Naves do Universo de Star Wars</h1>
            <h2>Atualização de página</h2>
            <div className="tecnologias">
                <h2>React</h2>
                <h2>Next</h2>
                <h2>Sass</h2>
            </div>

            <p>
                <Link className="btn" href={"/spaceships"}>Ver todas</Link>
            </p>
        </main>
    )
}