import { useState } from "react";

export default function UserInput() {
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
        [name]: value,
      };
      //   if (name === "initialInvestment") {
      //     return {
      //       ...prevValue,
      //       initialInvestment: value,
      //     };
      //   }
    });
  }
  return (
    <section action="" id="user-input">
      <div className="input-group">
        <p>
          <label>
            INITIAL INVESTMENT
            <input
              type="number"
              required
              name="initialInvestment"
              value={userInput.initialInvestment}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            ANNUAL INVESTMENT
            <input
              type="number"
              required
              name="annualInvestment"
              value={userInput.annualInvestment}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            EXPECTED RETURN
            <input
              type="number"
              required
              name="expectedReturn"
              value={userInput.expectedReturn}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            DURATION
            <input
              type="number"
              required
              name="duration"
              value={userInput.duration}
              onChange={handleChange}
            />
          </label>
        </p>
      </div>
    </section>
  );
}
