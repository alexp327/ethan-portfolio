import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Ethan Perry',
  description: 'Ethan Perry Personal Site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <div className='bg-green-500 min-h-screen'></div>
          <div className='bg-orange-500 min-h-screen'></div>
        </ThemeProvider>
      </body>
    </html>
  );
}

