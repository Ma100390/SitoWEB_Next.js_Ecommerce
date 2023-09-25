import styles from "./styles/CardInfo.module.css"

type MyProps = {
    title: string,
    subtitle: string,
    price: number,
    description: string
}

export default function ComponentInfo(product: MyProps) {

    return <div className={`${styles.cardInfo}`}>

    <div className={`${styles.cardTitleSection}`}>

    <h2>{product.title}</h2>

    <h5 className = {`${styles.cardSubtitle}`}>{product.subtitle.toUpperCase()}</h5>
    </div>



    <div className = {`${styles.cardDescription}`}>

    {product.description}

    </div>



    <div className={`${styles.buttonSection}`}>

    <span>{product.price}$ </span>

    <a href="#">BUY NOW</a>

    </div>
    
    </div>
}