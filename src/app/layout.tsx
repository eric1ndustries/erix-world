import "./globals.css";
import ExplorerLayout from "@/layouts/ExplorerLayout";

export default function RootLayout({ children }) {
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
