export const calculateRepayments = (
  principal: number,
  annualInterestRate: number,
  mortgageTerm: number,
  type: "Repayment" | "Interest Only",
) => {
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const totalPayments = mortgageTerm * 12;

  if (type === "Repayment") {
    const monthlyRepayment =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    return {
      monthlyRepayment: monthlyRepayment.toFixed(2),
      totalRepayment: (monthlyRepayment * totalPayments).toFixed(2),
    };
  }

  if (type === "Interest Only") {
    const monthlyRepayment = principal * monthlyInterestRate;
    return {
      monthlyRepayment: monthlyRepayment.toFixed(2),
      totalRepayment: (monthlyRepayment * totalPayments).toFixed(2),
    };
  }

  return { monthlyRepayment: "0.00", totalRepayment: "0.00" };
};
