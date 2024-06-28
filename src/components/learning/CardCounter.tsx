// Importa useEffect e useState dai moduli React.
import { useEffect, useState } from "react";
// Importa gli stili dal modulo CSS specifico (CardInfo.module.css).
import styles from "./styles/CardInfo.module.css";

// Definizione delle props accettate dal componente CardCounter.
type MyProps = {
    // Funzione che riceve un valore numerico come argomento e non restituisce nulla.
    changedState(value: number): void;
}

// Definizione del componente CardCounter che riceve le props specificate.
export default function CardCounter(props: MyProps) {
    // Dichiarazione dello stato counter utilizzando useState e inizializzato a 0.
    const [counter, setCounter] = useState<number>(0);

    // Effetto collaterale che viene eseguito ogni volta che "counter" cambia.
    useEffect(() => {
        // Chiama la funzione "changedState" passando il valore corrente di "counter".
        props.changedState(counter);
    }, [counter]); // L'effetto viene eseguito ogni volta che "counter" cambia.

    // Parte del rendering del componente.
    return (
        <div className={`${styles.cardCounter}`}>
            {/* Pulsante per diminuire il contatore quando viene cliccato. */}
            <button onClick={() => setCounter(counter => counter - 1)}>Diminuisci</button>
            {/* Mostra il valore corrente di "counter". */}
            <span> {counter} </span>
            {/* Pulsante per aumentare il contatore quando viene cliccato. */}
            <button onClick={() => setCounter(counter => counter + 1)}>Aumenta</button>
        </div>
    );
}
