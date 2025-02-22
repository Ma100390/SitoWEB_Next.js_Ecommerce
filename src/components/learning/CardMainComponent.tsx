// Importa i componenti ComponentInfo e ComponentWithImage dai rispettivi moduli.
import ComponentInfo from "./ComponentInfo";
import ComponentWithImage from "./ComponentWithImage";
// Importa il tipo Product da "@/types/Product".
import { Product } from "@/types/Product";

// Definizione del tipo di props che il componente CardMainComponent accetta.
type Props = {
    product: Product; // Prop "product" di tipo Product.
}

// Definizione del componente CardMainComponent che riceve le props specificate.
export default function CardMainComponent(props: Props) {
    // Il componente restituisce due componenti figlio: ComponentWithImage e ComponentInfo.

    return (
        <>
            {/* Passa le props relative all'immagine a ComponentWithImage. */}
            <ComponentWithImage
                src={props.product.img.src}
                alt={props.product.img.alt}
            />
            {/* Passa le props relative alle informazioni del prodotto a ComponentInfo. */}
            <ComponentInfo
                title={props.product.title}
                subtitle={props.product.subtitle}
                description={props.product.description}
                price={props.product.price}
            />
        </>
    );
}
