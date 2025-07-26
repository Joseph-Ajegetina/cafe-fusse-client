import { createFileRoute } from '@tanstack/react-router'
import { Card, CardBody, Image } from '@heroui/react'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

function Gallery() {
  // Placeholder images - in a real app, these would come from your backend/assets
  const galleryImages = [
    {
      id: 1,
      src: "/api/placeholder/400/300",
      alt: "Restaurant Interior",
      category: "Interior"
    },
    {
      id: 2,
      src: "/api/placeholder/400/300",
      alt: "Grilled Salmon Dish",
      category: "Food"
    },
    {
      id: 3,
      src: "/api/placeholder/400/300",
      alt: "Dining Room",
      category: "Interior"
    },
    {
      id: 4,
      src: "/api/placeholder/400/300",
      alt: "Chef's Special",
      category: "Food"
    },
    {
      id: 5,
      src: "/api/placeholder/400/300",
      alt: "Wine Selection",
      category: "Beverages"
    },
    {
      id: 6,
      src: "/api/placeholder/400/300",
      alt: "Private Event",
      category: "Events"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a visual journey through Café Fausse. Explore our elegant ambiance, 
            exquisite dishes, and memorable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card key={image.id} className="shadow-md hover:shadow-lg transition-shadow">
              <CardBody className="p-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                  fallbackSrc="https://via.placeholder.com/400x300?text=Café+Fausse"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{image.alt}</h3>
                  <p className="text-sm text-amber-600">{image.category}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="shadow-md">
            <CardBody className="p-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Experience Café Fausse</h2>
              <p className="text-gray-600 mb-6">
                Ready to create your own memorable moments? Reserve your table today 
                and join us for an exceptional dining experience.
              </p>
              <div className="flex justify-center">
                <a 
                  href="/reservations"
                  className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                >
                  Make a Reservation
                </a>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
} 