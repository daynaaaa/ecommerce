import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESC, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
