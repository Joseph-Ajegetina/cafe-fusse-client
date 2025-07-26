import { createLazyFileRoute } from '@tanstack/react-router'
import { Card, CardBody, Chip, Avatar } from '@heroui/react'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  const achievements = [
    { name: "Michelin Star", year: "2023" },
    { name: "Best Italian Restaurant", year: "2022" },
    { name: "Chef's Choice Award", year: "2021" }
  ]



  const reviews = [
    {
      text: "An absolute culinary masterpiece. Every dish exceeded our expectations.",
      source: "Food & Wine Magazine"
    },
    {
      text: "The perfect blend of traditional Italian techniques with modern innovation.",
      source: "Culinary Digest"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Café Fausse</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A story of passion, tradition, and culinary excellence that has been delighting guests since 2018.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Our Story */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6">Our Story</h2>
          <Card className="shadow-lg">
            <CardBody className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in 2018 by Chef Marco Antonelli, Café Fausse began as a dream to bring authentic Italian 
                flavors to Washington, DC, while embracing modern culinary innovation. What started as a small 
                family restaurant has grown into one of the city's most celebrated dining destinations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our name, "Fausse," which means "false" in French, represents our philosophy of challenging 
                preconceptions about Italian cuisine. We believe that tradition should be honored, not blindly 
                followed, and that the best dishes come from a perfect balance of respect for the past and 
                excitement for the future.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every dish at Café Fausse tells a story - from our handmade pasta that reflects generations 
                of family recipes to our innovative sauces that showcase the finest seasonal ingredients.
              </p>
            </CardBody>
          </Card>
        </section>

        {/* Our Commitment */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-lg">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Quality Ingredients</h3>
                <p className="text-gray-600 text-sm">
                  We source only the finest, freshest ingredients from trusted suppliers and local farms.
                </p>
              </CardBody>
            </Card>

            <Card className="shadow-lg">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Exceptional Service</h3>
                <p className="text-gray-600 text-sm">
                  Our team is dedicated to providing warm, professional service that makes every guest feel special.
                </p>
              </CardBody>
            </Card>

            <Card className="shadow-lg">
              <CardBody className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Culinary Innovation</h3>
                <p className="text-gray-600 text-sm">
                  We continuously evolve our menu while respecting traditional Italian culinary techniques.
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6">Awards & Recognition</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            {achievements.map((achievement, index) => (
              <Chip 
                key={index}
                color="primary"
                variant="flat"
                className="text-sm"
              >
                {achievement.name} - {achievement.year}
              </Chip>
            ))}
          </div>
        </section>

        {/* What Our Guests Say */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-primary-50 p-6 rounded-lg">
                <blockquote className="text-gray-700 mb-4 italic">
                  "{review.text}"
                </blockquote>
                <cite className="text-primary font-medium">– {review.source}</cite>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}