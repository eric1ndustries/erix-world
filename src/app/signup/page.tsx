"use client";
import { useState, useEffect } from 'react';
import Form from 'next/form'
import './Signup.css'; // Optional: Add styles for your login page
import { signupAction } from '@component/actions/authActions';
import { useAuth } from '@component/contexts/AuthContext';

export default function SignupPage() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
  
    useEffect(() => {
      if (error) {
        alert(error);
        setError(''); // Clear the error after showing it
      }
    }, [error]);
  
    const handleSignup = async () => {
      try {
        const result = await signupAction({ email, password, name });
        login(result.user);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unexpected error occurred when signing up')
        }
      }
    }

  return (
    <div className="signup-form-container">
      Sign up for Erix World
      <Form className="signup-form" action={handleSignup}> 
        Email: <input className="signup-form-input" name="email" onChange={(e) => setEmail(e.target.value)} />
        Password: <input className="signup-form-input" name="password" onChange={(e) => setPassword(e.target.value)}/>
        Name: <input className="signup-form-input" name="phone" onChange={(e) => setName(e.target.value)} />
        <button type="submit">Sign up</button>
      </Form>
    </div>
  )  
}