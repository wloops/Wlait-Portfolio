'use client';

export default function Footer() {
  return (
    <footer className="px-6 py-10 mt-10 border-t border-black/10 text-sm text-muted-foreground flex justify-between">
      <span>© {new Date().getFullYear()} Wlait.</span>
      <a href="mailto:hello@wlait.com" className="hover:text-foreground transition">hello@wlait.com</a>
    </footer>
  );
}
