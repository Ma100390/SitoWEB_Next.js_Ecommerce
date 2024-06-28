// Importa useState dai moduli React.
import { useState } from "react";
// Importa gli stili dal modulo CSS specifico (CardInfo.module.css).
import styles from "./styles/CardInfo.module.css";
// Importa il componente CardCounter dal modulo corrente "./CardCounter".
import CardCounter from "./CardCounter";

// Definizione del tipo di props che il componente ComponentInfo accetta.
type MyProps = {
    title: string,       // Prop "title" di tipo stringa.
    subtitle: string,    // Prop "subtitle" di tipo stringa.
    price: number,       // Prop "price" di tipo numerico.
    description: string  // Prop "description" di tipo stringa.
}

// Definizione del componente ComponentInfo che riceve le props specificate.
export default function ComponentInfo(product: MyProps) {
    // Il componente mostra informazioni sul prodotto, un contatore e un prezzo.

    // Dichiarazione dello stato "count" utilizzando useState.
    const [count, setCount] = useState<number>();

    // Parte del rendering del componente.
    return (
        <div className={`${styles.cardInfo}`}>
            <div className={`${styles.cardTitleSection}`}>
                <h2>{product.title}</h2>
                <h5 className={`${styles.cardSubtitle}`}>{product.subtitle.toUpperCase()}</h5>
            </div>
            <div className={`${styles.cardDescription}`}>
                {product.description}
            </div>

            {/* Mostra il valore corrente del contatore. */}
            <p>Current counter value: {count}</p>

            {/* Includi il componente CardCounter e passa la funzione "setCount" come prop. */}
            <CardCounter changedState={(value: number) => setCount(value)} />

            <div className={`${styles.buttonSection}`}>
                <span>{product.price}$ </span>
                <a href="#" onClick={() => console.log(count)}>BUY NOW</a>
            </div>
        </div>
    );
}
