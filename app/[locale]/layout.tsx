import type { Metadata, Viewport } from 'next';
import { inter, libre } from 'fonts';
import { classnames } from 'helpers/utils/classnames';
import { LayoutProps } from 'types/next';
import 'tailwindcss/tailwind.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'flag-icons/css/flag-icons.min.css';
import 'styles/app.css';

export const metadata: Metadata = {
  manifest: '/manifest.json',
  icons: {
    apple: '/favicon-192x192.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#FFF',
};

export default async function RootLayout(props: LayoutProps) {
  const params = await props.params;

  const { children } = props;

  const { locale } = params;

  return (
    <html lang={locale} className={classnames(inter.variable, libre.variable)}>
      <body>{children}</body>
    </html>
  );
}
