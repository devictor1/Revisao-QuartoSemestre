let preco = parseFloat(prompt("Digite o preço do produto desejado"))
let desconto = parseFloat(prompt("Agora digite a porcentagem que o desconto oferece"))
let precoDesconto = preco - (preco * (desconto / 100))
alert("O preço do produto com o desconto aplicado passa de " + preco + " para " + precoDesconto)