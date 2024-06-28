import styles from "./styles/MyFirstComponent.module.css";

// Definizione delle props per il componente ShopHeader
type MyProps = {
    title: string; // Titolo da visualizzare nell'header
}

// Definizione del componente ShopHeader
export default function ShopHeader(props: MyProps) {
    return (
        <>
            {/* Titolo dell'header con classe CSS per lo stile */}
            <h1 className={`${styles.pageTitle}`}>{props.title}</h1>
        </>
    );
}
