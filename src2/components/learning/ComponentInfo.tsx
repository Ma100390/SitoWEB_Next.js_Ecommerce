import styles from "./styles/CardInfo.module.css";
import AggiuntaContatore from "./AggiuntaContatore";

// Definizione delle props per il componente ComponentInfo
type MyProps = {
    id: number, // ID del prodotto
    title: string, // Titolo del prodotto
    subtitle: string, // Sottotitolo del prodotto
    price: number, // Prezzo del prodotto
    description: string, // Descrizione del prodotto
}

// Definizione del componente ComponentInfo
export default function ComponentInfo(product: MyProps) {
    // Funzione per gestire l'aggiornamento del contatore
    const inputChange = (counter: number) => {
        // Mostra il valore del contatore nel console.log
        console.log(`Il valore del contatore è: ${counter}`);

        // Qui potresti effettuare una chiamata API o eseguire altre azioni desiderate
    };

    return (
        <div className={`${styles.cardInfo}`}>
            <div className={`${styles.cardTitleSection}`}>
                <h2>{product.title}</h2>
                <h5 className={`${styles.cardSubtitle}`}>{product.subtitle.toUpperCase()}</h5>
            </div>
            <div className={`${styles.cardDescription}`}>
                {product.description}
            </div>
            <div className={`${styles.buttonSection}`}>
                <span>{product.price}$</span>
                <a href="#">BUY NOW</a>
                
                {/* Passa la funzione inputChange come prop al componente AggiuntaContatore */}
                <AggiuntaContatore inputChange={inputChange} />
            </div>
        </div>
    );
}
