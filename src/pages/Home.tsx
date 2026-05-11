import HeroSection from '../sections/HeroSection'
import TrustStrip from '../sections/TrustStrip'
import KPIStats from '../sections/KPIStats'
import PersonaCards from '../components/PersonaCards'
import PackagingFinder from '../components/PackagingFinder'
import ProductEcosystem from '../sections/ProductEcosystem'
import WhyChooseUs from '../sections/WhyChooseUs'
import IndustrySolutions from '../sections/IndustrySolutions'
import ManufacturingCapability from '../sections/ManufacturingCapability'
import GalleryShowcase from '../sections/GalleryShowcase'
import Testimonials from '../sections/Testimonials'
import FAQSection from '../components/FAQSection'
import SustainabilitySection from '../sections/SustainabilitySection'
import RFQCTA from '../sections/RFQCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <KPIStats />
      <PersonaCards />
      <PackagingFinder />
      <ProductEcosystem />
      <WhyChooseUs />
      <IndustrySolutions />
      <ManufacturingCapability />
      <GalleryShowcase />
      <Testimonials />
      <FAQSection />
      <SustainabilitySection />
      <RFQCTA />
    </>
  )
}
