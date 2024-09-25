# Inserindo comentários no código e docstring nas funções 
print("Programa de Multiplicação")
x=int(input("Digite o primeiro valor"))
y=int(input("Digite o segundo valor"))
def multiplicacao_dois_numeros(x,y):
    """Comentário explicando a função: Função criada para multiplicar x e y, valores passados pelo usuário, retornando a multiplicação."""
    return x*y

print(multiplicacao_dois_numeros.__doc__)