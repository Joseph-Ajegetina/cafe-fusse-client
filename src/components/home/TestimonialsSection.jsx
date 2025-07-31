import { Card, CardBody, Avatar } from '@heroui/react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Food Critic",
      content: "An exceptional dining experience that exceeded all expectations. The flavors are masterfully crafted.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c7ae?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "James Chen",
      role: "Local Guide",
      content: "The perfect blend of tradition and innovation. Each dish tells a story of culinary excellence.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Sophie Williams",
      role: "Regular Customer",
      content: "I've been coming here for years, and the quality never disappoints. Truly a neighborhood gem.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our happy customers</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Testimonial */}
          <div className="space-y-8">
            <blockquote className="text-2xl lg:text-3xl text-gray-900 leading-relaxed font-light">
              "I'm a big fan of Italian cuisine, and this place definitely delivers. The quality of the 
              ingredients is top-notch, and the variety of dishes allows you to customize your 
              dining experience."
            </blockquote>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">
                Sarah Martinez
              </h4>
              
              {/* Customer avatars */}
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {testimonials.map((testimonial, index) => (
                    <Avatar
                      key={index}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      size="md"
                      className="border-2 border-white"
                    />
                  ))}
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Food Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100">
              <img
                src="https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-special-event_q2r96c.webp"
                alt="Customer enjoying our food"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative background */}
            {/* <div className="absolute inset-0 bg-gray-100 rounded-full -z-10 transform translate-x-4 translate-y-4"></div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 