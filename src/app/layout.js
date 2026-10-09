import Navbar from "@/Components/Navbar/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { UserProvider } from "@/context/UserContext";

export const metadata = {
  title: "Mo Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <UserProvider>
            <Navbar />
            <main className="main">
              <section className="main-section">{children}</section>
            </main>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
