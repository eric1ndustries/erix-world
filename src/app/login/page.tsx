import Form from 'next/form'
import './Login.css'; // Optional: Add styles for your login page

export default function LoginPage() {
  return (
    <div className="login-form-container">
      <Form className="login-form" action={"loginAction api call"}> 
        Username: <input className="login-form-input" name="username" />
        Password: <input className="login-form-input" name="password" />
        <button type="submit">Login</button>
      </Form>
    </div>
  )  
}