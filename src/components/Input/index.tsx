import { Eye, EyeSlash } from "@phosphor-icons/react";
import "./styles.scss";
import { ReactNode, useCallback, useMemo, useState } from "react";

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required: boolean;
  icon: ReactNode;
  isPassword?: boolean;
}

export function Input(props: inputProps) {
  const { label, required, type, icon, name } = props;
  const [ isVisible, setIsVisible ] = useState(false)
  const inputType = useMemo(() => (type === "password" ? ( isVisible ? "text" : "password" ) : type), [isVisible]) 

  const togglePassword = useCallback(() => {
    setIsVisible(!isVisible)
  }, [ isVisible ])



  return (
    <div className="inputContainer">
      {icon}
      <input {...props} type={inputType} name={name} id={name} placeholder={label} required={required} />
      {type === "password" && (
        <button className="toggleButton" onClick={togglePassword} type="button">
          { isVisible ? <EyeSlash size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
}
