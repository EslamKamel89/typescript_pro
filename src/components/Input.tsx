import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} {...props} ref={ref} />
    </p>
  );
});
export default Input;
