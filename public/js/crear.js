const containerCards = document.getElementById('containerCards')
const fragmentCards = document.createDocumentFragment()
const templateReady = document.getElementById('templateReady').content
const templateError = document.getElementById('templateError').content
const btn = document.getElementById('btn');

//Retorna TODAS las mascotas
async function createCards(num) {
    try {
        //Obtener datos
        await axios.post(`http://localhost:3001/create/${num}`)

        while (containerCards.firstChild) {
            containerCards.removeChild(containerCards.firstChild);
        }
        const clone = templateReady.cloneNode(true)
        fragmentCards.appendChild(clone)
        containerCards.appendChild(fragmentCards)

    } catch (error) {
        while (containerCards.firstChild) {
            containerCards.removeChild(containerCards.firstChild);
        }
        const clone = templateError.cloneNode(true)
        fragmentCards.appendChild(clone)
        containerCards.appendChild(fragmentCards)
    }
}
//Obtener cantidad que se desea crear
btn.addEventListener('click', e => {
    e.preventDefault()
    const howMany = document.getElementById('howMany').value;
    createCards(howMany)
})
