listaFrutas = ["maçã","laranja","banana","abacaxi","limao","toranja","kiwi","pocã","jaca","graviola"]
print(listaFrutas)
for i in listaFrutas:
    print(i) # imprime cada item da lista

print(len(listaFrutas)) #  imprime o tamanho da lista
print(listaFrutas[-1])  #  imprime o último item da lista
print(listaFrutas[1:10])    # imprime os itens da lista de índice 1 a 10 (não inclui o indíce 10)
print(listaFrutas[:5])  # imprime os itens da lista de índice 0 a 5 (não inclui o índice 5)
print(listaFrutas[7:])  # imprime os itens da lista de índice 7 até o final
print(listaFrutas[:-1])   # imprime os itens da lista de índice 0 até o final (não inclui o último)
print(listaFrutas[-7:-1])   # imprime os itens da lista de índice -7 até -1 (não incluso o índíce -1 (O último))