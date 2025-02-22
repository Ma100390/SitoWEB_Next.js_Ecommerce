
import { Product } from "@/types/Product";

export const products: Product[]  = [{
    id: "abc123",
    title: "Air Force",
    subtitle: "Scarpe",
    price: 23,
    img: {
        src: "/1901155_P.webp", 
        alt: "air force"
    },
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
},
{
    id: "abc456",
    title: "Bic",
    subtitle: "Penna",
    price: 2,
    img: {
        src: "/penna-bic-cristal-inchiostro-blu-1mm-box-da-50-biro.jpg", 
        alt: "penna bic"
    },
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
},
{
    id: "abc789",
    title: "Air up",
    subtitle: "Borraccia",
    price: 2,
    img: {
        src: "/AirUp_PDP_.webp", 
        alt: "borraccia air up"
    },
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
}]