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







export default function ArticlesPage() {
        return <div className={`${styles.biggestContainer}`}>
    <ShopHeader title = "E-commerce"/>
    <MyFirstComponent />
    <ul className={`${styles.cardsContainer}`}>
    {
      products.map(product => <li className={`${styles.cardContainer}`}>
      <CardMainComponent product={product}
      /> </li>)
    }
    </ul>
    </div>
    
}