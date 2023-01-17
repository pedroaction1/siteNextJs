import { useState } from 'react'

function Main() {
    return (
        <div>
            <h1>Bruh</h1>
            <Contador />
        </div>
    )
}

function Contador() {

    const [contador, setContador] = useState(1);

    function contar() {
        setContador(contador + 1)
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={contar}>Clicar</button>
        </div>
    )
}

export default Main