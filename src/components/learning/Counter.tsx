import { useEffect, useState } from "react";

export default function Form() {
    const [counter, setCounter] = useState<number>(0)
    const [name, setName] = useState<string>()
    const [lastname, setLastname] = useState<string>()
    const [password, setPassword] = useState<string>('')
    const [passwordError, setPasswordError] = useState<boolean>(true)

    const [displayPassword, setDisplayPassword] = useState<boolean>(false)

    useEffect(() => {
        setCounter(1)
    }, []) //mettendo array vuoto, le modifiche dentro a {} avvengono quando viene caricato il componente


    useEffect(() => {
        (password?.length < 8) ? setPasswordError(true) : setPasswordError(false)
    }, [password]) //[password] è un array di dipendenze


    return <>

    <button onClick={() => setCounter(counter => counter - 1)}>Diminuisci valore</button>
    <p>Il valore è {counter}</p>
    <button onClick={() => setCounter(counter => counter + 1)}>Aumenta valore</button>



    <p>Il nome: <b> {name} </b></p>  
    <p>Il cognome: <b> {lastname} </b></p>  


    <form action="" onSubmit={(event) => {
        event.preventDefault() //va sempre messo nei form altrimenti viene refreshata la pagina
        !passwordError && console.log(name, lastname, password);        
    }}>

        <input type="text" onChange={(event) => setName(event.target.value)}  placeholder="Enter your name"/>

        <br /> <input type="text" onChange={(event) => setLastname(event.target.value)} placeholder="Enter your last name"/>

        <br /> <input type= {displayPassword ? "text" : "password"} onChange={(event) => {
            setPassword(event.target.value);
            // trasferito dentro useEffect -> (event.target.value.length < 8) ? setPasswordError(true) : setPasswordError(false)
        }}  placeholder="Enter your password"/>


        <p onClick={() => setDisplayPassword(prev => !prev)}>
            {displayPassword ? "Nascondi" : "Mostra"} password
        </p>

        {passwordError ? <p>Password troppo corta</p> : <p>Password giusta</p>}
        <button disabled = {passwordError}>Submit</button>
    </form>


    </>
    }