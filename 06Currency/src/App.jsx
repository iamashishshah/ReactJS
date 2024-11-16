import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js"
import { InputBox } from "./Components/index.js";

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyData = useCurrencyInfo(from)
  const options = Object.keys(currencyData)

  const convert = () => {
    setConvertedAmount(amount * currencyData[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }


  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-transparent border m-4">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label={from}
                amount={amount}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={options}
                selectedCurrency={from}
                amountDisabled={false}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white border bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 align-middle"
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label={to}
                amount={convertedAmount}
                amountDisabled={true}
                onCurrencyChange={(currency) => setTo(currency)}
                currencyOptions={options}
                selectedCurrency={to}
              />
            </div>
            <button
            type="submit"
            className="w-full text-white font-semibold bg-blue-600 py-2 rounded-lg my-1"
            >Convert {from} to {to}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
