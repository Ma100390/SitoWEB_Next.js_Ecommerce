import ProductDetail from '@/pages/ProductDetail'
import { products } from '@/data/products'
import { Product } from '@/types/Product'
import { useRouter } from 'next/router'
export default function ProductPage() {
    const router = useRouter()
    const searchedId = router.query.id
    const filteredProducts: Product[] =
        products.filter(product => product.id === searchedId)
    /*
    [1,2,4]
    const numeriFiltrati: number[] = array.filter(number => number === 3)
    numeriFiltrati[0] // ho trovato un numero
    [] // non ho trovato un numero
    condition ? operazione 1 : operazion 2
    */
    return <>
        {filteredProducts[0] !== undefined ?
            <ProductDetail product={filteredProducts[0]} />
            :
            <p>Prodotto non trovato</p>
        }
    </>
}