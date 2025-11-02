import "./globals.css";
import localFont from 'next/font/local'

const neo = localFont({
  src: [
    {
      path: './../../public/font/Neometric-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../../public/font/Neometric-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${neo.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
