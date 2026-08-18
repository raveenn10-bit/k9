import './globals.css';
import { DM_Sans, Manrope, Playfair_Display } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: "Ceylon K9 Academy — Master Canine Training & Behavior Center",
  description: "Sri Lanka's premier canine academy specializing in modern, positive-reinforcement behavior modification, puppy imprinting, and master handler coaching.",
  metadataBase: new URL('https://ceylonk9academy.com'),
  openGraph: {
    title: "Ceylon K9 Academy — Master Canine Training",
    description: "Smart Training For Happy Dogs. Premier positive canine training in Sri Lanka.",
    url: 'https://ceylonk9academy.com',
    siteName: 'Ceylon K9 Academy',
    images: [
      {
        url: '/media/hero.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/media/logo.jpg',
    apple: '/media/logo.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable} ${playfair.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('k9_theme');
                if (theme === 'light' || (!theme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.add('light-mode');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-[#07080A] text-slate-100 min-h-screen flex flex-col font-sans antialiased overflow-x-hidden selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
