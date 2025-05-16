"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@component/lib/supabaseClient';
import { getSessionAction, logoutAction } from '@component/actions/authActions';

interface AuthContextType {
  user: User | null;
  login: (userData: { user: User }) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const checkSession = async () => {
      try {
        // Get session from our API route
        const { session } = await getSessionAction();
        
        if (session?.user) {
          setUser(session.user);
        } else {
          // If no session, check localStorage
          const storedSession = localStorage.getItem('supabase.auth.token');
          if (storedSession) {
            const userData = JSON.parse(storedSession);
            setUser(userData);
          }
        }
      } catch (error) {
        console.error('Error checking session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = (userData: { user: User }) => {
    setUser(userData.user);
    // Store the session in localStorage for persistence
    if (userData.user) {
      localStorage.setItem('supabase.auth.token', JSON.stringify(userData.user));
    }
  };
  
  const logout = async () => {
    try {
      await logoutAction();
      setUser(null);
      // Clear only the auth token we set
      localStorage.removeItem('supabase.auth.token');
      // Redirect to home page with full page reload
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
