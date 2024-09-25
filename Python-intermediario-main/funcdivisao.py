# Inserindo comentários no código e docstring nas funções 
print("Programa de Divisão")
x=int(input("Digite o primeiro valor"))
y=int(input("Digite o segundo valor"))
def divisao_dois_numeros(x,y):
    """Comentário explicando a função: Função criada para dividir x e y, valores passados pelo usuário, retornando a divisão."""
    return x/y

print(divisao_dois_numeros.__doc__)