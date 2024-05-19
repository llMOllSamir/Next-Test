import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: {
    default: "Fekra",
    template: "Fekra : %s",
  },
  description: "Nextjs Course",
  keywords: ["Nextjs", "Reactjs", "HTML"],
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={"scroll-smooth"}>
        <Navbar />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
