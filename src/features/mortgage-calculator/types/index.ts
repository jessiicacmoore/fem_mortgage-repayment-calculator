export type MortgageResultsData = {
  monthlyRepayment: string;
  totalRepayment: string;
};

export type MortgageFormData = {
  mortgageAmount: string;
  mortgageTerm: string;
  interestRate: string;
  mortgageType: "Repayment" | "Interest Only";
};
