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
      <legend id={`${name}-legend`} className="mb-2">
        {label}
      </legend>
      <div>
        {options.map((option) => (
          <label
            key={option.value}
            className="input-base has-[:checked]:bg-transparent-primary mb-2 flex cursor-pointer items-center font-bold focus-within:ring-2 focus-within:ring-blue-500 has-[:checked]:border-primary-lime"
          >
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleChange}
              aria-checked={selectedValue === option.value}
              className="peer sr-only"
            />
            <div className="mr-3 flex h-4 w-4 items-center justify-center rounded-full border-2 border-neutral-700 peer-checked:border-primary-lime">
              {selectedValue === option.value && (
                <div className="h-4/6 w-4/6 rounded-full bg-primary-lime"></div>
              )}
            </div>
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default RadioGroup;
