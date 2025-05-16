"use client"
import './Navbar.css'; // Optional: Add styles for your navbar
import Link from 'next/link';
import useIsMobile from '@component/hooks/useIsMobile';
import { useAuth } from '@component/contexts/AuthContext';

export default function Navbar() {
  const isMobile = useIsMobile();
  const { user, logout, isLoading } = useAuth();
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const toggleMobileMenu = () => {
  //     setIsMobileMenuOpen(!isMobileMenuOpen);
  // }
  const handleLogout = () => {
    logout();
  }

  const name = user?.user_metadata?.name || user?.email;
 
  if (isMobile === undefined) return null;
  return (
    <nav className={`navbar ${isMobile ? "mobile" : "desktop"}`}> 
      <Link href="/">
        Erix World Logo will go here
      </Link>
      <div className="login-container">
        {isLoading ? (
          <div>Loading...</div>
        ) : user ? (
          <div className="user-section">
            <span className="welcome-message">Welcome, {name}</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link href="/login">
              <button className="login-button">
                Login
              </button>
            </Link>
            <Link href="/signup"> 
              <button className="signup-button">
                Signup
              </button>
            </Link>
          </div>
        )}
        </div>
    </nav>
  );
}