import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPasswrod] = useState("");
  const [bgColor, setBgColor] = useState("bg-white");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const number = "1234567890";
    const symb = "!@#$%^&*_+";

    if (numberAllowed) str += number;
    if (charAllowed) str += symb;

    for (let i = 1; i <= length; i++) {
      const randomNumber = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomNumber);
    }

    setPasswrod(pass);
    console.log(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard
      .writeText(password)
      .then(() => {
        // Change background color to indicate success
        setBgColor("bg-yellow-900");
        // Reset the background color after 2 seconds
        setTimeout(() => {
          setBgColor("bg-white");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
    // passwordRef.current?.setLength(0, 3)
  };

  const passwordRef = useRef(null);

  return (
    <div className="flex justify-center">
      <div className="max-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Password generator
          </h5>
        </a>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${bgColor}`}
            placeholder="password"
            readOnly
          />
          <button
            onClick={copyToClipboard}
            type="button"
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 mt-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name=""
              id=""
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
              defaultValue={8}
            />
            <label
              htmlFor="length"
              className="text-white text-lg font-mono mx-2"
            >
              length: {length}
            </label>
            <input
              id="remember"
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
            <label
              htmlFor="length"
              className="text-white text-lg font-mono mx-2"
            >
              Numbers
            </label>
            <input
              id="remember"
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
            <label
              htmlFor="length"
              className="text-white text-lg font-mono mx-2"
            >
              Symbols
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
