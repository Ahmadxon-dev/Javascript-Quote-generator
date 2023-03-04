const API = 'https://api.quotable.io/random'
const btn = document.querySelector(".btn")
let contentText = document.querySelector(".content")
let authorText = document.querySelector(".author")
const fetchData = async ()=> {
    try{
        await fetch(API)
            .then(response => response.json())
            .then(data => {
                contentText.innerHTML = data.content
                authorText.innerHTML = data.author
            })

    }catch (e) {
        console.log(e)
    }
}
btn.addEventListener("click", ()=> {
    fetchData()
})