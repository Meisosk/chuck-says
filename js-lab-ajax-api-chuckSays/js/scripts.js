const joke = document.querySelector(".quote-div")
const refresh = document.querySelector("#fresh-quote")
const submitBttnCat = document.querySelector("#submitForm")
const catInput = document.querySelector("#categoryInput")
const defaultCat = "dev"





submitBttnCat.addEventListener("click", function (e) {
    e.preventDefault()
    let category = catInput.value
    getQuote(category)
})



refresh.addEventListener("click", (e) => getQuote(defaultCat))

function getQuote (category){
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then((response) => response.json())
        .then(function(data){ 
            console.log(data)
            joke.innerText = data.value
        })
}







document.addEventListener("DOMContentLoaded", (e) => {
    getQuote(defaultCat)
    function getCat (){
        fetch(`https://api.chucknorris.io/jokes/categories`)
            .then((response) => response.json())
            .then(function(data){ 
                console.log(data)
                data.map(function(category){
                    const option = document.createElement("option");
                    option.innerText = category;
                    catInput.appendChild(option);
                })
                    
                console.log(catInput)
            })
    
    }
    getCat()

})