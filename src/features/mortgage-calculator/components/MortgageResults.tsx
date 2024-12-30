import emptyIllustration from "@assets/images/illustration-empty.svg";
import { Container } from "@components/ui";
import { MortgageResultsData } from "../types";

type MortgageResultsProps = { results: MortgageResultsData | null };

function MortgageResults({ results }: MortgageResultsProps) {
  return (
    <Container className="bg-neutral-900 text-neutral-300">
      {!results ? (
        <div className="text-center">
          <img src={emptyIllustration} alt="" className="mx-auto" />
          <h2>Results shown here</h2>
          <p>
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      ) : (
        <>
          <h2>Your results</h2>
          <p>
            our results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <h3>Your monthly repayments</h3>
          <p>{results.monthlyRepayment}</p>
          <h3>Total you'll repay over the term</h3>
          <p>{results.totalRepayment}</p>
        </>
      )}
    </Container>
  );
}

export default MortgageResults;
