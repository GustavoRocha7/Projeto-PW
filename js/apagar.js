function apagar(numero) {
    const card = document.querySelector(`#pokemon-${numero}`);
    card.classList.add("apagando");
    card.addEventListener("animationend", () => card.remove());

    let pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
    pokemons = pokemons.filter(pokemon => pokemon.numero != numero);
    localStorage.setItem("pokemons", JSON.stringify(pokemons));

    atualizar();
}

