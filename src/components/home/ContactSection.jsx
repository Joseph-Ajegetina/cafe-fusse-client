import { Card, CardBody, Button, Chip } from '@heroui/react'
import { Link } from '@tanstack/react-router'

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-900 text-white rounded-3xl p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Location Info */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Location</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
              <span className="font-bold">1234 Culinary Ave, Suite 100, Washington, DC 20002</span>
              <br />
              <span className="font-bold">Phone: (202) 555-4567</span>
              <br />
              <span className="font-bold">Hours: Monday–Saturday: 5:00PM – 11:00 PM; <br /> Sunday: 5:00 PM – 9:00 PM</span>
              </p>
            </div>
            
            {/* Right: Food Images */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Large bowl */}
                <div className="w-80 h-80 rounded-full overflow-hidden bg-gray-100">
                  <img
                    src="https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/home-cafe-fausse_f7mvr1.webp"
                    alt="Poke bowl"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Small bowl positioned over large bowl */}
                <div className="absolute -top-15 -right-25 w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-gray-900">
                  <img
                    src="https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-cafe-interior_qgcoka.webp"
                    alt="Another poke bowl"
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