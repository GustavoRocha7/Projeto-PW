console.log("Carregando dados...");

const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];

pokemons.forEach((pokemon) => {
    const card = document.createElement("div");
    card.id = `pokemon-${pokemon.numero}`;
    card.classList.add("nes-container", "with-title", "is-centered","teste");
  

    card.innerHTML = `
    &nbsp;
    <div>
            <p class="title">#${pokemon.numero}</p>
            <p>${pokemon.nome}</p>
            <div class="nes-container is-rounded">
                <img src="${pokemon.img}" alt="" width="150">
            </div>
            <p>Elemento: ${pokemon.elemento}</p>
            </div>
            <div class="nes-table-responsive">
                <table class="nes-table is-bordered is-centered" style="margin-top:6rem;">
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
            <div style="margin-top: 5rem;">
            <div class="butao">
            <p class="part">Partidas: ${pokemon.partidas}</p>
            <button onClick="decP('${pokemon.numero}')"type="button">-</button>
            <button onClick="incP('${pokemon.numero}')" type="button">+</button>
        </div>
        <div class="butao">
            <p class="ab">Abates: ${pokemon.abates}</p>
            <button onClick="decA('${pokemon.numero}')"type="button">-</button>
            <button onClick="incA('${pokemon.numero}')"type="button">+</button>
        </div>
        </div>
        <button onClick="apagar('${pokemon.numero}')" type="button" class="nes-btn is-error" style="height: 50px;margin-top: 8rem">Apagar</button>
    `;

    document.querySelector("#lista-de-tarefas").appendChild(card);
});

atualizar();



