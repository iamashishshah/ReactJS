import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);
  const buttonRef = useRef(null)

  // function generatePassword(){
  //   // will write some logic here that will generate the password
  // }

  const generatePass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const number = "1234567890";
    const symb = "!@#$%^&*_+";
    if (numberAllowed) str += number;
    if (characterAllowed) str += symb;

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
    console.log(pass);
  }, [numberAllowed, characterAllowed, length]);

  useEffect(() => {
    generatePass();
  }, [length, characterAllowed, numberAllowed, generatePass]);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    inputRef.current?.select();
    // inputRef.current?.setSelectionRange(0, 3)
    
  };

  return (
    <>
      <div className="w-full h-lvh bg-slate-700 flex justify-center ">
        <div
          name="container"
          className="sm:w-[480px] bg-slate-900 sm:h-[150px] border rounded-md mt-4 box-border px-4 py-2 text-white "
        >
          <h1 className="text-center text-xl font-semibold">
            Password Generator
          </h1>
          <div name="input-copy feid" className="flex mt-4 mb-2">
            <input
              readOnly
              value={password}
              type="text"
              name="password-display"
              id=""
              className="flex-grow rounded-l-md text-black px-4 text-lg outline-none"
              ref={inputRef}
            />
            
            <button
              onClick={copyToClipboard}
              type="submit"
              className="inline bg-blue-600 px-2 py-1 border-none rounded-r-md hover:bg-blue-700 text-lg"
            >
              Copy
            </button>
          </div>

          <div className="flex justify-between items-center ">
            <input
              type="range"
              name="range"
              id=""
              min={6}
              max={20}
              value={length}
              className="cursor-pointer mx-1"
              onChange={(e) => setLength(e.target.value)}
            />
            <p className="text-lg mx-1">Length: {length}</p>
            <input
              type="checkbox"
              name="number"
              id=""
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((pre) => !pre)}
            />
            <p className="text-lg">Numbers</p>
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={characterAllowed}
              onChange={() => setCharacterAllowed((pre) => !pre)}
            />
            <p className="text-lg ">Characters</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
