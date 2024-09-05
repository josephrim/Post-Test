import Link from 'next/link';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Blog App</title>
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <header className="bg-blue-700 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Blog App</h1>
            <nav>
              <Link href="/" className="mr-4 text-white hover:text-gray-300">Home</Link>
              <Link href="/posts/create" className="text-white hover:text-gray-300">Create Post</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 container mx-auto p-6">{children}</main>
        <footer className="bg-blue-700 text-white text-center p-4">
          <p>© 2024 My Blog App</p>
        </footer>
      </body>
    </html>
  );
}