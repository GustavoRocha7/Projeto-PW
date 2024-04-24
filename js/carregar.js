console.log("Carregando dados...");

const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];

pokemons.forEach((pokemon) => {
    const card = document.createElement("div");
    card.id = `pokemon-${pokemon.numero}`;
    card.classList.add("nes-container", "with-title", "is-centered");

    card.innerHTML = `
            <p class="title">#${pokemon.numero}</p>
            <p>${pokemon.nome}</p>
            <p>Elemento: ${pokemon.elemento}</p>
            <div class="nes-table-responsive">
                <table class="nes-table is-bordered is-centered">
                    <tbody>
                        <tr>
                            <td>Altura</td>
                            <td>${pokemon.altura} m</td>
                        </tr>
                        <tr>
                            <td>Peso</td>
                            <td>${pokemon.peso} kg</td>
                        </tr>
                        <tr>
                            <td>Espécie</td>
                            <td>${pokemon.especie}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick="apagar('${pokemon.numero}')" type="button" class="nes-btn is-error">Apagar</button>
    `;

    document.querySelector("#lista-de-tarefas").appendChild(card);
});

atualizar();



