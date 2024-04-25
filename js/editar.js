function incP(numero){
    const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
    const pokemon = pokemons.find(p => p.numero == numero)
    pokemon.partidas += 1

    localStorage.setItem("pokemons", JSON.stringify(pokemons))

    const card = document.querySelector(`#pokemon-${numero}`);
    card.querySelector(".part").textContent = `Partidas: ${pokemon.partidas}`;
}
function decP(numero){
    const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
    const pokemon = pokemons.find(p => p.numero == numero)
    pokemon.partidas -= 1
    if(pokemon.partidas < 0) pokemon.partidas = 0
    localStorage.setItem("pokemons", JSON.stringify(pokemons))

    const card = document.querySelector(`#pokemon-${numero}`);
    card.querySelector(".part").textContent = `Partidas: ${pokemon.partidas}`;
}

function incA(numero){
    const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
    const pokemon = pokemons.find(p => p.numero == numero)
    pokemon.abates += 1

    localStorage.setItem("pokemons", JSON.stringify(pokemons))

    const card = document.querySelector(`#pokemon-${numero}`);
    card.querySelector(".ab").textContent = `Abates: ${pokemon.abates}`;
}
function decA(numero){
    const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
    const pokemon = pokemons.find(p => p.numero == numero)
    pokemon.abates -= 1
    if(pokemon.abates < 0) pokemon.abates = 0
    localStorage.setItem("pokemons", JSON.stringify(pokemons))

    const card = document.querySelector(`#pokemon-${numero}`);
    card.querySelector(".ab").textContent = `Abates: ${pokemon.abates}`;
}