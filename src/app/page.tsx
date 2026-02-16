import Image from "next/image";
import Link from "next/link";
// import "./page.module.css"
export default function Home(){
    return (
        <main>
            <h1>Conheça as Naves do Universo de Star Wars</h1>

            <p>
                <Link className="btn" href={"/spaceships"}>Ver todas</Link>
            </p>
        </main>
    )
}