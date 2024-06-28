import styles from "./styles/MyFirstComponent.module.css";

// Definizione del componente MyFirstComponent
export default function MyFirstComponent() {
    return (
        <>
            {/* Paragrafo con classe CSS per lo stile */}
            <p className={`${styles.pageSubtitle}`}>My first component!</p>
        </>
    );
}
