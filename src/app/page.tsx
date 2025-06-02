import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionTwo from '@/components/Section2';
import SectionThree from '@/components/Section3';
import SectionFour from '@/components/Section4';
import SectionFive from '@/components/Section5';
import SectionSix from '@/components/Section6';
import SectionSeven from '@/components/Section7';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <Footer/>
    </main>
  );
}
