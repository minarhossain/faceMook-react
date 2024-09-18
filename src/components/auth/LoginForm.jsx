
import { useForm } from 'react-hook-form';
import Field from '../common/Field';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const submitForm =async (formData) => {
  try {
     const response =  await axios.post('http://localhost:3000/auth/login', formData)
 
    if (response.status === 200) {
      const { user, token } = response.data;
      if (token) {
        const authToken = token.token;
        const refreshToken = token.refreshToken;
        setAuth({ user, authToken, refreshToken });
        navigate('/');
       
      }
     }
  
    
  } catch (error) {
    console.error('Error:', error);
    setError("root.random", {
      type: 'random',
      message: `User with email ${formData.email} is not found`

    })
  }
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
      <p>{errors?.root?.random?.message}</p>
      
      <Field>
        <button className='auth-input bg-lwsGreen font-bold text-deepDark translate-all hover:opacity-90'>
          Login
        </button>
      </Field>
    </form>
  );
};

export default LoginForm;
