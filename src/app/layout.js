
import "./globals.css";

export const metadata = {
  title: "Atharv Parit | Developer Portfolio",
  description:
    "Explore the portfolio, skills and projects of Atharv Parit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
