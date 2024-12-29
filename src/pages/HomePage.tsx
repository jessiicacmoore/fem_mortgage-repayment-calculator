import {
  MortgageForm,
  MortgageResults,
} from "@features/mortgage-calculator/components";

function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
      <MortgageForm />
      <MortgageResults />
    </div>
  );
}

export default HomePage;
