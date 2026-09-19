import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="site-logo">
        PERRY’S DESIGN STUDIO
      </Link>

      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}