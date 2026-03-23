import FeaturedCabinsSection from "../sections/FeaturedCabinsSection";
import HeroSection from "../sections/HeroSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import WhyChooseSection from "../sections/WhyChooseSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedCabinsSection />
      <WhyChooseSection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;
