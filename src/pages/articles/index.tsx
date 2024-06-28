// Importa i componenti MyFirstComponent, ShopHeader, CardMainComponent dai rispettivi moduli.
import MyFirstComponent from "@/components/learning/MyFirstComponent";
import ShopHeader from "@/components/learning/ShopHeader";
import CardMainComponent from "@/components/learning/CardMainComponent";
// Importa l'array di prodotti "products" da "@/data/products".
import { products } from "@/data/products";
// Importa gli stili dal modulo CSS specifico (MyFirstComponent.module.css).
import styles from "@/components/learning/styles/MyFirstComponent.module.css";

// Definizione del componente ArticlesPage.
export default function ArticlesPage() {
    // Il componente mostra una pagina con un'intestazione, un primo componente, e una lista di card.

    return (
        <div className={`${styles.biggestContainer}`}>
            {/* Mostra l'intestazione con il titolo "E-commerce". */}
            <ShopHeader title="E-commerce" />
            {/* Mostra il componente MyFirstComponent. */}
            <MyFirstComponent />
            {/* Lista di card dei prodotti. */}
            <ul className={`${styles.cardsContainer}`}>
                {/* Mappa l'array di prodotti e crea una card per ciascun prodotto. */}
                {products.map((product) => (
                    <a href={`/product/${product.id}`} key={product.id}>
                        {/* Crea un link alla pagina del prodotto con l'ID specifico. */}
                        <li className={`${styles.cardContainer}`}>
                            {/* Mostra il componente CardMainComponent per il prodotto corrente. */}
                            <CardMainComponent product={product} />
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    );
}
