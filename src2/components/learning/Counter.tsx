import { useEffect, useState } from "react";

export default function Form() {
    // Definizione degli stati utilizzati nel componente
    const [counter, setCounter] = useState<number>(0); // Stato per il contatore
    const [name, setName] = useState<string>(); // Stato per il nome
    const [lastname, setLastname] = useState<string>(); // Stato per il cognome
    const [password, setPassword] = useState<string>(''); // Stato per la password
    const [passwordError, setPasswordError] = useState<boolean>(true); // Stato per l'errore della password

    const [displayPassword, setDisplayPassword] = useState<boolean>(false); // Stato per mostrare/nascondere la password

    // useEffect per impostare il contatore iniziale a 1 al caricamento del componente
    useEffect(() => {
        setCounter(1);
    }, []);

    // useEffect per gestire l'errore della password quando la password cambia
    useEffect(() => {
        // Verifica se la lunghezza della password è inferiore a 8 caratteri
        (password?.length < 8) ? setPasswordError(true) : setPasswordError(false);
    }, [password]); // Dipendenza da 'password', verrà eseguito quando 'password' cambia

    return (
        <>
            {/* Contatore */}
            <button onClick={() => setCounter(counter => counter - 1)}>Diminuisci valore</button>
            <p>Il valore è {counter}</p>
            <button onClick={() => setCounter(counter => counter + 1)}>Aumenta valore</button>

            {/* Nome e cognome */}
            <p>Il nome: <b> {name} </b></p>
            <p>Il cognome: <b> {lastname} </b></p>

            {/* Form per l'inserimento dei dati */}
            <form action="" onSubmit={(event) => {
                event.preventDefault(); // Impedisce il refresh della pagina al submit
                !passwordError && console.log(name, lastname, password);
            }}>
                {/* Input per il nome */}
                <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />

                <br />

                {/* Input per il cognome */}
                <input type="text" onChange={(event) => setLastname(event.target.value)} placeholder="Enter your last name" />

                <br />

                {/* Input per la password */}
                <input
                    type={displayPassword ? "text" : "password"}
                    onChange={(event) => {
                        setPassword(event.target.value);
                        // La logica per gestire l'errore della password è stata spostata nell'useEffect
                    }}
                    placeholder="Enter your password"
                />

                {/* Mostra/Nascondi password */}
                <p onClick={() => setDisplayPassword(prev => !prev)}>
                    {displayPassword ? "Nascondi" : "Mostra"} password
                </p>

                {/* Visualizzazione errore della password */}
                {passwordError ? <p>Password troppo corta</p> : <p>Password giusta</p>}

                {/* Bottone di invio disabilitato se c'è un errore nella password */}
                <button disabled={passwordError}>Submit</button>
            </form>
        </>
    );
}
