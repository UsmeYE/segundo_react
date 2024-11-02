import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleAdd = () => setCount(count + 1)
    const handleSubtract = () => setCount(count - 1)
    const handleReset = () => setCount(0)

    return (
        <section>
            <h2>Contador: {count}</h2>
            <button onClick={handleAdd}>Incrementar</button>
            <button onClick={handleSubtract}>Decrementar</button>
            <button onClick={handleReset}>Resetear contador</button>
            <hr />
        </section>
    )
}

export default Counter