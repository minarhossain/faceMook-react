import React from 'react';
import { useForm } from 'react-hook-form';
import Field from '../common/Field';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    const user = { ...formData };
    setAuth({ user });
    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className='border-b border-[#3F3F3F] pb-10 lg:pb-[60px]'
    >
      <Field label='Email' error={errors.email}>
        <input
          className={`auth-input ${
            !!errors.email ? 'border-red-500' : 'border-gray-500'
          }`}
          {...register('email', { required: 'Email id is required' })}
          type='email'
          name='email'
          id='email'
        />
      </Field>

      <Field label='Password' error={errors.password}>
        <input
          className={`auth-input ${
            !!errors.password ? 'border-red-500' : 'border-gray-500'
          }`}
          {...register('password', {
            required: 'Password id is required',
            minLength: {
              value: 8,
              message: 'Your password must be at least 8 characters',
            },
          })}
          type='password'
          name='password'
          id='password'
        />
      </Field>

      <Field>
        <button className='auth-input bg-lwsGreen font-bold text-deepDark translate-all hover:opacity-90'>
          Login
        </button>
      </Field>
    </form>
  );
};

export default LoginForm;
