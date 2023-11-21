console.log("FUNCIONOU")



const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const CurrencyValueConverted = document.querySelector(".currency-value")


console.log(currencySelect.value)

    const dolarToday = 4.90
    const euroToday = 5.35


    if(currencySelect.value == "Dolar"){
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue /dolarToday)

    }

    if(currencySelect.value == "euro"){
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE" , {
            style: "currency" ,
            currency: "EUR"
            
        }).format(inputCurrencyValue/euroToday)

    }


    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)







}


convertButton.addEventListener("click", convertValues)