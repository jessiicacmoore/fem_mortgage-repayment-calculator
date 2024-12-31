import { cn } from "@utils/cn";

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
    <fieldset aria-labelledby={`${name}-legend`}>
      <legend id={`${name}-legend`} className="mb-2">
        {label}
      </legend>
      <div>
        {options.map((option) => {
          const isChecked = selectedValue === option.value;

          return (
            <label
              key={option.value}
              className={cn(
                "input-base mb-2 flex cursor-pointer items-center font-bold focus-within:ring-2 focus-within:ring-blue-500 hover:ring-2",
                isChecked && "border-primary-lime bg-transparent-primary",
              )}
            >
              <input
                type="radio"
                id={`${name}-${option.value}`}
                name={name}
                value={option.value}
                checked={isChecked}
                onChange={handleChange}
                className="peer sr-only"
              />
              <div
                className={cn(
                  "mr-3 flex h-4 w-4 items-center justify-center rounded-full border-2",
                  isChecked ? "border-primary-lime" : "border-neutral-700",
                )}
              >
                {isChecked && (
                  <div className="h-4/6 w-4/6 rounded-full bg-primary-lime"></div>
                )}
              </div>
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default RadioGroup;
