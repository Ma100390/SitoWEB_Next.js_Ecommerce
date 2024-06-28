// Importa il componente Image da "next/image".
import Image from "next/image";
// Importa gli stili dal modulo CSS specifico (CardMainComponent.module.css).
import styles from "./styles/CardMainComponent.module.css";

// Definizione del tipo di props che il componente ComponentWithImage accetta.
type MyProps = {
    src: string,  // Prop "src" di tipo stringa per il percorso dell'immagine.
    alt: string   // Prop "alt" di tipo stringa per il testo alternativo dell'immagine.
}

// Definizione del componente ComponentWithImage che riceve le props specificate.
export default function ComponentWithImage(image: MyProps) {
    // Il componente mostra un'immagine con il percorso e il testo alternativo specificati.

    // Parte del rendering del componente.
    return (
        <>
            {/* Utilizza il componente Image per mostrare l'immagine. */}
            <Image
                src={image.src}         // Percorso dell'immagine.
                alt={image.alt}         // Testo alternativo dell'immagine.
                width={300}             // Larghezza dell'immagine.
                height={200}            // Altezza dell'immagine.
                className={`${styles.cardImage}`} // Classi CSS per lo stile.
            />
        </>
    );
}
