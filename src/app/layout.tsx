import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panda Blog",
  description: "Aplicação em Next.js Fundamentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1 className={styles.title}>
            Panda 
            <span className={styles.titleSecondWord}> Blog</span>
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
