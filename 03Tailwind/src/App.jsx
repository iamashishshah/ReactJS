import "./App.css";
import Card from "./components/Card";

function App() {
  const newArray = [1, 2, 3 , 44, 5, 34]
  const obj = {
    name: "Ashish Shah",
    age: 21,
    details: {
      birthPlace: "Singrauli Madhya Pradesh",
      nativeLanguage: "Hindi",
      motherToungue: "Hindi",
      otherLanguageKnown: "English"
    }


  }
  return (
    <>
      <h1 className="text-3xl font-bold underline my-5">Hello world!</h1>
      < Card username="Shakshi" city="Delhi" details = {obj} number = { newArray } />
      <Card></Card>
    </>
  );
}

export default App;
