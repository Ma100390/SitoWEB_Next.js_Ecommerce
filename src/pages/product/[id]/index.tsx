// Importa l'array di prodotti "products" da "@/data/products".
import { products } from "@/data/products";
// Importa il componente ProductDetail dai moduli.
import ProductDetail from "@/components/learning/ProductDetail";
// Importa useRouter per ottenere i parametri dell'URL.
import { useRouter } from "next/router";
// Importa il tipo Product da "@/types/Product".
import { Product } from "@/types/Product";

// Definizione del componente ProductPage.
export default function ProductPage() {
    // Ottieni il router per ottenere il parametro "id" dall'URL.
    const router = useRouter();
    // Filtra l'array di prodotti in base all'ID specificato nell'URL.
    const filteredProducts: Product[] = products.filter((product) => product.id === router.query.id);

    // Parte del rendering del componente.
    return (
        <>
            {/* Mostra l'ID del prodotto dalla query dell'URL. */}
            <p>{router.query.id}</p>
            
            {/* Verifica se esiste un prodotto con l'ID specificato e mostra ProductDetail o un messaggio di "Prodotto non trovato". */}
            {filteredProducts[0] !== undefined ? (
                <ProductDetail product={filteredProducts[0]} />
            ) : (
                <p>Prodotto non trovato</p>
            )}
        </>
    );
}
