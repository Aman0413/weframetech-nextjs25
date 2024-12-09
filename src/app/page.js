import BottomSection from "@/components/BottomSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SimilarProduct from "@/components/SimilarProduct";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <SimilarProduct />
      <BottomSection />
      <Footer />
    </div>
  );
}
