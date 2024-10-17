import { useEffect, useState } from "react"

function Relogio(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const interval = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
    }, 1000)
    return() => {clearInterval(interval);};
},[]);
    return(
        <>
        <h1>Hora Agora</h1>
        <h2>{hora}</h2>
        </>
    )
}

export default Relogio