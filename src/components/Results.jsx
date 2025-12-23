import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({input}) {
 const resultDate = calculateInvestmentResults(input);
 const initialInvestment = resultDate[0].valueEndOfYear - resultDate[0].interest - resultDate[0].annualInvestment;

 
 return (
    <table id="result">  
        <thead >
            <tr>
                <th>Year</th>
                <th> investment value</th>
                <th> interest (year)</th>
                <th> total Interest</th>
                <th> Inested Capital</th>
            </tr>
        </thead>
        <tbody className="result-body">
            {resultDate.map(yearData =>{
                 const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
 );

}
