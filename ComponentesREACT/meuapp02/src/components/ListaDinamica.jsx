/* 1) Renderizar Lista Dinâmica com Map:
Crie um componente que receba um array de nomes como propriedade e renderize cada nome em um item de lista (<li>) dentro de uma lista não ordenada (<ul>), usando o método map().*/

// Esse também é o componente filho

const ListaDinamica = ({ nomes }) => {
    return (
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    );
  };
  
  export default ListaDinamica;