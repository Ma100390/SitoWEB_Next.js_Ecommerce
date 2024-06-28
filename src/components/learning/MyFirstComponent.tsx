import styles from "./styles/MyFirstComponent.module.css"

export default function MyFirstComponent() {
    return <>
    <p className={`${styles.pageSubtitle}`}>My first component!</p>
    </>
}