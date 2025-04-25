"use client"
import { useState } from 'react';
import './Navbar.css'; // Optional: Add styles for your navbar
import Link from 'next/link';
import useIsMobile from '@component/hooks/useIsMobile';

export default function Navbar() {
  const isMobile = useIsMobile();
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const toggleMobileMenu = () => {
  //     setIsMobileMenuOpen(!isMobileMenuOpen);
  // }
 
  if (isMobile === undefined) return null;
  return (
    <nav className={`navbar ${isMobile ? "mobile" : "desktop"}`}> 
      <Link href="/">
        Erix World Logo will go here
      </Link>
      <div className="login-container">
        {isLoggedIn ? (
          <button className="logout-button" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
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