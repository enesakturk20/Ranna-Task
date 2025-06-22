import Header from '../components/Header';
import Hero from '../components/Hero';
import BottomNav from '../components/BottomNav';
import ImageGrid from '../components/ImageGrid';
import MembershipSection from '../components/MembershipSection';
import ImageGrid2 from '../components/ImageGrid2';
import VideoSection from '../components/VideoSection';
import AppDownloadSection from '../components/AppDownloadSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BottomNav />
      <ImageGrid />
      <MembershipSection />
      <ImageGrid2 />
      <VideoSection />
      <AppDownloadSection />
      <Footer />
    </>
  );
}
