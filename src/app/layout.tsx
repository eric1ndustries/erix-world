import "./globals.css";
import ExplorerLayout from "@/layouts/ExplorerLayout";
import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ExplorerLayout>
          {children}
        </ExplorerLayout>
      </body>
    </html>
  );
}
