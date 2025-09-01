// app/layout.tsx
import './globals.css'; // optional, your global CSS

export const metadata = {
  title: 'NHub Payments',
  description: 'Payment page for NHub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
