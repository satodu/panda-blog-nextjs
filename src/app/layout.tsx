import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";


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
          <Link href={'/'}>
            <h1 className={styles.title}>
              Panda 
              <span className={styles.titleSecondWord}> Blog</span>
            </h1>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
