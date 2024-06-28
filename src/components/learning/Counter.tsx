// Importa useEffect e useState dai moduli React.
import { useEffect, useState } from "react";

// Definizione del componente Form.
export default function Form() {
    // Dichiarazione dello stato "counter" utilizzando useState, inizializzato a 0.
    const [counter, setCounter] = useState<number>(0);
    // Dichiarazione dello stato "name" utilizzando useState, inizializzato come stringa vuota.
    const [name, setName] = useState<string>();
    // Dichiarazione dello stato "lastname" utilizzando useState, inizializzato come stringa vuota.
    const [lastname, setLastname] = useState<string>();
    // Dichiarazione dello stato "password" utilizzando useState, inizializzato come stringa vuota.
    const [password, setPassword] = useState<string>('');
    // Dichiarazione dello stato "passwordError" utilizzando useState, inizializzato a true.
    const [passwordError, setPasswordError] = useState<boolean>(true);
    // Dichiarazione dello stato "displayPassword" utilizzando useState, inizializzato a false.
    const [displayPassword, setDisplayPassword] = useState<boolean>(false);

    // Effetto collaterale che viene eseguito una sola volta al montaggio del componente.
    useEffect(() => {
        setCounter(1); // Imposta il valore di "counter" a 1 quando il componente viene montato.
    }, []); // L'effetto viene eseguito solo al montaggio, con un array di dipendenze vuoto.

    // Effetto collaterale che viene eseguito quando "password" cambia.
    useEffect(() => {
        // Verifica la lunghezza della password e imposta "passwordError" in base a essa.
        (password?.length < 8) ? setPasswordError(true) : setPasswordError(false);
    }, [password]); // L'effetto viene eseguito ogni volta che "password" cambia.

    // Parte del rendering del componente.
    return (
        <>
            {/* Pulsante per diminuire il valore di "counter". */}
            <button onClick={() => setCounter(counter => counter - 1)}>Diminuisci valore</button>
            {/* Mostra il valore corrente di "counter". */}
            <p>Il valore è {counter}</p>
            {/* Pulsante per aumentare il valore di "counter". */}
            <button onClick={() => setCounter(counter => counter + 1)}>Aumenta valore</button>

            {/* Mostra il nome e il cognome. */}
            <p>Il nome: <b> {name} </b></p>
            <p>Il cognome: <b> {lastname} </b></p>

            {/* Formulario con input per il nome, cognome e password. */}
            <form action="" onSubmit={(event) => {
                event.preventDefault(); // Evita il refresh della pagina quando si preme "Submit".
                !passwordError && console.log(name, lastname, password); // Log se la password è corretta.
            }}>
                {/* Input per il nome. */}
                <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />

                <br />
                {/* Input per il cognome. */}
                <input type="text" onChange={(event) => setLastname(event.target.value)} placeholder="Enter your last name" />

                <br />
                {/* Input per la password con possibilità di mostrare/nascondere la password. */}
                <input
                    type={displayPassword ? "text" : "password"}
                    onChange={(event) => {
                        setPassword(event.target.value);
                        // La validità della password viene gestita nell'effetto precedente.
                    }}
                    placeholder="Enter your password"
                />

                {/* Mostra o nasconde la password in base a "displayPassword". */}
                <p onClick={() => setDisplayPassword(prev => !prev)}>
                    {displayPassword ? "Nascondi" : "Mostra"} password
                </p>

                {/* Mostra un messaggio in base alla validità della password. */}
                {passwordError ? <p>Password troppo corta</p> : <p>Password giusta</p>}
                {/* Pulsante "Submit" disabilitato se c'è un errore nella password. */}
                <button disabled={passwordError}>Submit</button>
            </form>
        </>
    );
}
