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
  const inputIsValid = userInput.duration > 0;
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
      {inputIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Duration must be greater than 0</p>
      )}
    </>
  );
}

export default App;
