
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Methodology } from './components/Methodology';
import { Testimonials } from './components/Testimonials';
import { Bonus } from './components/Bonus';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-poppins selection:bg-pink-500/30 overflow-x-hidden">
      <Hero />
      <Problems />
      <Methodology />
      <Testimonials />
      <Bonus />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
