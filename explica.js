// como manusear um objeto. 
// criando uma nova lista 
const musicas = [{
    "id": 1,
    "name": "Evidências",
    "duration_ms": 279280,
    "preview_url": "https://p.scdn.co/mp3-preview/3e4f45a788d7ecb0e87a32bf57119cd8124c8710?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
    "album": {
        "id": 154,
        "name": "Do Tamanho Do Nosso Amor",
        "release_date": "2013-01-01",
        "total_tracks": 14,
        "url": "https://i.scdn.co/image/ab67616d00001e0252b5ab856085fe47ccec3cce"
    },
    "artists": {
        "id": "7gfkYbxpguEc9bm6m8TpAr",
        "name": "Chitãozinho & Xororó"
    }

}]

//console.log(musicas)

//

let listaNovaMusica = [] // novo array

for (let i = 0; i < musicas.length; i++) { // ler o array todo usando um laço
    //console.log(musicas[i].name)
    let musica = musicas[i] 
    const novaMusica = {
        id: musica.id,
        name: musica.name,
        amostra: musica.preview_url,
        album:musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
    }

        console.log(novaMusica)
    listaNovaMusica.push(novaMusica)
}

console.log(listaNovaMusica)

// map cria um novo array --> ele percorre uma lista ed acordo com a regra que vc criar
// map mapeia todo mundo e retorna a lista

const lista = musicas.map(musica => {
   
    const novaMusica2 = {
        id: musica.id,
        name: musica.name,
        amostra: musica.preview_url,
        album:musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
    }
   
    return novaMusica2
})

console.log(lista)
