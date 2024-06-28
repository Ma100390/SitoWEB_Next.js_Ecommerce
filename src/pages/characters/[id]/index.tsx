// Importa il tipo Character da "@/types/Character".
import { Character } from "@/types/Character";
// Importa axios per le richieste HTTP.
import axios from "axios";
// Importa useRouter per ottenere i parametri dell'URL.
import { useRouter } from "next/router";
// Importa useEffect e useState dai moduli React.
import { useEffect, useState } from "react";

// Definizione del componente ChararterDetailPage.
export default function ChararterDetailPage() {
    // Dichiarazione dello stato "personaggio" utilizzando useState.
    const [personaggio, setpersonaggio] = useState<Character>();
    // Ottieni il router per ottenere il parametro "id" dall'URL.
    const router = useRouter();
    const characterId = router.query.id;

    // Effetto collaterale che viene eseguito quando "characterId" cambia.
    useEffect(() => {
        // Verifica se "characterId" è definito (diverso da undefined).
        if (characterId !== undefined) {
            // Esegue una richiesta HTTP per ottenere i dettagli del personaggio usando l'API di Rick and Morty.
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
                .then((response) => {
                    // Imposta lo stato "personaggio" con i dati ricevuti dalla richiesta.
                    setpersonaggio(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [characterId]); // L'effetto viene eseguito ogni volta che "characterId" cambia.

    // Parte del rendering del componente.
    return (
        <>
            {/* Mostra il nome del personaggio se è stato caricato. */}
            <p>Sei nella pagina personaggio! {personaggio?.name}</p>
        </>
    );
}
