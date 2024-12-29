import { useState } from "react";
import { calculateRepayments } from "../utils";
import { MortgageResultsData, MortgageFormData } from "../types";

export const useMortgageCalculator = () => {
  const [formData, setFormData] = useState<MortgageFormData>({
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
    mortgageType: "Repayment",
  });

  const [results, setResults] = useState<null | MortgageResultsData>(null);

  const handleCalculate = () => {
    const { mortgageAmount, mortgageTerm, interestRate, mortgageType } =
      formData;
    const calculatedResults = calculateRepayments(
      parseFloat(mortgageAmount),
      parseFloat(interestRate),
      parseInt(mortgageTerm),
      mortgageType as "Repayment" | "Interest Only",
    );
    setResults(calculatedResults);
  };

  return {
    formData,
    setFormData,
    results,
    handleCalculate,
  };
};
