/* 8) Renderizar Conteúdo Condicional:
Crie um componente que, baseado em uma variável booleana, renderize "Bom dia" se for true e "Boa noite" se for false.*/
function Condicional(){
    const agora = new Date();
    const hora = agora.getHours();

    if (hora >=5 && hora < 17){
        var bool = true;
    }else if (hora >= 17 ||  hora < 5) {
        var bool = false;
        }

    if (bool === true){
    return(
        <>
        <p>Bom dia</p>
        </>
    )
    }else {
    return(
        <>
        <p>Boa noite</p>
        </>
    )
    }
}

export default Condicional