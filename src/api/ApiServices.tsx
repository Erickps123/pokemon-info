
class ApiServices{  
    static API_URL = 'https://pokeapi.co/api/v2/'



    static async getAllPokemons() {

        const response = await fetch(this.API_URL+`pokemon?limit=649&offset=0`)
        .then(response => response.json())
        .then(response=>{
            return response["results"]
        })
        .catch(err=>{return []})
        return response;
    }
    static async getPokemonData(pokemonId: Number) {
        const response = await  fetch(this.API_URL+'pokemon/'+pokemonId) // General Data
        .then(generalData => generalData.json())
        .then(generalData=>{
            fetch(this.API_URL+'pokemon/'+pokemonId+'/encounters')
                .then(encounters => encounters.json())
                .then(encounters=>{
                    
                })
                .catch(err=>{return []})
        })
        .catch(err=>{return []})
        return response;
    }

}

export default ApiServices