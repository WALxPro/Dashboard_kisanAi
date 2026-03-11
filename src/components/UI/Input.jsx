import { forwardRef } from "react";

const Input = forwardRef(({ className = "", type = "text", readOnly = false, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      readOnly={readOnly} // explicitly pass readOnly prop
      className={`w-full rounded-lg border px-4 py-3 text-base transition-colors
                  focus:outline-none focus:ring-2 focus:ring-accent/50
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${readOnly ? "bg-gray-100 cursor-not-allowed" : ""} 
                  ${className}`}
      {...props}
      autoComplete="off"
    />
  );
});

Input.displayName = "Input";

export default Input;