import "./styles.scss";
import { ReactNode } from "react";

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required: boolean;
  icon: ReactNode;
}

export function Input(props: inputProps) {
  const { label, required, type, icon, name } = props;

  return (
    <div className="inputContainer">
      {icon}
      <input {...props} type={type} name={name} id={name} placeholder={label} required={required} />
    </div>
  );
}
