import { Hero } from './components/Hero';
import { PhotoCarousel } from './components/PhotoCarousel';
import { Problems } from './components/Problems';
import { Methodology } from './components/Methodology';
import { Testimonials } from './components/Testimonials';
import { Bonus } from './components/Bonus';
import { SocialProof } from './components/SocialProof';
import { MembersArea } from './components/MembersArea';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-poppins selection:bg-pink-500/30 overflow-x-hidden">
      <Hero />
      <PhotoCarousel />
      <Problems />
      <Methodology />
      <Testimonials />
      <Bonus />
      <SocialProof />
      <MembersArea />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
