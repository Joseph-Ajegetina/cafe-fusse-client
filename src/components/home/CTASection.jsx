import { Card, CardBody, Button, Input } from '@heroui/react'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const CTASection = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to backend API for newsletter signup
    console.log('Newsletter signup:', email)
    setIsSubscribed(true)
    setEmail('')
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Newsletter Signup */}
          <Card className="shadow-lg">
            <CardBody className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Stay Connected
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for exclusive offers, seasonal menu updates, 
                and special event invitations.
              </p>
              
              {isSubscribed ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  Thank you for subscribing! Check your email for confirmation.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <Input
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="bordered"
                    isRequired
                  />
                  <Button 
                    type="submit"
                    color="warning"
                    className="w-full bg-amber-600 text-white hover:bg-amber-700"
                    size="lg"
                  >
                    Subscribe to Newsletter
                  </Button>
                </form>
              )}
              
              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardBody>
          </Card>

          {/* Reservation CTA */}
          <Card className="shadow-lg bg-gradient-to-br from-amber-600 to-amber-700 text-white">
            <CardBody className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Dine?
              </h2>
              <p className="mb-6 opacity-90">
                Reserve your table now and experience the perfect blend of 
                traditional Italian flavors and modern culinary innovation.
              </p>
              
              <div className="space-y-4">
                <Button 
                  as={Link}
                  to="/reservations"
                  size="lg"
                  className="w-full bg-white text-amber-700 hover:bg-gray-50 font-semibold"
                >
                  Make a Reservation
                </Button>
                
                <div className="flex items-center space-x-4 text-sm opacity-90">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Tables Available
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (202) 555-4567
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-amber-500">
                <p className="text-sm opacity-75">
                  For parties of 8 or more, please call us directly for special arrangements.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CTASection 