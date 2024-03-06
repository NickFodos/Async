const PrimeiraFunction = () => {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("Esperou isso aqui!")
            resolve()
        }, 1000)
    })
}
const segundaFunction = async () => {
    console.log("iniciou")
    await PrimeiraFunction()
    console.log("terminou")
}
