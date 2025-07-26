import { Button } from '@heroui/react'
import { Link } from '@tanstack/react-router'

const HeroSection = () => {
  return (
    <div className="bg-white">
      {/* Clean hero section with side-by-side layout */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                ITALIAN INSPIRED
                <br />
                <span className="text-primary">CUISINE</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-md">
              Fresh, authentic, delicious
            </p>
            
            <div className="pt-4">
              <Button 
                as={Link}
                to="/reservations"
                size="lg"
                color="primary"
                className="px-8 py-6 text-lg font-medium rounded-full"
              >
                Book Now
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden bg-gray-100">
              <img
                src="/src/assets/images/gallery-ribeye-steak.webp"
                alt="Signature Italian Dish"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-50 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 