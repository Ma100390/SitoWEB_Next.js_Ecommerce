import { useEffect, useState } from "react";

// Definizione delle prop del componente
type MyProps = {
    inputChange: (counter: number) => void; // Una funzione che accetta un numero e non restituisce nulla
}

// Definizione del componente AggiuntaContatore
export default function AggiuntaContatore(props: MyProps) {
    // Definizione dello stato per il contatore
    const [counter, setCounter] = useState<number>(0);

    // useEffect viene utilizzato per effettuare azioni quando il componente si monta o il valore di 'counter' cambia
    useEffect(() => {
        // Chiamiamo la funzione 'inputChange' con il valore corrente del contatore quando 'counter' cambia
        props.inputChange(counter);
    }, [counter, props.inputChange]); // L'array delle dipendenze assicura che useEffect venga eseguito quando 'counter' o 'props.inputChange' cambiano

    return (
        <div>
            {/* Bottone per diminuire il valore del contatore */}
            <button onClick={() => setCounter(counter - 1)}>Diminuisci valore</button>
            {/* Visualizza il valore corrente del contatore */}
            <p>Il valore è {counter}</p>
            {/* Bottone per aumentare il valore del contatore */}
            <button onClick={() => setCounter(counter + 1)}>Aumenta valore</button>
        </div>
    );
}

