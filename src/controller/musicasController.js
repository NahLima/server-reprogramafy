const { response } = require("express")
const musicas = require("../model/musicas.json")

//console.log(musicas)

const novaListaMusicas = musicas.map(musica => {
    const novaMusica = {
        id: musica.id,
        name: musica.name,
        amostra: musica.preview_url,
        album:musica.album.name,
        imagem: musica.album.url,
        artista: musica.artists.name
    }

    return novaMusica
})


const novaListaArtistaMusica = musicas.map(musica => {
    const listaArtistaMusica = {
        id: musica.id,
        name: musica.name,
        artista: musica.artists.name
    }
    return listaArtistaMusica
})


const listaArtistas = musicas.map(item => {
    return {
        id: item.artists.id,
        nome: item.artists.name
    }
})


const artistaIdv = musicas.map(item => {
    const individualArt = {
        id:item.artists.id,
        artista:item.artists.name,
        musica: item.musica.name
    }
})

//----------------------------------------------------------------------

const getAllMusicas = (request,response) => {
    //console.log(request.url) // é opcional usar o console aqui
    response.status(200).send(novaListaMusicas)
}

const getMusicaById = (request,response) => {
    const id = request.params.id
    const musicaId = novaListaMusicas.find(item => item.id == id)
        //console.log(musicaId)
        response.status(200).send(musicaId)
}

const getArtistas = (request,response) => {

   const listaSemRepetir = []

   listaArtistas.forEach(artista => {
        const encontrei = listaSemRepetir.find(item => item.id === artista.id)
        if (!encontrei) {
            listaSemRepetir.push(artista)
        }
   })
  
    response.status(200).send(listaSemRepetir)
}



const getMusicaArtista = (request,response) => {
    const artistaNome = request.params.artistas
    const musicaArt= novaListaArtistaMusica.filter(item => item.artista == artistaNome)

    console.log(musicaArt)

    if(!artistaNome){
            response.status(404).send({message: "artista não encontrado"})
        }else{
            response.status(200).send(musicaArt)
        }
}

const getArtistaMusic = (request,response) =>{
    const artistaInd = request.params.listaArtistaMusica
    const musicasArt = artistaIdv.find(item => item.id == artistaInd)

    if(!musicasArt){
        response.status(200).send(musicasArt)
        }else{
            response.status(404).send({message: "artista não encontrado"})
        }
    }



module.exports = {
    getAllMusicas,
    getMusicaById,
    getArtistas,
    getMusicaArtista
}