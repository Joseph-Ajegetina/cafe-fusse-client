import { Card, CardBody, Button, Chip } from '@heroui/react'
import { Link } from '@tanstack/react-router'

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Location Info */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Find our location</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Serving fresh Italian cuisine daily at Washington DC, 
              1234 Culinary Ave, Suite 100.
            </p>
            
            <Button 
              color="primary"
              className="rounded-full px-8 py-4 font-medium"
              size="lg"
            >
              Locations & Hours
            </Button>
          </div>
          
          {/* Right: Food Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-full overflow-hidden bg-gray-100">
                  <img
                    src="https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-ribeye-steak_zzoddf.webp"
                    alt="Signature dish"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                  <img
                    src="https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-cafe-interior_qgcoka.webp"
                    alt="Restaurant interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 