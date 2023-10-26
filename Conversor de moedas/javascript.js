const convertButton = document.querySelector(".convert-button")
const moedas = document.querySelector(".moedas")
const Real = document.querySelector(".Real")


function convertValues() {

    const inputValor1Value = document.querySelector(".valor1").value
    const valor2Value = document.querySelector(".valor2")
    const valor3Value = document.querySelector(".valor3")


    const dolarToday = 4.93
    const euroToday = 5.26
    const libraToday = 6.07
    const bitcoinToday = 131.000209
    const real = 1.00






    if (moedas.value == "dolar") {
        valor3Value.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor1Value / dolarToday)
    }
    if (moedas.value == "euro") {
        valor3Value.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor1Value / euroToday)
    }
    if (moedas.value == "libra") {
        valor3Value.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor1Value / libraToday)
    }

    if (moedas.value == "bitcoin") {
        valor3Value.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValor1Value / bitcoinToday)

    }
    if (moedas.value == "real") {
        valor3Value.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor1Value / real)
    }




    if (Real.value == 'dolar1') {
        valor2Value.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor1Value)
    }
    if (Real.value == "euro1") {
        valor2Value.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor1Value)
    }
    if (Real.value == "libra1") {
        valor2Value.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor1Value)
    }

    if (Real.value == "bitcoin1") {
        valor2Value.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValor1Value)

    }
    if (Real.value == "real1") {
        valor2Value.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor1Value)
    }
}






function changeBrasil1() {
    const Brasil1 = document.querySelector(".Brasil1")

    const brasilImage = document.querySelector(".Brasil")

    if (Real.value == "real1") {
        Brasil1.innerHTML = " Real "
        brasilImage.src = "./assets/Real.png"
    }
    if (Real.value == "dolar1") {
        Brasil1.innerHTML = "Dólar "
        brasilImage.src = "./assets/Dolar.png"
    }
    if (Real.value == "euro1") {
        Brasil1.innerHTML = "EURO"
        brasilImage.src = "./assets/Euro.png"
    }
    if (Real.value == "libra1") {
        Brasil1.innerHTML = "Libra"
        brasilImage.src = "./assets/Libra.png"
    }
    if (Real.value == "bitcoin1") {
        Brasil1.innerHTML = "Bitcoin"
        brasilImage.src = "./assets/Bitcoin.png"
    }
    convertValues()
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")

    const dolarImage = document.querySelector(".Dolar")

    if (moedas.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        dolarImage.src = "./assets/Dolar.png"
    }

    if (moedas.value == "euro") {
        currencyName.innerHTML = "EURO"
        dolarImage.src = "./assets/Euro.png"
    }

    if (moedas.value == "libra") {
        currencyName.innerHTML = "Libra"
        dolarImage.src = "./assets/Libra.png"
    }

    if (moedas.value == "bitcoin") {
        currencyName.innerHTML = " Bitcoin"
        dolarImage.src = "./assets/Bitcoin.png"
    }
    if (moedas.value == "real") {
        currencyName.innerHTML = "Real"
        dolarImage.src = "./assets/Real.png"
    }
    convertValues()
}

moedas.addEventListener("change", changeCurrency,)
convertButton.addEventListener("click", convertValues)
Real.addEventListener("change", changeBrasil1, convertValues)
