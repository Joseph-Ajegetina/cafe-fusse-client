import { Button } from '@heroui/react'
import { Link } from '@tanstack/react-router'

const HeroSection = () => {
  return (
    <div className="relative h-[810px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-ribeye-steak_zzoddf.webp')`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content Card */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 flex items-center h-[810px]">
        <div className="max-w-2xl">
          <div className="bg-white/95 backdrop-blur-sm shadow-2xl p-12 lg:p-16">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  ASIAN INSPIRED
                  <br />
                  <span className="text-orange-500">BOWLS</span>
                </h1>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Fresh, healthy, delicious
              </p>
              
              <div className="pt-4">
                <Button 
                  as={Link}
                  to="/menu"
                  size="lg"
                  className="px-8 py-6 text-lg font-medium rounded-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 