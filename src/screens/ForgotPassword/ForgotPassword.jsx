import React, { useState, useRef } from "react";
import { Leaf, Mail, ArrowLeft, KeyRound, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button, InputField, LoaderBtn } from "../../components";
import { forgotEmailSchema } from "../../services/validation/ForgotPasswordSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "../../hooks/useAuth";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { loading, error, handleSendResetEmail, VerifyOtp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const [step, setStep] = useState("email");


const handleEmailSubmit = async (data) => {
  try {
    await handleSendResetEmail(data);   // send email to Firebase
    console.log("Reset email sent for:", data.email);
    setStep("success");                  // move to next step
  } catch (err) {
    console.log("Failed to send reset email:", err);
  }
};




  

  return (
    <div className="flex min-h-screen">
      <div className="flex w-full flex-col justify-center bg-login-panel px-8 py-12 lg:w-[45%] lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-md">
            <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
              <Leaf className="w-7 h-7 text-accent-foreground" />
            </div>
            <span className="text-2xl font-bold text-input">Kisan Ai</span>
          </div>

          {/* Back button */}
          <button
            onClick={() =>
              step === "email"
                ? navigate("/")
                : setStep(step === "reset" ? "otp" : "email")
            }
            className="mb-6 flex items-center gap-2 text-sm text-input/60 cursor-pointer hover:text-login-panel-foreground/90 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {step === "email" ? "Back to Login" : "Back"}
          </button>

          {/* Step: Email */}
          {step === "email" && (
            <>
              <div className="mb-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15">
                  <Mail className="h-7 w-7 text-accent" />
                </div>
                <h1 className="mb-2 text-3xl font-bold text-input">
                  Forgot Password?
                </h1>
                <p className="text-input/70">
                  No worries! Enter your email and we'll send you a verification
                  code.
                </p>
              </div>
              <form
                onSubmit={handleSubmit(handleEmailSubmit)}
                autoComplete="off"
                className="space-y-5"
              >
                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="yourname@example.com"
                  Icon={Mail}
                  register={register("email", {
                    required: "Email is required",
                  })}
                  error={errors.email?.message}
                />
                {/* {error && <p className="text-sm text-red-400">{error}</p>} */}
                <LoaderBtn
                  text="Create Account"
                  loaderText="Submitting..."
                  // loading={loading}
                />
              </form>
            </>
          )}
          {step === "success" && (
  <div className="text-center">
    <h1 className="mb-2 text-3xl font-bold text-login-panel-foreground">
      Check your email!
    </h1>
    <p className="text-login-panel-foreground/70">
      We have sent a password reset link to <span className="font-medium text-accent">{getValues("email")}</span>.
      Click the link to reset your password.
    </p>
  </div>
)}
          

          

          {/* Step indicators */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {["email", "otp", "reset"].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all ${s === step ? "w-8 bg-accent" : "w-2 bg-login-panel-foreground/20"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right-side illustration */}
      <div className="relative hidden overflow-hidden bg-gradient-to-br from-secondary via-background to-accent/10 lg:flex lg:w-[55%] lg:flex-col lg:items-center lg:justify-center lg:p-12">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 text-center">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10">
            {step === "email" && <Mail className="h-12 w-12 text-primary" />}
            {step === "reset" && <Lock className="h-12 w-12 text-primary" />}
          </div>
          <h2 className="text-3xl font-bold text-foreground xl:text-4xl">
            {step === "email" && "Recover your account"}
            {step === "reset" && "Almost there!"}
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            {step === "email" &&
              "We'll help you get back to managing your farm operations in no time."}
            {step === "reset" &&
              "Set a new password and get back to your dashboard."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;



//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showNew, setShowNew] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const handleResetSubmit = (e) => {
//     e.preventDefault();
//     console.log("New Password:", newPassword);
//     console.log("Confirm Password:", confirmPassword);
//     if (newPassword && newPassword === confirmPassword) {
//       console.log("Passwords match! Ready to call API.");
//       // navigate("/"); // Commented out for now
//     }
//   };
//   {/* Step: Reset Password */}
//           {step === "reset" && (
//             <>
//               <div className="mb-8">
//                 <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15">
//                   <Lock className="h-7 w-7 text-accent" />
//                 </div>
//                 <h1 className="mb-2 text-3xl font-bold text-login-panel-foreground">
//                   Reset Password
//                 </h1>
//               </div>
//               <form onSubmit={handleResetSubmit} className="space-y-5">
//                 <InputField
//                   label="New Password"
//                   type={showNew ? "text" : "password"}
//                   placeholder="Enter new password"
//                   Icon={Lock}
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                 />
//                 <InputField
//                   label="Confirm Password"
//                   type={showConfirm ? "text" : "password"}
//                   placeholder="Confirm new password"
//                   Icon={Lock}
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <Button
//                   type="submit"
//                   className="h-12 w-full text-base font-semibold"
//                 >
//                   Reset Password
//                 </Button>
//               </form>
//             </>
//           )}
// {
//   /* Step: Reset Password */
// }
// {
  /* {step === "reset" && (
            <>
              <div className="mb-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15">
                  <Lock className="h-7 w-7 text-accent" />
                </div>
                <h1 className="mb-2 text-3xl font-bold text-login-panel-foreground">Reset Password</h1>
                <p className="text-login-panel-foreground/70">
                  Create a strong new password for your account.
                </p>
              </div>
              <form onSubmit={handleResetSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="block text-sm text-login-panel-foreground/80">New Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-login-panel-foreground/50" />
                    <Input
                      type={showNew ? "text" : "password"}
                      placeholder="••••••••"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="h-12 border-login-panel-foreground/20 bg-login-panel-foreground/10 pl-12 pr-12 text-login-panel-foreground placeholder:text-login-panel-foreground/40"
                    />
                    <button type="button" onClick={() => setShowNew(!showNew)} className="absolute right-4 top-1/2 -translate-y-1/2 text-login-panel-foreground/50 hover:text-login-panel-foreground/70 transition-colors">
                      {showNew ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm text-login-panel-foreground/80">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-login-panel-foreground/50" />
                    <Input
                      type={showConfirm ? "text" : "password"}
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="h-12 border-login-panel-foreground/20 bg-login-panel-foreground/10 pl-12 pr-12 text-login-panel-foreground placeholder:text-login-panel-foreground/40"
                    />
                    <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-login-panel-foreground/50 hover:text-login-panel-foreground/70 transition-colors">
                      {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <Button type="submit" className="h-12 w-full text-base font-semibold">
                  Reset Password
                </Button>
              </form>
            </>
          )} */
// }
