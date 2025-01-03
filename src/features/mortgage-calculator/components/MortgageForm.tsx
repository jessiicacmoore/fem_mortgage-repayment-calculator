import React, {useCallback, useState} from "react";
import calculatorIcon from "@assets/images/icon-calculator.svg";
import { MortgageFormData } from "../types";
import { useMortgageFormValidation } from "../hooks/useMortgageFormValidation";
import { Button, Container } from "@components/ui";
import { NumberInput, RadioGroup } from "@components/inputs";

type MortgageFormProps = {
  formData: MortgageFormData;
  setFormData: React.Dispatch<React.SetStateAction<MortgageFormData>>;
  onCalculate: () => void;
  onReset: () => void;
};

function MortgageForm({
  formData,
  setFormData,
  onCalculate,
  onReset,
}: MortgageFormProps) {
  const { errors, validate, resetErrors } = useMortgageFormValidation();
  const [formErrorSummary, setFormErrorSummary] = useState("");

  const handleInputChange = useCallback(
    (field: keyof MortgageFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [setFormData]
  );

  const handleClearAll = () => {
    onReset();
    resetErrors();
    setFormData({
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
      mortgageType: "Repayment",
    });
    setFormErrorSummary("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid, errors: validationErrors } = validate(formData);
    
    if (isValid) {
      setFormErrorSummary("");
      onCalculate();
    } else {
      setFormErrorSummary("Please fix the errors in the form and try again.");

      const firstErrorFieldId = Object.keys(validationErrors).find(
        (key) => validationErrors[key as keyof MortgageFormData],
      );

      if (firstErrorFieldId) {
        document.getElementById(firstErrorFieldId)?.focus();
      }
    }
  };

  return (
    <Container>
      <div className="md:mb-3 md:mt-2 md:flex md:items-center md:justify-between">
        <h1>Mortgage Calculator</h1>
        <Button
          buttonType="secondary"
          aria-describedby="clear-all-desc"
          onClick={handleClearAll}
        >
          Clear All
        </Button>
        <p className="hidden" id="clear-all-desc">
          Clears all fields in the form below.
        </p>
      </div>
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {formErrorSummary}
      </div>
      <form onSubmit={handleSubmit} className="mt-6">
        <NumberInput
          label="Mortgage Amount"
          value={formData.mortgageAmount}
          id="mortgageAmount"
          unit="$"
          unitPosition="prefix"
          error={errors.mortgageAmount}
          onChange={(value) => handleInputChange("mortgageAmount", value)}
        />
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <NumberInput
            label="Mortgage Term"
            value={formData.mortgageTerm}
            id="mortgageTerm"
            unit="years"
            error={errors.mortgageTerm}
            onChange={(value) => handleInputChange("mortgageTerm", value)}
          />
          <NumberInput
            label="Interest Rate"
            value={formData.interestRate}
            id="interestRate"
            unit="%"
            allowDecimals
            error={errors.interestRate}
            onChange={(value) => handleInputChange("interestRate", value)}
          />
        </div>
        <RadioGroup
          name="mortgage-type"
          label="Mortgage Type"
          options={[
            { value: "Repayment", label: "Repayment" },
            { value: "Interest Only", label: "Interest Only" },
          ]}
          selectedValue={formData.mortgageType}
          onChange={(value) => handleInputChange("mortgageType", value)}
        />
        <Button
          type="submit"
          className="mt-6 flex w-full items-center justify-center"
        >
          <img src={calculatorIcon} alt="" className="mr-2" />
          Calculate Repayments
        </Button>
      </form>
    </Container>
  );
}

export default MortgageForm;
