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
    { 
      name: "Michelin Star", 
      year: "2023",
      quote: "An exceptional culinary journey that tantalizes the senses. A well-deserved star for their innovation and quality.",
      icon: "⭐",
      bgColor: "bg-yellow-100",
      iconBg: "bg-slate-700",
      titleColor: "text-amber-800"
    },
    { 
      name: "Best Italian Restaurant", 
      year: "2022",
      quote: "A true taste of Italy. Their authentic flavors and warm hospitality make them stand out as the best in the city.",
      icon: "🏆",
      bgColor: "bg-blue-100",
      iconBg: "bg-amber-600",
      titleColor: "text-blue-800"
    },
    { 
      name: "Chef's Choice Award", 
      year: "2021",
      quote: "Voted by peers as a master of the craft. The chef's dedication to perfection is evident in every single dish.",
      icon: "👨‍🍳",
      bgColor: "bg-pink-100",
      iconBg: "bg-amber-500",
      titleColor: "text-pink-800"
    }
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Cafe Fausse</h1>
            <p className="text-gray-700 leading-relaxed">
            Founded in 2010 by Chef Antonio Rossi and restaurateur Maria Lopez, Café Fausse blends traditional Italian flavors with modern culinary innovation. Our mission is to provide an unforgettable dining experience that reflects both quality and creativity.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Founders */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Meet Our Founders</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The visionaries behind Café Fausse bring together decades of culinary expertise and 
              hospitality excellence to create an unforgettable dining experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Chef Antonio Rossi */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <Avatar 
                  src="https://res.cloudinary.com/duym3iexv/image/upload/v1754047050/cafe-fusse/pexels-italo-melo-881954-2379004_pmenfj.jpg"
                  className="w-32 h-32 mx-auto lg:mx-0"
                  fallbackSrc="https://via.placeholder.com/128x128/f97316/ffffff?text=AR"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Chef Antonio Rossi</h3>
              <p className="text-orange-500 font-semibold mb-4">Executive Chef & Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                Born in Bologna, Italy, Chef Antonio brings over 20 years of culinary expertise to Café Fausse. 
                Trained in renowned kitchens across Italy and France, he combines traditional Italian techniques 
                with modern innovation. His passion for locally sourced ingredients and seasonal menus has earned 
                him numerous accolades, including a Michelin Star in 2023. Antonio believes that every dish should 
                tell a story and create lasting memories for our guests.
              </p>
            </div>

            {/* Maria Lopez */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <Avatar 
                  src="https://res.cloudinary.com/duym3iexv/image/upload/v1754047052/cafe-fusse/pexels-olly-733872_jdzxss.jpg"
                  className="w-32 h-32 mx-auto lg:mx-0"
                  fallbackSrc="https://via.placeholder.com/128x128/f97316/ffffff?text=ML"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Maria Lopez</h3>
              <p className="text-orange-500 font-semibold mb-4">Restaurateur & Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                With a background in hospitality management and a deep love for Italian culture, Maria ensures 
                that every aspect of the Café Fausse experience exceeds expectations. Her vision for creating 
                a warm, welcoming atmosphere while maintaining the highest standards of service has made Café Fausse 
                a beloved destination. Maria oversees our commitment to sustainability and community partnerships, 
                ensuring we source the finest local ingredients while supporting our regional farmers and producers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Café Fausse, we are dedicated to creating exceptional experiences through three core principles 
              that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Unforgettable Dining */}
            <Card className="shadow-lg h-full">
              <CardBody className="p-8 text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Unforgettable Dining</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every visit to Café Fausse is designed to create lasting memories. From the moment you enter 
                  our restaurant, our attentive staff ensures a personalized experience that celebrates the joy 
                  of exceptional dining and warm hospitality.
                </p>
              </CardBody>
            </Card>

            {/* Excellent Food */}
            <Card className="shadow-lg h-full">
              <CardBody className="p-8 text-center">
                <div className="text-4xl mb-4">👨‍🍳</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellent Food</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our culinary team is committed to excellence in every dish. Using traditional Italian techniques 
                  and modern culinary innovation, we create flavors that honor authentic Italian cuisine while 
                  surprising and delighting our guests with creative presentations.
                </p>
              </CardBody>
            </Card>

            {/* Locally Sourced Ingredients */}
            <Card className="shadow-lg h-full">
              <CardBody className="p-8 text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Locally Sourced Ingredients</h3>
                <p className="text-gray-600 leading-relaxed">
                  We partner with local farms and artisanal producers to source the freshest, highest-quality 
                  ingredients. This commitment to locality not only ensures superior flavors but also supports 
                  our community and reduces our environmental impact.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Italian Cuisine Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Awards & Recognition</h2>
          <p className="text-lg text-gray-600 mb-16 leading-relaxed max-w-3xl mx-auto">
            Our commitment to culinary excellence has been recognized by industry leaders and food critics alike.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className={`${achievement.bgColor} rounded-3xl p-8 h-full flex flex-col items-center text-center`}>
                {/* Award Icon */}
                <div className={`${achievement.iconBg} w-20 h-20 rounded-full flex items-center justify-center mb-6`}>
                  <span className="text-2xl text-white">{achievement.icon}</span>
                </div>
                
                {/* Award Title */}
                <h3 className={`text-2xl font-bold ${achievement.titleColor} mb-2`}>
                  {achievement.name}
                </h3>
                
                {/* Year */}
                <p className={`text-lg font-semibold ${achievement.titleColor} mb-6 opacity-80`}>
                  {achievement.year}
                </p>
                
                {/* Quote */}
                <blockquote className={`${achievement.titleColor} italic leading-relaxed flex-1 flex items-center`}>
                  "{achievement.quote}"
                </blockquote>
              </div>
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