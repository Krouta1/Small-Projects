
import './App.css';
import React,{ useEffect, useState } from 'react';
import CurrencyRow from "./CurrencyRow";


//const BASE_URL = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.MY_API_KEY}` // this is not ideal but for starter
// You need to generate your own API key here: https://exchangeratesapi.io/ . I will delete mine from .env

function App() {

  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState([])
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true) // this is cuz amount above is filed from both inputs, i need this one to know if i select first or second

  let toAmount, fromAmount
  if(amountInFromCurrency){
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    fromAmount = amount / exchangeRate
    toAmount = amount
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base,...Object.keys(data.rates)]) // "rates":{"USD":1.080042,....}   ... Object.keys() it is giving me just key portion of rates and destructure array
        setFromCurrency(data.base)// setting it to base currency
        setFromCurrency(firstCurrency)// setting it first currency whatever it is
        setExchangeRate(data.rates[firstCurrency]) // setting rate to first currency 
      })
    return () => {
      //empty cleanup
    }
  },[])

  useEffect(() => {
    if(fromCurrency != null && toCurrency != null){ // if values are not null run fetch, without this it is throwing errors 
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res =>res.json())
        .then(data => setExchangeRate(data.res[toCurrency]))//changing exchange rate when i change currency
    }
    return () => {
      //empty cleanup
    }
  }, [fromCurrency,toCurrency])

  function handleFromAmountChange() {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange() {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <div className="App">
      <h1>Convertor | Krouta</h1> 
      <CurrencyRow 
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      /> 
      <div className="equals"> = </div>
      <CurrencyRow 
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency ={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </div>
  );
}

export default App;
