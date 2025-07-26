import { Button } from '@heroui/react'
import { Link } from '@tanstack/react-router'

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/images/home-cafe-fausse.webp')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-amber-400">Café</span> Fausse
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
          Where tradition meets innovation
        </p>
        
        <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90">
          Experience exceptional Italian cuisine crafted with passion, 
          served in an atmosphere of elegant sophistication.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            as={Link}
            to="/reservations"
            size="lg"
            className="bg-amber-600 text-white hover:bg-amber-700 px-8 py-6 text-lg font-semibold"
          >
            Make Reservation
          </Button>
          
          <Button 
            as={Link}
            to="/menu"
            variant="bordered"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-semibold"
          >
            View Menu
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 