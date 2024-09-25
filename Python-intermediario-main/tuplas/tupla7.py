timesTupla = ("Botafogo", "Fortaleza", "Palmeiras", "Flamengo", "Cruzeiro", "São Paulo FC", "Bahia", "Internacional", "Vasco da Gama", "Atletico Mineiro", "Red Bull Bragantino", "CA Paranaense", "EC Juventude", "Criciúma", "Gremio", "Fluminense", "Corinthians", "EC Vitória", "Cuiabá", "AC Goianense")

a = input("Digite seu time : ")
aIndex = timesTupla.index(a)

if a in timesTupla:
    print(a,"está no Brasileirão em", aIndex+1, "º lugar")
else:
    print(a,"não está no Brasileirão")