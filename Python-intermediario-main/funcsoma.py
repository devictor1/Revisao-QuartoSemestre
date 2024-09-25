# Inserindo comentários no código e docstring nas funções 
print("Programa de Soma")
x=int(input("Digite o primeiro valor"))
y=int(input("Digite o segundo valor"))
def soma_dois_numeros(x,y):
    """Comentário explicando a função: Função criada para somar x e y, valores passados pelo usuário, retornando a soma."""
    return x+y

print(soma_dois_numeros.__doc__)