import * as yup from "yup";

export const profileSchema = yup.object({
  name: yup.string().required("Name is required"),
  profilePic: yup.mixed(),
});
export const nameSchema = yup.object({
  name: yup.string().required("Name is required"),
  profilePic: yup.mixed(),
});

export const passwordSchema = yup.object({
  oldPassword: yup.string().required("Current password is required"),
  newPassword: yup.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
});