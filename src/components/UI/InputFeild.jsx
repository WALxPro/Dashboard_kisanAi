import { useState } from "react";
import Input from "./Input";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const InputField = ({
  label,
  type = "text",
  placeholder,
  Icon,
  className = "",
  psd = false,
  fsd = false,
  register,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = psd ? (showPassword ? "text" : "password") : type;
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        {label && (
          <label className="block text-sm text-input/80">
            {label}
          </label>
        )}

        {fsd && (
          <Link to="/forgot-pasword" className="text-sm text-accent">
            Forgot password?
          </Link>
        )}
      </div>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-input/50" />
        )}

        <Input
          type={inputType}
          placeholder={placeholder}
          {...register}
          className={`h-12 border-input/20  text-input  bg-input/10 ${
            Icon ? "pl-12" : "pl-4"
          } pr-12 text-text-input ${className}`}
        />

        {psd && (
          <button
            type="button"
            onClick={()=>setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-input/50 cursor-pointer"
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        )}
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default InputField;
