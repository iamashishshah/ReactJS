import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  function changeColor(event) {
    let btnValue = event.target.innerText;
    btnValue = btnValue.toLowerCase();
    setColor(btnValue);
  }

  return (
    <div
      className="w-full h-screen duration-300 "
      style={{ backgroundColor: color }}
    >
      <div className="flex items-start justify-center h-screen">
      <button
        onClick={() => setColor("olive")}
        type="button"
        className="py-2.5 px-5 me-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 my-10"
      >
        Reset
      </button>
      </div>
      <div
        id="toast-botom-center-container"
        className="fixed bottom-10 flex flex-wrap justify-center inset-x-0 rounded-lg bg-gray-200 p-4 "
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-4 rounded-3xl mx-5">
          <button
            // onClick={() => setColor("purple")}
            onClick={changeColor}
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-1 focus:ring-purple-100font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Purple
          </button>
          <button
            onClick={changeColor}
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-1 focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
          >
            Green
          </button>
          <button
            onClick={changeColor}
            type="button"
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          >
            Blue
          </button>
          <button
            onClick={changeColor}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-1 focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-900"
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
