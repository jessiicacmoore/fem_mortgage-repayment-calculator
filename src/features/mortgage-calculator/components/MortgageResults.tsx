import emptyIllustration from "@assets/images/illustration-empty.svg";
import { Container } from "@components/ui";
import { MortgageResultsData } from "../types";

type MortgageResultsProps = { results: MortgageResultsData | null };

function MortgageResults({ results }: MortgageResultsProps) {
  return (
    <Container className="bg-neutral-900 text-neutral-300 md:rounded-bl-[5rem]">
      {!results ? (
        <div className="text-center md:flex md:h-full md:flex-col md:justify-center">
          <img src={emptyIllustration} alt="" className="mx-auto" />
          <h2>Results shown here</h2>
          <p>
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      ) : (
        <>
          <h2 className="mt-0">Your results</h2>
          <p>
            our results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
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
        </>
      )}
    </Container>
  );
}

export default MortgageResults;
