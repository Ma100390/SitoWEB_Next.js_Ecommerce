import Image from "next/image"
import styles from "./styles/CardMainComponent.module.css"

type MyProps = {
    src: string,
    alt: string
}

export default function ComponentWithImage(image: MyProps) {
    return <>
    <Image
        src= {image.src}
        alt = {image.alt}
        width = {300}
        height = {200}
        className={`${styles.cardImage}`}
        />
    </>
}