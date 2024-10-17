import {useState} from 'react';

function Contador(){
    const [contador,setContador] = useState(0);
    const incrementar = () =>{
        setContador(contador + 1);
    }
    const decrementar = () =>{
        setContador(contador - 1);
    }
    return(
        <>
        <h2>Contador:</h2>
        <p>Valor: {contador}</p> 
        <button type="button" onClick={incrementar}>Clique aqui para aumentar o contador</button>
        <br/>
        <br/>
        <button type="button" onClick={decrementar}>Clique aqui para diminuir o contador</button>
        </>
    )
}

export default Contador