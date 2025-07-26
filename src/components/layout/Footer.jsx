import { Button, Link as HeroLink } from '@heroui/react'
import { Link } from '@tanstack/react-router'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
              <h3 className="text-xl font-bold">CAFÉ FAUSSE</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience exceptional Italian cuisine crafted with passion and served with elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Menu
              </Link>
              <Link 
                to="/about"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Our story
              </Link>
              <Link 
                to="/gallery"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Location
              </Link>
              <Link 
                to="/menu"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Gift card
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="text-gray-300 text-sm space-y-1">
              <p>848 King Street, Mesa, AZ 85201, Washington, USA</p>
              <p>info@cafefausse.com</p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <div className="flex flex-col space-y-3">
              <Button 
                as={Link}
                to="/menu"
                variant="bordered"
                className="border-white text-white hover:bg-white hover:text-gray-900 rounded-full"
                size="sm"
              >
                Order Online
              </Button>
              <Button 
                as={Link}
                to="/reservations"
                color="primary"
                className="rounded-full"
                size="sm"
              >
                Book a Table
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>&copy; 2022 Brand, Inc. • Privacy • Terms • Sitemap</p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <HeroLink 
                href="#"
                className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </HeroLink>
              <HeroLink 
                href="#"
                className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </HeroLink>
              <HeroLink 
                href="#"
                className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </HeroLink>
              <HeroLink 
                href="#"
                className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white hover:bg-red-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </HeroLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 