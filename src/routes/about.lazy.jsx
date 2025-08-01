import { createLazyFileRoute } from '@tanstack/react-router'
import { Card, CardBody, Chip, Avatar, Image, Button } from '@heroui/react'
import { Link } from '@tanstack/react-router'
import CTASection from '../components/home/CTASection'
import ContactSection from '../components/home/ContactSection'
export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  const achievements = [
    { name: "Michelin Star", year: "2023" },
    { name: "Best Italian Restaurant", year: "2022" },
    { name: "Chef's Choice Award", year: "2021" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: `url('https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-ribeye-steak_zzoddf.webp')`
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our story begins</h1>
            <p className="text-gray-700 leading-relaxed">
              At Café Fausse, we believe fine dining should be fresh ingredients. From our premium 
              ingredients to our exceptional service, eating authentically has never been easier—or 
              more enjoyable!
            </p>
          </div>
        </div>
      </div>

      {/* What's Italian Cuisine Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">What's Italian cuisine</h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            Italian cuisine is a culinary tradition that typically consists of fresh pasta, premium ingredients, 
            and time-honored techniques. It is often served with artisanal sauces and topped with various 
            accompaniments like fresh herbs, aged cheeses, seasonal vegetables, and extra virgin olive oil. 
            Italian cuisine has gained popularity worldwide and is now enjoyed in many different 
            variations and regional styles.
          </p>
          <div className="mt-8">
            <Button 
              as={Link}
              to="/menu"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3"
              size="lg"
            >
              Order Now
            </Button>
          </div>
        </div>
      </section>

      {/* Traditional Heritage, Modern Result */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Traditional Heritage,<br />
                Modern Result
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                One of the reasons for Italian cuisine's popularity is its versatility. While the traditional 
                version remains a favorite, there are now numerous variations available, 
                allowing people to customize their dining experience according to their preferences.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="https://res.cloudinary.com/duym3iexv/image/upload/v1753922285/cafe-fusse/main/fine-dinning-cafe-main-course-1_agppl5.png"
                    alt="Italian Main Course"
                    className="w-full aspect-square object-cover"
                    radius="full"
                    fallbackSrc="https://via.placeholder.com/250x250/f3f4f6/6b7280?text=Dish"
                  />
                  <Image
                    src="https://res.cloudinary.com/duym3iexv/image/upload/v1753921362/cafe-fusse/desserts/fine-dinning-cafe-dessert-6_kqqudl.png"
                    alt="Italian Dessert"
                    className="w-full aspect-square object-cover"
                    radius="full"
                    fallbackSrc="https://via.placeholder.com/250x250/f3f4f6/6b7280?text=Dessert"
                  />
                </div>
                <div className="space-y-4 pt-12">
                  <Image
                    src="https://res.cloudinary.com/duym3iexv/image/upload/v1753921569/cafe-fusse/starters/fine-dinning-cafe-starter-6_y2x8gh.png"
                    alt="Italian Starter"
                    className="w-full aspect-square object-cover"
                    radius="full"
                    fallbackSrc="https://via.placeholder.com/250x250/f3f4f6/6b7280?text=Starter"
                  />
                  <Image
                    src="https://res.cloudinary.com/duym3iexv/image/upload/v1753922287/cafe-fusse/main/fine-dinning-cafe-main-course--2_raog8k.png"
                    alt="Signature Dish"
                    className="w-full aspect-square object-cover"
                    radius="full"
                    fallbackSrc="https://via.placeholder.com/250x250/f3f4f6/6b7280?text=Signature"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Awards & Recognition</h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Our commitment to culinary excellence has been recognized by industry leaders and food critics alike.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {achievements.map((achievement, index) => (
              <Chip 
                key={index}
                className="bg-orange-100 text-orange-800 border border-orange-200 text-lg px-6 py-3"
                variant="flat"
                size="lg"
              >
                {achievement.name} - {achievement.year}
              </Chip>
            ))}
          </div>
        </div>
      </section>

      {/* Find Our Locations */}
      <ContactSection />

      {/* Follow Us Section */}
      <CTASection />
    </div>
  )
}