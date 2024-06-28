// Importa gli stili dal modulo CSS specifico (MyFirstComponent.module.css).
import styles from "./styles/MyFirstComponent.module.css";

// Definizione del tipo di props che il componente ShopHeader accetta.
type MyProps = {
    title: string; // Prop "title" di tipo stringa per il titolo della pagina.
};

// Definizione del componente ShopHeader che riceve le props specificate.
export default function ShopHeader(props: MyProps) {
    // Il componente mostra il titolo della pagina utilizzando gli stili definiti.

    return (
        <>
            {/* Mostra il titolo della pagina utilizzando gli stili definiti. */}
            <h1 className={`${styles.pageTitle}`}>{props.title}</h1>
        </>
    );
}
