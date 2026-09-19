import './globals.css'; // <--- ही ओळ असणे खूप गरजेचे आहे

export const metadata = {
  title: 'BalajiPlay',
  description: 'Virtual Gaming Platform',
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
