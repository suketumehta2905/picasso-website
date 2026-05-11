import HeroSection from '../sections/HeroSection'
import TrustSection from '../sections/TrustSection'
import ProductShowcaseSection from '../sections/ProductShowcaseSection'
import WhyPickassoSection from '../sections/WhyPickassoSection'
import PicassoProcessSection from '../sections/PicassoProcessSection'
import IndustrySolutionsSection from '../sections/IndustrySolutionsSection'
import CaseStudiesSection from '../sections/CaseStudiesSection'
import GalleryShowcase from '../sections/GalleryShowcase'
import Testimonials from '../sections/Testimonials'
import FAQSection from '../components/FAQSection'
import SustainabilitySection from '../sections/SustainabilitySection'
import RFQCTA from '../sections/RFQCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProductShowcaseSection />
      <WhyPickassoSection />
      <PicassoProcessSection />
      <IndustrySolutionsSection />
      <CaseStudiesSection />
      <GalleryShowcase />
      <Testimonials />
      <SustainabilitySection />
      <FAQSection />
      <RFQCTA />
    </>
  )
}
