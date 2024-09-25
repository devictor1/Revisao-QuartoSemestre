# Inserindo comentários no código e docstring nas funções 
print("Programa de Subtração")
x=int(input("Digite o primeiro valor"))
y=int(input("Digite o segundo valor"))
def subtracao_dois_numeros(x,y):
    """Comentário explicando a função: Função criada para subtrair x e y, valores passados pelo usuário, retornando o resultado da subtração."""
    return x-y

print(subtracao_dois_numeros.__doc__)