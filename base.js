

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}0&limit=${limit}`

function convertToPokemonToHtml (pokemon) {
    return `
    <li class="pokemon">
                <span class="name">${pokemon.name}</span>
                
                <span class="number">#004</span>
                

                <div class="detail">
                    <ol class="types">  
<li class="type">#FIRE</li>
                    </ol>

                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" 
                    alt="${pokemon.name}">
                </div>
            </li>
    `
}

const pokemonList = document.getElementById('pokemonList')


fetch(url)     
    .then( (Response)  => Response.json())
    .then( (jsonBody)  => jsonBody.results)
    .then((pokemons)   => {


        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons [i];
            pokemonList.innerHTML += convertPokemonToLi (pokemon)

}


})  
    .catch((error) => console.error(error))





