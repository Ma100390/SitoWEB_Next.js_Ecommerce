// Importa il componente CharacterCard dai moduli.
import CharacterCard from "@/components/characters/CharactersCard";
// Importa il tipo Character da "@/types/Character".
import { Character } from "@/types/Character";
// Importa axios per le richieste HTTP.
import axios from "axios";
// Importa useEffect e useState dai moduli React.
import { useEffect, useState } from "react";

// Definizione del componente CharartersPage.
export default function CharartersPage() {
    // Dichiarazione dello stato "personaggi" utilizzando useState.
    const [personaggi, setpersonaggi] = useState<Character[]>();

    // Effetto collaterale che viene eseguito una sola volta al montaggio del componente.
    useEffect(() => {
        // Esegue una richiesta HTTP per ottenere la lista di personaggi usando l'API di Rick and Morty.
        axios.get('https://rickandmortyapi.com/api/character')
            .then((response) => {
                // Imposta lo stato "personaggi" con la lista di personaggi ricevuta dalla richiesta.
                setpersonaggi(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); // L'effetto viene eseguito solo al montaggio, con un array di dipendenze vuoto.

    // Parte del rendering del componente.
    return (
        <>
            {/* Mostra un messaggio sulla pagina. */}
            <p>Pagina personaggi</p>
            {/* Mappa la lista di personaggi e mostra una card per ciascun personaggio. */}
            {personaggi?.map((personaggio) => (
                <CharacterCard character={personaggio} key={personaggio.id} />
            ))}
        </>
    );
}
