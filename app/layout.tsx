
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-full h-full bg-neutral-950"
      >
        {children}
      </body>
    </html>
  );
}
