import { useState } from "react";

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pasword, setPasswrod] = useState('')

  function passGenerator(){
    // logic
  }
  return (
    <div className="flex justify-center">
      <div className="p-10 bg-slate-800 shadow-sm w-auto">
        <h1 className="text-white text-2xl">Password Genrator</h1>
        <input type="text" className="text-black" 
          readOnly
        />
        <button className="bg-blue-900 ml-2 px-2 py-1  text-white rounded-xl">copy</button>
        <div>
          <input type="range" 
          min={6}
          max={30}
          className="cursor-pointer"
          defaultValue={8}
          onChange={() => setLength}
          />
          <label htmlFor="" className="text-white mx-2" >length: {length }</label>
          <input type="checkbox" />
          <label htmlFor="" className="text-white mx-2" >Numbers</label>
          <input type="checkbox" />
          <label htmlFor="" className="text-white mx-2" >Symbols</label>

        </div>
      </div>
    </div>
  );
}

export default App;
