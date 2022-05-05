import React from "react"
import ListLinks from "../components/assets/ListLinks"

export default function Home(){
    return(
    <main className="initial">
        <ul>
            <ListLinks pagina="💪 EXERCÍCIOS" link="/Exercicios" />
            <ListLinks pagina="🍛 ALIMENTAÇÃO" link="/Alimentacao" />
        </ul>
    </main>
    )
}