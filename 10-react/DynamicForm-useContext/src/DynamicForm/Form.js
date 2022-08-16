import React from "react";
import { useFormContext } from "./FormContext";

export function Form({ children, onSubmit }) {
  const { handleSubmit } = useFormContext();
  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
}

export function TextInput({ label, ...props }) {
  const { register } = useFormContext();
  return <input type="text" {...register(label)} {...props} />;
}

export function SubmitButton({ children }) {
  return <button type="submit">{children}</button>;
}
