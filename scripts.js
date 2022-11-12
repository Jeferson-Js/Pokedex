const pokemonName = document.querySelector(".pokemonName");
const pokemonNumber = document.querySelector(".pokemonNumber");
const pokemonImage = document.querySelector(".pokemonImage");
const pokeInput = document.querySelector(".pokeInput");
const pokeForm = document.querySelector("form");

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const Response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    );

    const data = await Response.json();

    return data;
};

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = "Loading....";
    pokemonNumber.innerHTML = " ";

    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonImage.style.display = "block";
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src =
            data["sprites"]["versions"]["generation-v"]["black-white"][
                "animated"
            ]["front_default"];
        pokeInput.value = "";
    } else {
        pokemonImage.style.display = "none";
        pokemonName.innerHTML = "Not Found...";
        pokemonNumber.innerHTML = " ";

    }
};

pokeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    renderPokemon(pokeInput.value.toLowerCase());
});

renderPokemon(searchPokemon);
