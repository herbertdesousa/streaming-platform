import "./Input.css";

export function Input({ name, label, isTextarea }) {
  const className = isTextarea ? "textarea" : "";

  return (
    <label htmlFor={name} className={"input " + className}>
      {label}:
      <input id={name} type="text" />
    </label>
  );
}
