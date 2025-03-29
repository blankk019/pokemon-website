async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await result.json();
        const pokemonSprite = data.sprites.front_default;
        const myImg = document.getElementById("pokemonImg").src = pokemonSprite;e
    }catch(error){
        console.log("Error:", error)
    }
};
