import { forwardRef } from "react";

const Input = forwardRef(({ className = "", type = "text", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={`w-full  rounded-lg border px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
        autoComplete="off" // add this

    />
  );
});

Input.displayName = "Input";

export default Input;
