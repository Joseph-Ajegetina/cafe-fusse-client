import { Card, CardBody, Divider, Link as HeroLink } from '@heroui/react'
import { Link } from '@tanstack/react-router'

const Footer = () => {
  return (
    <Card className="rounded-none border-t border-gray-200">
      <CardBody className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Restaurant Info */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-amber-600 mb-4">Café Fausse</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Where tradition meets innovation. Experience unforgettable dining 
                that reflects both quality and creativity.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Contact</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>1234 Culinary Ave, Suite 100</p>
                <p>Washington, DC 20002</p>
                <p className="mt-3">
                  <strong>Phone:</strong> (202) 555-4567
                </p>
                <p>
                  <strong>Email:</strong> info@cafefausse.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Hours</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p><strong>Monday - Saturday:</strong></p>
                <p>5:00 PM - 11:00 PM</p>
                <p className="mt-2"><strong>Sunday:</strong></p>
                <p>5:00 PM - 9:00 PM</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
              <div className="space-y-2">
                <div>
                  <Link 
                    to="/menu" 
                    className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    Menu
                  </Link>
                </div>
                <div>
                  <Link 
                    to="/reservations" 
                    className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    Reservations
                  </Link>
                </div>
                <div>
                  <Link 
                    to="/about" 
                    className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    About Us
                  </Link>
                </div>
                <div>
                  <Link 
                    to="/gallery" 
                    className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Divider className="my-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2024 Café Fausse. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <HeroLink 
                href="#" 
                className="text-gray-500 hover:text-amber-600 transition-colors"
              >
                Privacy Policy
              </HeroLink>
              <HeroLink 
                href="#" 
                className="text-gray-500 hover:text-amber-600 transition-colors"
              >
                Terms of Service
              </HeroLink>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default Footer 