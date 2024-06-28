import { Product } from '@/types/Product'
import { useState } from 'react'
import AggiuntaContatore from '@/components/learning/AggiuntaContatore'


type MyProps =
 {
    product: Product
}
export default function ProductDetail(props: MyProps) {
    const [productQuantity, setProductQuantity] = useState<number>(1)
    return <div>
        <p>{props.product.title}</p>
        <p>{props.product.subtitle}</p>
        <p>{props.product.description}</p>
        <AggiuntaContatore inputChange={(value: number) => setProductQuantity(value)} />
        <button>Acquista x {productQuantity}</button>
    </div>
}