function atualizar() {
    const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
    const totalRegistrados = pokemons.length;
    document.querySelector("#total-registrados").innerText = totalRegistrados;
}
