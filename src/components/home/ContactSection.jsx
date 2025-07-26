import { Card, CardBody, Button, Chip } from '@heroui/react'
import { Link } from '@tanstack/react-router'

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Washington, DC, we're ready to welcome you 
            for an unforgettable dining experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Location */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardBody className="text-center p-8">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Location</h3>
              <p className="text-gray-600 mb-4">
                1234 Culinary Ave, Suite 100<br />
                Washington, DC 20002
              </p>
              <Button 
                variant="light" 
                color="warning"
                className="text-amber-600"
              >
                Get Directions
              </Button>
            </CardBody>
          </Card>

          {/* Contact */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardBody className="text-center p-8">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact</h3>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> (202) 555-4567
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Email:</strong> info@cafefausse.com
              </p>
              <Button 
                as={Link}
                to="/reservations"
                color="warning"
                className="bg-amber-600 text-white"
              >
                Make Reservation
              </Button>
            </CardBody>
          </Card>

          {/* Hours */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardBody className="text-center p-8">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Hours</h3>
              <div className="space-y-2 text-gray-600 mb-4">
                <p><strong>Monday - Saturday:</strong></p>
                <p>5:00 PM - 11:00 PM</p>
                <p><strong>Sunday:</strong></p>
                <p>5:00 PM - 9:00 PM</p>
              </div>
              <Chip 
                color="success" 
                variant="flat"
                className="text-green-700"
              >
                Open Today
              </Chip>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 