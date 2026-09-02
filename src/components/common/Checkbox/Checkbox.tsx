import './Checkbox.css';

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
};

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled,
}: CheckboxProps) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />

      <span className="checkbox__box" />

      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
}
