import React from "react";

import { useForm } from "react-hook-form";
import axios from "axios";
import Field from "../common/Field";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    try {
      let response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `Something went wrong:  ${error.message} `,
      });
    }
    console.log(formData);
  };
  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field label="First Name" error={errors.firstName}>
        <input
          className={`auth-input ${
            !!errors.firstName ? "border-red-500" : "border-gray-500"
          }`}
          {...register("firstName", { required: "First Name  is required" })}
          type="text"
          name="firstName"
          id="firstName"
        />
      </Field>

      <Field label="Last Name" error={errors.lastName}>
        <input
          className={`auth-input ${
            !!errors.lastName ? "border-red-500" : "border-gray-500"
          }`}
          {...register("lastName", { required: "Last Name  is required" })}
          type="text"
          name="lastName"
          id="lastName"
        />
      </Field>

      <Field label="Email" error={errors.email}>
        <input
          className={`auth-input ${
            !!errors.email ? "border-red-500" : "border-gray-500"
          }`}
          {...register("email", { required: "Email id is required" })}
          type="email"
          name="email"
          id="email"
        />
      </Field>

      <Field label="Password" error={errors.password}>
        <input
          className={`auth-input ${
            !!errors.password ? "border-red-500" : "border-gray-500"
          }`}
          {...register("password", {
            required: "Password id is required",
            minLength: {
              value: 8,
              message: "Your password must be at least 8 characters",
            },
          })}
          type="password"
          name="password"
          id="password"
        />
      </Field>
      <p>{errors?.root?.random?.message}</p>

      <Field>
        <button className="auth-input bg-lwsGreen font-bold text-deepDark translate-all hover:opacity-90">
          Register
        </button>
      </Field>
    </form>
  );
};

export default RegistrationForm;
