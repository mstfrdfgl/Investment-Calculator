import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [name]: +value, //formdan alınan veriler her zaman string olarak gelir ve number a dönüştürmek için "+" operatörü kullanırız
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
