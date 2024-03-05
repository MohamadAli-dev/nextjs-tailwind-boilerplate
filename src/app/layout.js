import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
    title: "PWR Chain",
    description: "PWR Chain",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Navbar />
            <body className={space_grotesk.className}>{children}</body>
            <Footer />
        </html>
    );
}
