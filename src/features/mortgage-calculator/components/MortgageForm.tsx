import React from "react";
import { MortgageFormData } from "../types";
import { Button, Container } from "@components/ui";
import { NumberInput, RadioGroup } from "@components/inputs";

type MortgageFormProps = {
  formData: MortgageFormData;
  setFormData: React.Dispatch<React.SetStateAction<MortgageFormData>>;
  onCalculate: () => void;
};

function MortgageForm({
  formData,
  setFormData,
  onCalculate,
}: MortgageFormProps) {
  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <Container>
      <h1>Mortgage Calculator</h1>
      <Button buttonType="secondary" aria-describedby="clear-all-desc">
        Clear All
      </Button>
      <p className="hidden" id="clear-all-desc">
        Clears all fields in the form below.
      </p>
      <form onSubmit={handleSubmit}>
        <NumberInput
          label="Mortgage Amount"
          value={formData.mortgageAmount}
          id="mortgage-amount"
          prefix="$"
          onChange={(value) => handleInputChange("mortgageAmount", value)}
        />
        <div>
          <NumberInput
            label="Mortgage Term"
            value={formData.mortgageTerm}
            id="mortgage-term"
            suffix="years"
            onChange={(value) => handleInputChange("mortgageTerm", value)}
          />
          <NumberInput
            label="Interest Rate"
            value={formData.interestRate}
            id="interest-rate"
            suffix="%"
            allowDecimals
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
        <Button type="submit">Calculate Repayments</Button>
      </form>
    </Container>
  );
}

export default MortgageForm;
