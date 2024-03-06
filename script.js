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

//Pratica
const getUser = (id) => {

    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then(data => data.json())
        .catch(err => console.log(err))
}

const showUser = async (id) => {
    const user = await getUser(id)
    console.log(`O nome do usuario é: ${user.data.first_name}`)
}
showUser(3)