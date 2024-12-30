import {
  MortgageForm,
  MortgageResults,
} from "@features/mortgage-calculator/components";
import { useMortgageCalculator } from "@features/mortgage-calculator/hooks";

function HomePage() {
  const { formData, setFormData, results, handleCalculate } =
    useMortgageCalculator();

  return (
    <div className="max-w-4xl bg-neutral-white md:grid md:grid-cols-2 md:overflow-hidden md:rounded-3xl md:shadow-md">
      <MortgageForm
        formData={formData}
        setFormData={setFormData}
        onCalculate={handleCalculate}
      />
      <MortgageResults results={results} />
    </div>
  );
}

export default HomePage;
