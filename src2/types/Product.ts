export type Product = {
    id: string,
    title: string,
    subtitle: string,
    price: number,
    img: {
        src: string, 
        alt: string
    },
    description: string
}