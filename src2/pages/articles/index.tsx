import MyFirstComponent from "@/components/learning/MyFirstComponent";
import ShopHeader from "@/components/learning/ShopHeader";
import CardMainComponent from "@/components/learning/CardMainComponent";
import { products } from "@/data/products";
import styles from "@/components/learning/styles/MyFirstComponent.module.css"






// let cardList: any = [];
// products.forEach((product,index)=>{
//   cardList.push( 
//     <li key={index} className={`${styles.cardContainer}`}>
//     <CardMainComponent 
//     title = {product.title} 
//     subtitle = {product.subtitle}
//     price = {product.price}
//     img = {product.img}
//     description = {product.description}
//     /> </li>)
// })







// Import dei componenti necessari e delle risorse






// Definizione del componente ArticlesPage
export default function ArticlesPage() {
    return (
        <div className={`${styles.biggestContainer}`}>
            {/* Intestazione della pagina con il titolo "E-commerce" */}
            <ShopHeader title="E-commerce" />
            
            {/* Componente personalizzato MyFirstComponent */}
            <MyFirstComponent />
            
            {/* Lista di card dei prodotti */}
            <ul className={`${styles.cardsContainer}`}>
                {
                    // Mappa l'array di prodotti per generare le card dei prodotti
                    products.map(product => (
                        <li className={`${styles.cardContainer}`}>
                            {/* Passa il singolo prodotto come prop a CardMainComponent */}
                            <CardMainComponent product={product} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
