let carton = [0]
while (carton.length < 15) {
    let numRandom = Math.round(Math.random() * 30);
    /* console.log(numRandom) */
    carton.map(num => {
        if (num !== numRandom) {
            carton.push(numRandom)
            console.log(carton)
        }
    })

}
