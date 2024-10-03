import React from "react";
import { Field } from "react-hook-form";
import { useForm } from "react-hook-form";
import axios from "axios";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    fromState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    console.log(formData);
  };
  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]"
      onSubmit={handleSubmit(submitForm)}
    ></form>
  );
};

export default RegistrationForm;
