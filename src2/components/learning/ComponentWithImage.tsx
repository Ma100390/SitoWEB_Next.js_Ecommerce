import Image from "next/image";
import styles from "./styles/CardMainComponent.module.css";

// Definizione delle props per il componente ComponentWithImage
type MyProps = {
    src: string, // URL dell'immagine
    alt: string, // Testo alternativo per l'immagine
};

// Definizione del componente ComponentWithImage
export default function ComponentWithImage(image: MyProps) {
    return (
        <>
            {/* Utilizza il componente Next.js Image per visualizzare l'immagine */}
            <Image
                src={image.src} // Passa l'URL dell'immagine come prop
                alt={image.alt} // Passa il testo alternativo come prop
                width={300} // Larghezza desiderata dell'immagine
                height={200} // Altezza desiderata dell'immagine
                className={`${styles.cardImage}`} // Classe CSS per lo stile dell'immagine
            />
        </>
    );
}
