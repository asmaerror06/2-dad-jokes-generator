const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "9L0qVvI6Y/ANUbhbg7KJPA==1mB89KrBuuqyYnkW";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },

};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke() {


    try {
        jokeEl.innerText = "Updating..";
        btnEl.disabled = true;
        btnEl.innerText = "Loading.."
        const response = await fetch(apiURL, options);
        const data = await response.json();


        btnEl.disabled = true;
        btnEl.innerText = "Tell Me A Joke"

        jokeEl.innerText = data[0].joke;

    } catch (error) {
        jokeEl.innerText = "An error happend, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me A Joke"

        console.log(error);
    }
}

btnEl.addEventListener("click", getJoke);