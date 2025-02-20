'use client';
import StoreProvider from './StoreProvider';
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <div>
            {children}
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
