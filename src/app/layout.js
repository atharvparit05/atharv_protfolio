
import "./globals.css";

export const metadata = {
  title: "Atharv Parit | Developer Portfolio",
  description:
    "Explore the portfolio, skills, projects and contact details of Atharv Parit.",
  keywords: [
    "Atharv Parit",
    "Developer Portfolio",
    "Next.js Developer",
    "React Developer",
    "Web Developer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
