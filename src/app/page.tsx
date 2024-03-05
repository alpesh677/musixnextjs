import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicTestimonial from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import WebinarCards from "@/components/WebinarCards";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicTestimonial/>
      <WebinarCards/>
      <Footer/>
    </main>
  );
}
