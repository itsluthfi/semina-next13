import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Header() {
  return (
    <header className="header bg-navy">
      <Navbar />
      <Hero />
    </header>
  );
}
