import './globals.css';

export const metadata = {
  title: 'BookSprouts',
  description: 'A fun reading tracker for kids ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-emerald-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
