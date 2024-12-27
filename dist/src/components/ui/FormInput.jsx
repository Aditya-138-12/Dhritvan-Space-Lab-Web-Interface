import { useState } from "react";

const FormInput = ({
  label,
  type = "text",
  name,
  placeholder,
  required = false,
  textarea = false,
}) => {
  const [focused, setFocused] = useState(false);

  const baseClasses = `w-full px-4 py-3 rounded-lg border bg-white/5 backdrop-blur-sm transition-all duration-200
    ${
      focused
        ? "border-blue-500 ring-2 ring-blue-500/20"
        : "border-gray-200 dark:border-gray-700"
    }
    text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400`;

  const Component = textarea ? "textarea" : "input";

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2" htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Component
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className={baseClasses}
        rows={textarea ? 4 : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

export default FormInput;
