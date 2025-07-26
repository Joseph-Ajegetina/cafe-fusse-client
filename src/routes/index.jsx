import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '../components/home/HeroSection'
import ContactSection from '../components/home/ContactSection'
import FeaturesSection from '../components/home/FeaturesSection'
import MenuPreview from '../components/home/MenuPreview'
import TestimonialsSection from '../components/home/TestimonialsSection'
import CTASection from '../components/home/CTASection'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <HeroSection />
      <ContactSection />
      <FeaturesSection />
      <MenuPreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}