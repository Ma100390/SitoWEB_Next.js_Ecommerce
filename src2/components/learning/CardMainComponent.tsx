import ComponentInfo from "./ComponentInfo";
import ComponentWithImage from "./ComponentWithImage";
import { Product } from "@/types/Product";

// Definizione delle props per il componente CardMainComponent
type Props = {
    product: Product // Riceve un oggetto di tipo Product come prop
}

// Definizione del componente CardMainComponent
export default function CardMainComponent(props: Props) {
    return (
        <>
            {/* Includi il componente ComponentWithImage */}
            <ComponentWithImage
                src={props.product.img.src} // Passa la sorgente dell'immagine come prop
                alt={props.product.img.alt} // Passa il testo alternativo dell'immagine come prop
            />

            {/* Includi il componente ComponentInfo */}
            <ComponentInfo
                id={props.product.id} // Passa l'id del prodotto come prop
                title={props.product.title} // Passa il titolo del prodotto come prop
                subtitle={props.product.subtitle} // Passa il sottotitolo del prodotto come prop
                description={props.product.description} // Passa la descrizione del prodotto come prop
                price={props.product.price} // Passa il prezzo del prodotto come prop
            />
        </>
    );
}
