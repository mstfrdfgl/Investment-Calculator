import { useState } from "react";

export default function UserInput({ userInput, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            name="initialInvestment"
            id="initialInvestment"
            value={userInput.initialInvestment}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            name="annualInvestment"
            id="annualInvestment"
            value={userInput.annualInvestment}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">EXPECTED RETURN</label>
          <input
            type="number"
            required
            name="expectedReturn"
            id="expectedReturn"
            value={userInput.expectedReturn}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            required
            name="duration"
            id="duration"
            value={userInput.duration}
            onChange={handleChange}
          />
        </p>
      </div>
    </section>
  );
}
