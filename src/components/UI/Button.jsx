import { forwardRef } from "react";

const Button = forwardRef(
  ({ children, variant = "default", className = "", type = "button", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      default: "bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent shadow-lg shadow-accent/25",
      outline:
        "border border-login-panel-foreground/20 bg-transparent text-login-panel-foreground hover:bg-login-panel-foreground/10",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={`${baseStyles} ${variants[variant] || variants.default} ${className} cursor-pointer`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
