import EmptyState from "./EmptyState";
import ResultsMessage from "./ResultsMessage";
import { MortgageResultsData } from "../types";
import { Container } from "@components/ui";

type MortgageResultsProps = { results: MortgageResultsData | null };

function MortgageResults({ results }: MortgageResultsProps) {
  return (
    <Container className="bg-neutral-900 text-neutral-300 md:rounded-bl-[5rem]">
      {results ? <ResultsMessage results={results} /> : <EmptyState />}
    </Container>
  );
}

export default MortgageResults;
