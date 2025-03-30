import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESC, APP_NAME, SERVER_URL } from "@/lib/constants";

const lato = Lato({
  weight: ['300', '700'],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    template: `store | %s`,
    default: `${APP_NAME}`,
  },
  description: `${APP_DESC}`,
  metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        {children}
      </body>
    </html>
  );
}
