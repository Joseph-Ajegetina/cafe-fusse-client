import { Card, CardBody, Image } from '@heroui/react'

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      title: "Award-Winning Cuisine",
      description: "Our dishes have earned recognition from culinary experts and food critics worldwide.",
      image: "https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-ribeye-steak_zzoddf.webp"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Elegant Atmosphere",
      description: "Dine in style with our sophisticated ambiance perfect for any special occasion.",
      image: "https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-cafe-interior_qgcoka.webp"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Expert Culinary Team",
      description: "Our world-class chefs bring decades of experience and passion to every dish.",
      image: "https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-special-event_q2r96c.webp"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Premium Ingredients",
      description: "We source only the finest, freshest ingredients from trusted local and international suppliers.",
      image: "https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-ribeye-steak_zzoddf.webp"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Café Fausse</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect combination of exceptional cuisine, elegant atmosphere, 
            and unparalleled service that makes every visit memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="text-center p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 