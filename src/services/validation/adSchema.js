import * as yup from "yup";

export const adSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),

  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),

  image: yup
  .mixed()
  .required("Banner image is required"),

  status: yup
    .string()
    .oneOf(["Active", "Inactive"])
    .required(),
});