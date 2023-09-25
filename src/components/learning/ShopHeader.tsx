import styles from "./styles/MyFirstComponent.module.css"

type MyProps = {
    title: string
}


export default function ShopHeader(props: MyProps) {
    return <>
    <h1 className={`${styles.pageTitle}`}>{props.title}</h1>
    </>
}