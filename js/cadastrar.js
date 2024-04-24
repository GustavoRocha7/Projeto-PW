document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", () => {

        const form = document.querySelector("form")

        const pokemon = {
            numero: form.numero.value,
            nome: form.nome.value,
            elemento: form.elemento.value,
            altura: form.altura.value, 
            peso: form.peso.value, 
            especie: form.especie.value
        }
        
        if(validar(pokemon)){
            console.log(pokemon);
            let pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];
            pokemons.push(pokemon);
            localStorage.setItem("pokemons", JSON.stringify(pokemons));
            window.location = "/";
        }

});

function validar(pokemon){
    let valid = true;
    limparErros();

    if (isNaN(pokemon.numero) || pokemon.numero <= 0){ 
        document.querySelector("#numero").classList.add("is-error");
        document.querySelector("#numero-error").innerText = "Número inválido";
        valid = false;
    }
    if (pokemon.nome === ""){
        document.querySelector("#nome").classList.add("is-error");
        document.querySelector("#nome-error").innerText = "O nome é obrigatório";
        valid = false;
    }
    if (pokemon.elemento === ""){
        document.querySelector("#elemento").classList.add("is-error");
        document.querySelector("#elemento-error").innerText = "O elemento é obrigatório";
        valid = false;
    }
    if (isNaN(pokemon.altura) || pokemon.altura <= 0){ 
        document.querySelector("#altura").classList.add("is-error");
        document.querySelector("#altura-error").innerText = "Altura inválida";
        valid = false;
    }
    if (isNaN(pokemon.peso) || pokemon.peso <= 0){
        document.querySelector("#peso").classList.add("is-error");
        document.querySelector("#peso-error").innerText = "Peso inválido";
        valid = false;
    }
    if (pokemon.especie === ""){
        document.querySelector("#especie").classList.add("is-error");
        document.querySelector("#especie-error").innerText = "A espécie é obrigatória";
        valid = false;
    }

    return valid;
}

function limparErros(){
    document
        .querySelectorAll(".nes-input.is-error, .nes-textarea.is-error")
        .forEach( campo => campo.classList.remove("is-error"));

    document
        .querySelectorAll("span.is-error")
        .forEach(span => span.innerText = "");
}
