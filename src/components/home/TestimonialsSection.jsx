import { Card, CardBody, Avatar } from '@heroui/react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Critic",
      content: "Exceptional ambiance and unforgettable flavors. Café Fausse delivers an extraordinary dining experience that perfectly balances tradition with innovation.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Michael Chen",
      role: "Local Resident",
      content: "A must-visit restaurant for food enthusiasts. The attention to detail and quality of ingredients is remarkable. Every dish tells a story.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Emma Rodriguez",
      role: "Business Executive", 
      content: "Perfect for both intimate dinners and business meetings. The service is impeccable and the atmosphere strikes the right balance of elegance and warmth.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Guests Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued guests have to say 
            about their dining experience at Café Fausse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-6">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    size="md"
                    className="mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Awards & Recognition</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-sm font-medium">Culinary Excellence</p>
              <p className="text-xs text-gray-600">2022</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm font-medium">Restaurant of the Year</p>
              <p className="text-xs text-gray-600">2023</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium">Best Fine Dining</p>
              <p className="text-xs text-gray-600">Foodie Magazine 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 