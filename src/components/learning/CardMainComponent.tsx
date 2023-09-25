import ComponentInfo from "./ComponentInfo";
import ComponentWithImage from "./ComponentWithImage";
import { Product } from "@/types/Product";

type Props = {
    product: Product
}


export default function CardMainComponent(props: Props) {
    return <>
    <ComponentWithImage
    src = {props.product.img.src}
    alt = {props.product.img.alt}
    />

    <ComponentInfo 
    title = {props.product.title}
    subtitle = {props.product.subtitle}
    description = {props.product.description}
    price = {props.product.price}

    />
    </>
}