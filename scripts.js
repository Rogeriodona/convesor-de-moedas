



const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputcurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")




    const dolarToday = 4.90
    const euroToday = 5.35
    const libraToday = 6.18
    const bitcoinToday = 181.921


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputcurrencyValue / euroToday)

    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"

        }).format(inputcurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC-bitcoin", {
            style: "currency",
            currency: "BTC"

        }).format(inputcurrencyValue / bitcoinToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyValue)

}


function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "libra"
        currencyImage.src = "./assets/libra 1.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }


    convertValues()
}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)