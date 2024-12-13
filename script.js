const sec = document.querySelector(".quote");
const aut = document.querySelector(".author");
const but = document.querySelector(".next");
but.addEventListener("click",
    async function Generate(){
        let raw = await fetch("https://dummyjson.com/quotes/random");
        const result = await raw.json();
        sec.innerText = `${result.quote}`
        aut.innerText = ` - ${result.author}`;
    }
)
