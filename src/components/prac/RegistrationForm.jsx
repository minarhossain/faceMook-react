import React from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // Watch password to validate confirm password
  const password = watch('password');

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-4 w-72 mx-auto border-2 border-gray-800 p-4 rounded-lg mt-8'
    >
      {/* First Name */}
      <div>
        <label
          htmlFor='firstName'
          className='block text-sm font-medium text-gray-500'
        >
          First Name
        </label>
        <input
          id='firstName'
          {...register('firstName', { required: 'First name is required' })}
          className={`mt-1 block w-full border rounded-md bg-slate-950 ${
            errors.firstName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.firstName && (
          <span className='text-red-500'>{errors.firstName.message}</span>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label
          htmlFor='lastName'
          className='block text-sm font-medium text-gray-500'
        >
          Last Name
        </label>
        <input
          id='lastName'
          {...register('lastName', { required: 'Last name is required' })}
          className={`mt-1 block w-full border rounded-md bg-slate-950 ${
            errors.lastName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.lastName && (
          <span className='text-red-500'>{errors.lastName.message}</span>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-500'
        >
          Email
        </label>
        <input
          id='email'
          type='email'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email',
            },
          })}
          className={`mt-1 block w-full border rounded-md bg-slate-950 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && (
          <span className='text-red-500'>{errors.email.message}</span>
        )}
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-gray-500'
        >
          Password
        </label>
        <input
          id='password'
          type='password'
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
          })}
          className={`mt-1 block w-full border rounded-md bg-slate-950 ${
            errors.password ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.password && (
          <span className='text-red-500'>{errors.password.message}</span>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label
          htmlFor='confirmPassword'
          className='block text-sm font-medium text-gray-500'
        >
          Confirm Password
        </label>
        <input
          id='confirmPassword'
          type='password'
          {...register('confirmPassword', {
            required: 'Confirm password is required',
            validate: (value) => value === password || 'Passwords do not match',
          })}
          className={`mt-1 block w-full border rounded-md bg-slate-950 ${
            errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.confirmPassword && (
          <span className='text-red-500'>{errors.confirmPassword.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type='submit'
          className='mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
