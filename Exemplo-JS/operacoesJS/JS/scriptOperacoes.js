
let escolha = parseInt(prompt("Digite aqui o número correspondente à opção escolhida:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Exponenciação\n6 - Radiciação\n7 - Sair"))
while (escolha !== 7){
switch (escolha) {
    case 1:
        var numero1 = parseInt(prompt("Digite um número inteiro abaixo para ser somado"))
        var numero2 = parseInt(prompt("Agora digite o outro número que será somado"))
        var soma = parseInt(numero1+numero2)
        alert("A soma dos números é " + soma)
        break
    case 2:
        var numero1 = parseInt(prompt("Digite um número inteiro abaixo para ser subtraído"))
        var numero2 = parseInt(prompt("Agora digite o outro número que irá subtrair"))
        var subtracao = parseInt(numero1-numero2)
        alert("A subtração dos números é " + subtracao)
        break
    case 3:
        var numero1 = parseInt(prompt("Digite um número inteiro abaixo para ser multiplicado"))
        var numero2 = parseInt(prompt("Agora digite o outro número que será multiplicado"))
        var multiplicacao = parseInt(numero1*numero2)
        alert("A multiplicação dos números é " + multiplicacao)
        break
    case 4:
        var numero1 = parseInt(prompt("Digite um número inteiro abaixo para ser dividido"))
        var numero2 = parseInt(prompt("Agora digite o outro número que irá dividir"))
        if (numero2 === 0) {
            alert("Número inválido! Não é possível dividir por zero!")
          } else {
            let divisao = numero1 / numero2
            alert("A divisão dos números é " + divisao)
          }
        break
    case 5:
        var numero1 = parseInt(prompt("Digite um número inteiro abaixo para ser elevado"))
        var numero2 = parseInt(prompt("Agora digite o outro número que irá elevar o anterior"))
        var exponenciacao = Math.pow(numero1,numero2)
        alert("A exponenciação dos números é " + exponenciacao)
        break
    case 6:
        var numero1 = parseInt(prompt("Digite um número inteiro abaixo para ser radiciado"))
        var numero2 = parseInt(prompt("Agora digite o outro número que irá radiciar o anterior"))
        if (numero2 === 0) {
            alert("Número inválido! Não é possível calcular a raiz de um número elevado a zero!");
        } else {
            var raiz = Math.pow(numero1, 1/numero2);
            alert("A raiz dos números é " + raiz);
        }
        break
    case 7:
        break
    default:
        alert("Opção inválida! Escolha uma dentre as disponíveis.")
    }
    escolha = parseInt(prompt("Digite aqui o número correspondente à operação escolhida:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Exponenciação\n6 - Radiciação\n7 - Sair"))
}