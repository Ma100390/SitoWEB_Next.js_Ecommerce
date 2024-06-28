// Importa i componenti ComponentWithImage e ShopHeader dai rispettivi moduli.
import ComponentWithImage from "@/components/learning/ComponentWithImage";
import ShopHeader from "@/components/learning/ShopHeader";

// Definizione del componente ShopPage.
export default function ShopPage() {
    // Il componente mostra una pagina del negozio con un'intestazione e un'immagine.

    return (
        <>
            {/* Mostra l'intestazione del negozio con il titolo "E-commerce". */}
            <ShopHeader title="E-commerce" />
            {/* Mostra un'immagine di un prodotto con il percorso e il testo alternativo specificati. */}
            <ComponentWithImage
                src="/1901155_P.webp" // Percorso dell'immagine.
                alt="Scarpe"           // Testo alternativo dell'immagine.
            />
        </>
    );
}
