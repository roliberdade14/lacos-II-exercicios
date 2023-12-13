
const atacantes = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

for (let i = 0; i < atacantes.length; i++){
    const temporada = i + 1

    
    for (let j = 0; j < atacantes[i].length; j++){
        const numeroDeGols = atacantes[i][j]

        console.log(`Atacante ${i + 1} - Temporada ${temporada}: ${numeroDeGols} Gols`)

    }

}