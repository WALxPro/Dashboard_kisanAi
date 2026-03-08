import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters"),

  email: yup
    .string()
    .trim()
    .required("Email is required")
    .max(100, "Email is too long")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter a valid email address"
    ),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password is too long"),

  profilePic: yup
    .mixed()
    .nullable()
    .test("fileSize", "Image size must be less than 2MB", (value) => {
      if (!value) return true;
      return value.size <= 2 * 1024 * 1024;
    })
    .test("fileType", "Only JPG, PNG images are allowed", (value) => {
      if (!value) return true;
      return ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
    }),

  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms"),
});