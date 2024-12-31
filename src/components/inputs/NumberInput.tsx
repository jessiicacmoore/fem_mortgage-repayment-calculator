import { useEffect, useState } from "react";
import { formatNumber } from "@utils/formatNumber";
import { cn } from "@utils/cn";

type NumberInputProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  allowDecimals?: boolean;
  unit?: string;
  unitPosition?: "prefix" | "suffix";
};

function NumberInput({
  label,
  id,
  value,
  onChange,
  error,
  placeholder,
  allowDecimals = false,
  unit,
  unitPosition = "suffix",
}: NumberInputProps) {
  const [formattedValue, setFormattedValue] = useState(value);

  useEffect(() => {
    setFormattedValue(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const formatted = formatNumber(inputValue, allowDecimals);
    setFormattedValue(formatted);

    const sanitizedValue = formatted.replace(/[, ]/g, "");
    onChange(sanitizedValue);
  };

  const inputClasses = cn("input-base z-10 peer", {
    "border-l-0 rounded-l-none": unit && unitPosition === "prefix",
    "border-r-0 rounded-r-none": unit && unitPosition === "suffix",
    "border-primary-red": error,
  });

  const unitClasses = cn(
    "grid place-items-center border border-neutral-500 bg-neutral-100 px-3 text-sm font-bold text-gray-500 peer-focus:border-primary-lime peer-focus:bg-primary-lime peer-focus:text-neutral-900",
    {
      "rounded-l border-r-0": unit && unitPosition === "prefix",
      "rounded-r border-l-0": unit && unitPosition === "suffix",
      "border-primary-red text-neutral-white bg-primary-red": error,
    },
  );

  return (
    <div className="mb-6">
      <label htmlFor={id}>{label}</label>
      <div
        className={`relative mb-1 mt-2 flex ${unitPosition === "prefix" ? "flex-row-reverse" : ""}`}
      >
        <input
          type="text"
          id={id}
          value={formattedValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          aria-describedby={`${id}-description ${id}-error`}
          aria-invalid={!!error}
          className={inputClasses}
        />
        {unit && <span className={unitClasses}>{unit}</span>}
      </div>
      <span id={`${id}-description`} className="hidden">
        {unit ? `This field expects an amount in ${unit}` : ""}
      </span>
      {error && (
        <span
          id={`${id}-error`}
          className="text-xs text-primary-red"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
}

export default NumberInput;
