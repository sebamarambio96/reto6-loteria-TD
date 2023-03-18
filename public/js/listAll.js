//DOM 
const containerCards = document.getElementById('containerCards')
const fragmentCards = document.createDocumentFragment()
const templateCard = document.getElementById('templateCard').content
const templatoNum = document.getElementById('templatoNum').content
//Retorna TODAS las mascotas
async function getDataAll() {
    try {
        //Obtener datos
        const response = await axios.get('http://localhost:3001/listCard')
        const arrayCards = response.data
        console.log(arrayCards)

        while (containerCards.firstChild) {
            containerCards.removeChild(containerCards.firstChild);
        }
        arrayCards.map(card => {
            console.log(card.card)
            let id = templateCard.getElementById('idCard')
            /* let containerNum = templateCard.getElementById('containerNum') */
            id.textContent = card.id
            

            let containerNum = templateCard.getElementById('containerNum')
            const fragmentNum = document.createDocumentFragment()
            let numbers = card.card
            while (containerNum.firstChild) {
                containerNum.removeChild(containerNum.firstChild);
            }
            numbers.map(numRandom => {
                console.log(numRandom)
                const num = templatoNum.getElementById('num')
                num.textContent = numRandom
                const clone = templatoNum.cloneNode(true)
                fragmentNum.appendChild(clone)
            })
            containerNum.appendChild(fragmentNum)

            const clone = templateCard.cloneNode(true)
            fragmentCards.appendChild(clone)
        })

        /* containerCards.appendChild(fragmentCards) */
        containerCards.appendChild(fragmentCards)
    } catch (error) {
        console.log(error)
    }
}


getDataAll()