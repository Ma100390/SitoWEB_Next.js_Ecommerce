import { Character } from "@/types/Character"

import CharactersInfo from "./CharactersInfo"

    type Props = {
        character: Character
    }
    
    
    
    
    export default function CharacterCard(props:Props){

return <>
<CharactersInfo id={props.character.id} name={props.character.name} />
<p>{props.character.status}</p>
</>


}