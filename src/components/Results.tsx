import { calculateInvestmentResults, formatter } from "../util/investment";


interface Props {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}

export const Results = (props: Props) => {
    const  rusults = calculateInvestmentResults(
        {
            initialInvestment: props.initialInvestment,
            annualInvestment: props.annualInvestment,
            expectedReturn: props.expectedReturn,
            duration: props.duration
        }
    );
    return (
        <table>
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
<tbody>
{rusults.map((result) => (
    <tr>
        <td>{result.year}</td>
        <td>{formatter.format(result.valueEndOfYear)}</td>
        <td>{formatter.format(result.interest)}</td>
        <td>{(formatter.format(result.valueEndOfYear - result.interest))}</td>
        <td>{(formatter.format(result.valueEndOfYear - result.interest))}</td>

    </tr>
))}
</tbody>
        </table>
    )
}

