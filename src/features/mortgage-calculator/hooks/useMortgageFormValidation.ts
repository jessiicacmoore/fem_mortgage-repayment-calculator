import { useState } from "react";
import { MortgageFormData } from "../types";

export const useMortgageFormValidation = () => {
  const [errors, setErrors] = useState<Record<keyof MortgageFormData, string>>({
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
    mortgageType: "",
  });

  const validate = (
    formData: MortgageFormData,
  ): { isValid: boolean; errors: Record<keyof MortgageFormData, string> } => {
    const newErrors: Record<keyof MortgageFormData, string> = {
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
      mortgageType: "",
    };

    if (
      !formData.mortgageAmount ||
      parseFloat(formData.mortgageAmount) > 9999999
    ) {
      newErrors.mortgageAmount = "Enter a valid amount up to $9,999,999.";
    }
    if (!formData.mortgageTerm || parseInt(formData.mortgageTerm) > 30) {
      newErrors.mortgageTerm = "Enter a term of 30 years or less.";
    }
    if (!formData.interestRate || parseFloat(formData.interestRate) > 10) {
      newErrors.interestRate = "Enter a rate of 10% or less.";
    }

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => !error);

    return { isValid, errors: newErrors };
  };

  const resetErrors = () => {
    setErrors({
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
      mortgageType: "",
    });
  };

  return { errors, validate, resetErrors };
};
