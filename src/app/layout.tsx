import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import StoreProvider from "@/redux/StoreProvider";
import "../sass/base/reset.scss";
import "../sass/base/common.scss";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "So Yummy",
  description: "A very yummy website with large database of recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <StoreProvider>
    <html lang="en">
      <body className={`${poppinsSans.variable}`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
    // {/* </StoreProvider> */}
  );
}
