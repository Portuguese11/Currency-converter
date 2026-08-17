import { useState } from "react";
import "./App.css";

import { convertCurrency } from "./services/currencyApi";

import AmountInput from "./components/AmountInput";
import CurrencySelect from "./components/CurrencySelect";
import ConvertButton from "./components/ConvertButton";
import ResultDisplay from "./components/ResultDisplay";

import currencies from "./data/currencies";

function App() {
  const [amount, setAmount] =
    useState(100);

  const [fromCurrency, setFromCurrency] =
    useState("USD");

  const [toCurrency, setToCurrency] =
    useState("EUR");

  const [result, setResult] =
    useState("");

  const handleConvert = async () => {
  try {
    const convertedAmount =
      await convertCurrency(
        amount,
        fromCurrency,
        toCurrency
      );

    setResult(
      `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
    );
  } catch (error) {
    setResult("Conversion failed");
    console.error(error);
  }
};



 return (
  <div className="app">
    <div className="converter-card">

      <h1>
        Currency Converter 💵
      </h1>

      <AmountInput
        amount={amount}
        setAmount={setAmount}
      />

      <CurrencySelect
        label="From"
        currency={fromCurrency}
        setCurrency={setFromCurrency}
        currencies={currencies}
      />

      <CurrencySelect
        label="To"
        currency={toCurrency}
        setCurrency={setToCurrency}
        currencies={currencies}
      />

      <ConvertButton
        handleConvert={handleConvert}
      />

      <ResultDisplay
        result={result}
      />

    </div>
  </div>
);
}

export default App;