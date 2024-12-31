import { useState } from "react";
import { calculateRepayments, formatCurrency } from "../utils";
import { MortgageResultsData, MortgageFormData } from "../types";

export const useMortgageCalculator = () => {
  const initialFormData: MortgageFormData = {
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
    mortgageType: "Repayment",
  };

  const [formData, setFormData] = useState<MortgageFormData>(initialFormData);
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

    const formattedResults = {
      monthlyRepayment: formatCurrency(calculatedResults.monthlyRepayment),
      totalRepayment: formatCurrency(calculatedResults.totalRepayment),
    };

    setResults(formattedResults);

    setTimeout(() => {
      const resultsContainer = document.getElementById("results-container");
      resultsContainer?.focus();
    }, 0);
  };

  const reset = () => {
    setFormData(initialFormData);
    setResults(null);
  };

  return {
    formData,
    setFormData,
    results,
    handleCalculate,
    reset,
  };
};
