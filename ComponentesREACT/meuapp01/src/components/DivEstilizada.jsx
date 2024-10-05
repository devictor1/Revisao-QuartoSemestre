/* 9) Renderizar uma Div com Estilo:
Crie um componente que renderize uma <div> com texto dentro e que tenha estilo inline, como cor de fundo e margem personalizada.*/
function DivEstilizada(){

    return(
        <>
        <div style={{
            backgroundColor: 'tomato',
            fontFamily: 'comic-sans',
            fontSize: '3em',
            fontWeight: 'bold',
            border:  '0.2em double black',
            boxShadow:  '0px 0px .2em rgba(300,61,15,545)'

            }} >Sou um lindo texto com fundo tomate</div>
        </>
    )
}

export default DivEstilizada