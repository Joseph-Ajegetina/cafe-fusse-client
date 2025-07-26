import { createFileRoute } from '@tanstack/react-router'
import { Card, CardBody, Button, Image } from '@heroui/react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: "/src/assets/images/gallery-ribeye-steak.webp",
      alt: "Premium Ribeye Steak with Truffle Butter",
      category: "Main Courses"
    },
    {
      id: 2,
      src: "/src/assets/images/gallery-cafe-interior.webp",
      alt: "Elegant Dining Room Interior",
      category: "Restaurant"
    },
    {
      id: 3,
      src: "/src/assets/images/gallery-special-event.webp",
      alt: "Special Event Celebration",
      category: "Events"
    },
    {
      id: 4,
      src: "/src/assets/images/home-cafe-fausse.webp",
      alt: "Restaurant Exterior and Ambiance",
      category: "Restaurant"
    },
    {
      id: 5,
      src: "/src/assets/images/gallery-ribeye-steak.webp",
      alt: "Handmade Pasta with Fresh Herbs",
      category: "Pasta"
    },
    {
      id: 6,
      src: "/src/assets/images/gallery-cafe-interior.webp",
      alt: "Private Dining Room Setup",
      category: "Restaurant"
    },
    {
      id: 7,
      src: "/src/assets/images/gallery-special-event.webp",
      alt: "Chef's Special Dessert Presentation",
      category: "Desserts"
    },
    {
      id: 8,
      src: "/src/assets/images/home-cafe-fausse.webp",
      alt: "Wine Selection and Bar Area",
      category: "Bar"
    },
    {
      id: 9,
      src: "/src/assets/images/gallery-ribeye-steak.webp",
      alt: "Fresh Seafood Display",
      category: "Seafood"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a visual journey through Café Fausse. From our expertly crafted dishes 
            to our elegant dining spaces, discover what makes our restaurant special.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image) => (
            <Card key={image.id} className="shadow-lg hover:shadow-xl transition-shadow group">
              <CardBody className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium drop-shadow-lg">{image.alt}</p>
                    <p className="text-sm text-primary">{image.category}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="shadow-lg bg-gray-50">
          <CardBody className="text-center p-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Experience Café Fausse</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Pictures can only tell part of the story. Come and experience the exceptional flavors, 
              elegant atmosphere, and outstanding service that make Café Fausse unforgettable.
            </p>
            <Button 
              as={Link}
              to="/reservations"
              color="primary"
              size="lg"
              className="px-8 py-3 rounded-lg font-medium"
            >
              Make a Reservation
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  )
} 