import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aaditya Jadhav',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/aj-logo.jpg" sizes="any" />
        <title>Aaditya Jadhav</title> {/* Added title */}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights /> {/* Added SpeedInsights */}
        </ThemeProvider>
      </body>
    </html>
  );
}