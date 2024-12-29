type RadioGroupOption = {
  value: string;
  label: string;
};

type RadioGroupProps = {
  name: string;
  label: string;
  options: RadioGroupOption[];
  selectedValue: string;
  onChange: (value: string) => void;
};

function RadioGroup({
  name,
  label,
  options,
  selectedValue,
  onChange,
}: RadioGroupProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <fieldset role="radiogroup" aria-labelledby={`${name}-legend`}>
      <legend id={`${name}-legend`}>{label}</legend>
      <div>
        {options.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleChange}
              aria-checked={selectedValue === option.value}
            />
            <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default RadioGroup;
