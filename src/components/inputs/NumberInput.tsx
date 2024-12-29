import { useState } from "react";
import { formatNumber } from "@utils/formatNumber";

type NumberInputProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  allowDecimals?: boolean;
  prefix?: string;
  suffix?: string;
};

function NumberInput({
  label,
  id,
  value,
  onChange,
  error,
  placeholder,
  allowDecimals = false,
  prefix,
  suffix,
}: NumberInputProps) {
  const [formattedValue, setFormattedValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const formatted = formatNumber(inputValue, allowDecimals);
    setFormattedValue(formatted);

    const sanitizedValue = formatted.replace(/[, ]/g, "");
    onChange(sanitizedValue);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        {prefix && (
          <span className="bg-gray-100 px-3 text-sm text-gray-700">
            {prefix}
          </span>
        )}
        <input
          type="text"
          id={id}
          value={formattedValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          aria-describedby={`${id}-description ${id}-error`}
          aria-invalid={!!error}
          className="block w-full rounded-md border border-gray-300 p-2"
        />
        {suffix && (
          <span className="bg-gray-100 px-3 text-sm text-gray-700">
            {suffix}
          </span>
        )}
      </div>
      <span id={`${id}-description`} className="sr-only">
        {prefix ? `This field expects an amount in ${prefix}` : ""}
        {suffix ? ` This field is measured in ${suffix}` : ""}
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
