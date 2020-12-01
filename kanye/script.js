const chuck = document.getElementById("chuck");
const quotes = document.getElementById('quotes');
chuck.addEventListener("mouseover", getChucked);

function getChucked() {
    axios.get("http://api.icndb.com/jokes/random")
        .then((response) => {
            const joke = document.createElement('p');
            joke.innerHTML = response.data.value.joke;
            quotes.appendChild(joke);
        });
}