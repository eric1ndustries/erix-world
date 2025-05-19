"use client"
import { useEffect, useState } from 'react';
import Form from 'next/form'
import { loginAction } from '@component/actions/authActions';
import { useAuth } from '@component/contexts/AuthContext';
import './Login.css'; // Optional: Add styles for your login page

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (error) {
      alert(error);
      setError(''); // Clear the error after showing it
    }
  }, [error]);

  const handleLogin = async () => {
    try {
      const result = await loginAction({ email, password });
      login(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unexpected error occurred when logging in')
      }
    }
  }

  return (
    <div className="login-form-container">
      <Form className="login-form" action={handleLogin}> 
        Email: <input className="login-form-input" name="email" onChange={(e) => setEmail(e.target.value)}/>
        Password: <input className="login-form-input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </Form>
    </div>
  )  
}