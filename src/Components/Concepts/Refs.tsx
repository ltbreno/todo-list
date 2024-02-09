import { FormEvent, useRef } from "react"
import styles from "./style.module.scss"

export const Refs: React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null) // { current: null }
    const inputEmailRef = useRef<HTMLInputElement>(null) // { current: null }
    const inputPasswordRef = useRef<HTMLInputElement>(null) // { current: null }

    function handleOnSubmit(event: FormEvent) {
       event.preventDefault() // EVITA QUE A PAGINA SEJA RECARREGADA AO SUBMETER O FORMULARIO
    }

    return (
        <form className={styles.container} onSubmit={(event) => handleOnSubmit(event)} >
            <h1>UseRef</h1>

            <br />
            <input type="text" placeholder="Nome Completo" ref={ inputRef } />
            <br />
            <input type="email" placeholder="E-mail" ref={ inputEmailRef } />
            <br />
            <input type="password" placeholder="senha" ref={ inputPasswordRef } />

            <br />
            <button type="submit">Submeter</button>
        </form>
    )
}