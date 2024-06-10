import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  console.log(resultsData);
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((result) => {
            const totalInterest =
              result.valueEndOfYear -
              userInput.initialInvestment -
              result.annualInvestment * (result.year - 1) -
              result.annualInvestment;
            const investedCapital = result.valueEndOfYear - totalInterest;
            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
