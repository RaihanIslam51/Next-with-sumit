
import Link from "next/link";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className="p-5">
        <nav className="flex gap-3">
         <Link href="/">Home</Link>
         <Link href="/blogs" >Blogs </Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {children}


        <footer className="mt-10">
          this is footer
        </footer>
      </body>
    </html>
  );
}
