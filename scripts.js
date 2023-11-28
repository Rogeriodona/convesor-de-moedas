



const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert",)
    const CurrencyValueConverted = document.querySelector(".currency-value")




    const dolarToday = 4.90
    const euroToday = 5.35
    const libraToday = 6.18
    const bitcoinToday = 181.921


    if (currencySelect.value == "dolar") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)

    }
if (currencySelect.value == "libra"){
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency:"GBP"

    }).format(inputCurrencyValue / libraToday)
}

if (currencySelect.value == "bitcoin"){
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("BTC-bitcoin",{
    style: "currency",
    currency:"BTC"

}).format(inputCurrencyValue / bitcoinToday)

}



    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

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
    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    
    convertValues ()
}
currencySelect.addEventListener("change", changeCurrency) 
convertButton.addEventListener("click", convertValues)