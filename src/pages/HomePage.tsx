import {
  MortgageForm,
  MortgageResults,
} from "@features/mortgage-calculator/components";
import { useMortgageCalculator } from "@features/mortgage-calculator/hooks";

function HomePage() {
  const { formData, setFormData, results, handleCalculate } =
    useMortgageCalculator();

  return (
    <div className="bg-neutral-white">
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
