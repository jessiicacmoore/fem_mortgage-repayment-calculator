import { useState } from "react";
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const formatted = formatNumber(inputValue, allowDecimals);
    setFormattedValue(formatted);

    const sanitizedValue = formatted.replace(/[, ]/g, "");
    onChange(sanitizedValue);
  };

  const inputClasses = cn("input-base z-10", {
    "border-l-0 rounded-l-none": unit && unitPosition === "prefix",
    "border-r-0 rounded-r-none": unit && unitPosition === "suffix",
  });

  const unitClasses = cn(
    "grid place-items-center border border-neutral-500 bg-neutral-100 px-3 text-sm font-bold text-gray-500",
    {
      "rounded-l border-r-0": unit && unitPosition === "prefix",
      "rounded-r border-l-0": unit && unitPosition === "suffix",
    },
  );

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="relative mb-6 mt-2 flex">
        {unit && unitPosition === "prefix" && (
          <span className={unitClasses}>{unit}</span>
        )}
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
        {unit && unitPosition === "suffix" && (
          <span className={unitClasses}>{unit}</span>
        )}
      </div>
      <span id={`${id}-description`} className="hidden">
        {unit ? `This field expects an amount in ${unit}` : ""}
      </span>
      {error && (
        <span id={`${id}-error`} className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}

export default NumberInput;
