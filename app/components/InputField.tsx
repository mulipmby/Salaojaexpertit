interface InputFieldProps {
  label: string;
  value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
}

export const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  required = false,
}: InputFieldProps) => (
  <div>
    <label className="label">{label}</label>
    <input
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="input"
      placeholder={placeholder}
    />
  </div>
);