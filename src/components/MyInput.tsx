import { forwardRef } from "react";

interface IMyInput {
  id: string;
  label: string;
  error?: string;
}

export const MyInputWithRef = forwardRef<HTMLInputElement, IMyInput>(
  (props, ref) => {
    const { id, label, error, ...other } = props;
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} placeholder={label} ref={ref} {...other} />
        {error && <p>{error}</p>}
      </div>
    );
  }
);

