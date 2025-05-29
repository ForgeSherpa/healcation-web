import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import DownloadCTA from '@/components/home/DownloadCTA';

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <DownloadCTA />
    </>
  )
}
