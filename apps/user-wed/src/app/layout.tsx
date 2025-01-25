'use client';
import './global.css';
import StoreProvider from './StoreProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <div>{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
}
