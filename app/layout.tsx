import { type Metadata } from "next";
import { type ThemeConfig, ConfigProvider } from "antd";
import { Inter } from "next/font/google";
import color from "tailwindcss/colors";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
};

const theme: ThemeConfig = {
  token: {
    colorPrimary: color.indigo[700],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
