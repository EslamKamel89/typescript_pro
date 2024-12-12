import {
  type ComponentPropsWithoutRef,
  FormEvent,
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};
export type FromHandle = {
  clear: () => void;
};
const Form = forwardRef<FromHandle, FormProps>(function Form(
  { onSave, children, ...otherProps }: FormProps,
  ref: ForwardedRef<FromHandle>
) {
  const form = useRef<HTMLFormElement>(null);
  useImperativeHandle(ref, () => ({
    clear() {
      console.log("Clearing");
      form.current?.reset();
    },
  }));
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    // form.current?.reset();
  }
  return (
    <form ref={form} onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
});
export default Form;
