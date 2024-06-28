type Props = {
    id: number,
    name:string
}


export default function CharacterInfo (props:Props) {


    return<>
    <a href={`/characters/${props.id}`}>{props.id}</a>
    <p>{props.name}</p>
    </>

}