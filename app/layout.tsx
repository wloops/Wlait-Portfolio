import type {Metadata} from 'next';
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Wlait | 前端与全栈开发者',
  description: 'Wlait 的个人作品集，一名热爱技术的前端与全栈开发者。',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-foreground antialiased selection:bg-black/10" suppressHydrationWarning>{children}</body>
    </html>
  );
}
