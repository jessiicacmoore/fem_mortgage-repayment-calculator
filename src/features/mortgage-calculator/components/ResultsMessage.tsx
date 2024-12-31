import { MortgageResultsData } from "../types";

function ResultsMessage({ results }: { results: MortgageResultsData }) {
  return (
    <div
      id="results-container"
      tabIndex={-1}
      aria-live="polite"
      aria-atomic="true"
    >
      <h2 className="mt-0">Your results</h2>
      <p>
        <span className="sr-only">Calculation complete. </span>Your results are
        shown below based on the information you provided. To adjust the
        results, edit the form and click “calculate repayments” again.
      </p>
      <div className="mt-6 rounded-lg border-t-4 border-t-primary-lime bg-neutral-950 px-4 py-6">
        <h3>Your monthly repayments</h3>
        <p className="text-4xl font-bold text-primary-lime">
          {results.monthlyRepayment}
        </p>
        <span className="horizontal-line"></span>
        <h3>Total you'll repay over the term</h3>
        <p className="text-2xl font-bold text-neutral-white">
          {results.totalRepayment}
        </p>
      </div>
    </div>
  );
}

export default ResultsMessage;
