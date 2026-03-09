import "./globals.css";
import ExplorerLayout from "@/layouts/ExplorerLayout";
import { AuthProvider } from "@/contexts/AuthContext";
import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {/* <ExplorerLayout> */}
            {children}
          {/* </ExplorerLayout> */}
        </AuthProvider>
      </body>
    </html>
  );
}
