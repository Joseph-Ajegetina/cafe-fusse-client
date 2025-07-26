import { createFileRoute } from '@tanstack/react-router'
import { Card, CardBody, Chip } from '@heroui/react'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const awards = [
    "Culinary Excellence Award – 2022",
    "Restaurant of the Year – 2023", 
    "Best Fine Dining Experience – Foodie Magazine, 2023"
  ]

  const reviews = [
    {
      text: "Exceptional ambiance and unforgettable flavors.",
      source: "Gourmet Review"
    },
    {
      text: "A must-visit restaurant for food enthusiasts.",
      source: "The Daily Bite"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Café Fausse</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Where tradition meets innovation. Discover our story, our passion, 
            and our commitment to exceptional dining.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Restaurant History */}
          <Card className="shadow-md">
            <CardBody className="p-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Founded in 2010 by Chef Antonio Rossi and restaurateur Maria Lopez, 
                  Café Fausse blends traditional Italian flavors with modern culinary innovation. 
                  Our mission is to provide an unforgettable dining experience that reflects 
                  both quality and creativity.
                </p>
                <p className="mb-4">
                  Chef Antonio brings over 20 years of culinary expertise from renowned 
                  kitchens across Italy and France, while Maria's passion for hospitality 
                  ensures every guest feels welcomed and valued.
                </p>
                <p>
                  At Café Fausse, we believe in the power of locally sourced ingredients, 
                  sustainable practices, and the art of bringing people together around 
                  exceptional food.
                </p>
              </div>
            </CardBody>
          </Card>

          {/* Mission & Values */}
          <Card className="shadow-md">
            <CardBody className="p-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-6">Our Commitment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quality</h3>
                  <p className="text-gray-600">
                    We source the finest ingredients and maintain the highest 
                    culinary standards in every dish we serve.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Creativity</h3>
                  <p className="text-gray-600">
                    Our menu constantly evolves, featuring innovative dishes 
                    that surprise and delight our guests.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
                  <p className="text-gray-600">
                    We partner with local farms and suppliers to support our 
                    community and reduce our environmental impact.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Awards */}
          <Card className="shadow-md">
            <CardBody className="p-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-6">Awards & Recognition</h2>
              <div className="space-y-3">
                {awards.map((award, index) => (
                  <Chip 
                    key={index}
                    color="warning"
                    variant="flat"
                    size="lg"
                    className="mr-2 mb-2"
                  >
                    {award}
                  </Chip>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Customer Reviews */}
          <Card className="shadow-md">
            <CardBody className="p-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-6">What Our Guests Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-amber-50 p-6 rounded-lg">
                    <blockquote className="text-gray-700 italic mb-2">
                      "{review.text}"
                    </blockquote>
                    <cite className="text-amber-600 font-medium">– {review.source}</cite>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}