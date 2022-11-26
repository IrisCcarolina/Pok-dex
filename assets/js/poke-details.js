const pokemonDetailslist = document.getElementById('pokemonsDetailslist');
const loadDetails = document.getElementById('loadMoreDetails');
const back = document.getElementById('back');
const maxRecord = 151;
const limit = 4;
let offset = 0;

function loadPokemonDetail(offset,limit){
    pokeApi.getPokemons(offset,limit).then((pokemons =[])=> {
        pokemonDetailslist.innerHTML+=pokemons.map((pokemon)=>
        `
        <div class="pokemonDetails">
            <li class="pokemon ${pokemon.type}">
                <span class="number">#00${pokemon.number}</span><br>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}                    
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        
    
            <div class="characteristicsPokemon">
                <div class="description">
                    <ul class="descriptionList">
                        
                        <li>ABILITY:  </li>
                        <li>EXPERIENCE:  </li>
                        <li>HEIGHT:  </li>
                        <li>WEIGHT:  </li>
                        
                    </ul>
                </div>
                <div class="description">
                    <ul class="descriptionList">
                        
                        <li>${pokemon.ability}</li>
                        <li>${pokemon.height}</li>
                        <li>${pokemon.weight}</li>
                        <li>${pokemon.experience}</li>
                
                    </ul>
                </div>
            </div>
        </div>
    
    `
            
        ).join('');
        
    })
}

loadPokemonDetail(offset,limit)

loadDetails.addEventListener('click',() => {

    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if(qtdRecordNextPage>=maxRecord){
        const newLimit = maxRecord - offset;
        loadPokemonDetail(offset,limit)
        buttonLoadMore.parentElement.removeChild(loadDetails)

    } else{
        loadPokemonDetail(offset,limit)
    }
    
})

backButton.addEventListener('click',()=>{
    window.location='index.html'
})