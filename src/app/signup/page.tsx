import Form from 'next/form'
import './Signup.css'; // Optional: Add styles for your login page

export default function SignupPage() {
  return (
    <div className="signup-form-container">
      Sign up for Erix World
      <Form className="signup-form" action={"loginAction api call"}> 
        Username: <input className="signup-form-input" name="username" />
        Password: <input className="signup-form-input" name="password" />
        Email: <input className="signup-form-input" name="email" />
        <button type="submit">Sign up</button>
      </Form>
    </div>
  )  
}