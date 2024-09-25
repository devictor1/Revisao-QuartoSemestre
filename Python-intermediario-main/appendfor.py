# Curso Intermediário de Python
# Nome do Desenvolvedor: Victor Fregni Gogorza
# Versão1.0
# Exercício de lógica de programação utilizando a linguagem de programação Python

# Concatenação de listas usando for e range para iterar e append para junção

numeros = [1, 44, 6, 3, 432, 3, 6, 1, 5, 4]

for i in range(len(numeros)):
    numeros.append(numeros[i]**2)

print(numeros)