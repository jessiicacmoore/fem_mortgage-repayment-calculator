import emptyIllustration from "@assets/images/illustration-empty.svg";

function EmptyState() {
  return (
    <div className="text-center md:flex md:h-full md:flex-col md:justify-center">
      <img src={emptyIllustration} alt="" className="mx-auto" />
      <h2>Results shown here</h2>
      <p>
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}

export default EmptyState;
