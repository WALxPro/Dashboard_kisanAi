import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword,sendPasswordResetEmail,signInWithEmailAndPassword } from "firebase/auth";
import { get, post } from "../api/apiClient";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/authSlice";


const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const sendOtpAPI = async (data) => {
  setError(null);
  setLoading(true);
  try {
    const response = await post("admin/send-signup-otp", data);
    return response;
  } catch (err) {
    const message =
      err?.response?.data?.detail?.email || 
      err?.response?.data?.detail?.general ||
      err.message ||
      "Failed to send OTP";
    setError(message);
    throw err;
  } finally {
    setLoading(false);
  }
};

const VerifyOtp = async ({ email, otp }) => {
  setError(null);
  try {
    setLoading(true);
    const response = await post("admin/verify-otp", {
      email,
      otp,
    });
    setLoading(false);
    return response;
  } catch (err) {
    const message =
      err.response?.data?.detail || "Failed to verify OTP";
    setError(message);
    setLoading(false);
    throw message;
  }
};
const signup = async (data) => {
  const {email,password} = data
  setError(null);
  setLoading(true);
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    try {
      const response = await post("admin/signup", data);
      navigate("/");  
      console.log(response, "Signup success");
    } catch (err) {
      await userCredential.user.delete();
      throw new Error(err.response?.data?.detail || "Database save failed");
    }
    return userCredential.user;
  } catch (error) {
    if (error.code) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("Email already registered");
          break;
        case "auth/invalid-email":
          setError("Invalid email address");
          break;
        case "auth/weak-password":
          setError("Password is too weak (min 6 characters)");
          break;
        default:
          setError(error.message || "Signup failed");
      }
    } else {
      setError(error.message || "Signup failed");
    }
    throw error;
  } finally {
    setLoading(false);
  }
};


const signin = async ({ email, password }) => {
  setError(null);
  setLoading(true);
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const response = await get(`admin/login/${email}`);
    dispatch(setUser(response.user));
    navigate("/dashboard");

  } catch (error) {
    if (error.code) {
      switch (error.code) {
        case "auth/user-not-found":
          setError("User not found");
          break;
        case "auth/wrong-password":
          setError("Incorrect password");
          break;
        case "auth/invalid-email":
          setError("Invalid email");
          break;
        default:
          setError("Login failed");
      }
    } else {
      setError(error.response?.data?.detail || "Login failed");
    }
  } finally {
    setLoading(false);
  }
};

const handleSendResetEmail = async ({ email }) => {  // <- receive email from component
  setError(null);
  setLoading(true);

  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent:", email);
  } catch (err) {
    console.error("Error sending reset email:", err);
    if (err.code === "auth/user-not-found") {
      setError("This email is not registered.");
    } else if (err.code === "auth/invalid-email") {
      setError("Invalid email address.");
    } else {
      setError("Failed to send reset email. Try again later.");
    }
    throw err; // optionally throw for component-level handling
  } finally {
    setLoading(false);
  }
};

  return {
    loading,
    error,
    signup,
    sendOtpAPI,
    VerifyOtp,
    signin,
    handleSendResetEmail
  };
};

export default useAuth;
