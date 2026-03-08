import { useState, useRef } from "react";
import { KeyRound } from "lucide-react";
import Button from "./Button";

const OTPModal = ({ isOpen, email, onSubmitOTP, onClose,error }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  if (!isOpen) return null;

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; 
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); 
    setOtp(newOtp);
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitOTP(otp.join(""));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-login-panel px-10 py-8 rounded-2xl w-full max-w-md ">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 ">
            <KeyRound className="h-7 w-7 text-accent" />
          </div>
          <h1 className="mb-2 text-3xl font-bold text-input">
            Enter OTP Code
          </h1>
          <p className="text-input/70">
            We've sent a 6-digit code to{" "}
            <span className="font-medium text-accent">{email}</span>
          </p>
        </div>

        {/* OTP Inputs */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-3">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                ref={(el) => (inputsRef.current[idx] = el)}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className="h-14 w-12 rounded-xl border-input/20  text-input  bg-input/10 text-lg font-semibold  text-center"
              />
            ))}
          </div>

          <Button type="submit" className="h-12 w-full text-base font-semibold">
            Verify Code
          </Button>

          <p className="text-center text-sm border-input/60">
            Didn't receive the code?{" "}
            <button
              type="button"
              className="font-semibold text-accent hover:text-accent/80 transition-colors"
              onClick={() => alert("Resend OTP")}
            >
              Resend
            </button>
          </p>
        </form>

        <button
          onClick={onClose}
          className="mt-4 w-full text-sm text-gray-500 hover:underline"
        >
          Close
        </button>
                    {error && <p className="text-sm text-red-400">{error}</p>}

      </div>
    </div>
  );
};

export default OTPModal;