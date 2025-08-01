import { createLazyFileRoute } from '@tanstack/react-router'
import { Card, CardBody, Button, Image } from '@heroui/react'
import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useMenu } from '../hooks/useMenu'

export const Route = createLazyFileRoute('/gallery')({
  component: Gallery,
})

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { data: menu, isLoading, error } = useMenu()

  // Awards data
  const achievements = [
    { 
      name: "Michelin Star", 
      year: "2023",
      quote: "An exceptional culinary journey that tantalizes the senses. A well-deserved star for their innovation and quality.",
      icon: "⭐",
      bgColor: "bg-yellow-100",
      iconBg: "bg-slate-700",
      titleColor: "text-amber-800"
    },
    { 
      name: "Restaurant of the Year", 
      year: "2023",
      quote: "Outstanding service, exceptional cuisine, and an unforgettable dining atmosphere that sets the standard for excellence.",
      icon: "🏆",
      bgColor: "bg-blue-100",
      iconBg: "bg-amber-600",
      titleColor: "text-blue-800"
    },
    { 
      name: "Best Fine Dining Experience", 
      year: "2023",
      quote: "Foodie Magazine recognizes Café Fausse for delivering an unparalleled fine dining experience.",
      icon: "🥇",
      bgColor: "bg-green-100",
      iconBg: "bg-green-600",
      titleColor: "text-green-800"
    }
  ]

  // Customer reviews data
  const customerReviews = [
    {
      quote: "Exceptional ambiance and unforgettable flavors.",
      source: "Gourmet Review",
      rating: 5
    },
    {
      quote: "A must-visit restaurant for food enthusiasts.",
      source: "The Daily Bite",
      rating: 5
    },
  ]

  // Transform menu data to gallery images
  const transformMenuToGallery = (menuData) => {
    if (!menuData) return []
    
    let categoriesArray = []
    
    if (Array.isArray(menuData)) {
      categoriesArray = menuData
    } else if (menuData.menu && Array.isArray(menuData.menu)) {
      categoriesArray = menuData.menu
    }

    const galleryItems = []
    categoriesArray.forEach((category, categoryIndex) => {
      if (category.items && Array.isArray(category.items)) {
        category.items.forEach((item, itemIndex) => {
          if (item.image_url || item.image) {
            galleryItems.push({
              id: `${category.category_id || categoryIndex}-${item.id || itemIndex}`,
              src: item.image_url || item.image,
              alt: item.item_name || `${category.category_name} dish`,
              category: category.category_name || 'Menu Item'
            })
          }
        })
      }
    })
    
    return galleryItems
  }

  const menuGalleryImages = transformMenuToGallery(menu)

  // Static gallery images to extend the menu items
  const fallbackImages = [
    {
      id: "static-1",
      src: "https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-ribeye-steak_zzoddf.webp",
      alt: "Premium Ribeye Steak with Truffle Butter",
      category: "Main Courses"
    },
    {
      id: "static-2",
      src: "https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-cafe-interior_qgcoka.webp",
      alt: "Elegant Dining Room Interior",
      category: "Restaurant"
    },
    {
      id: "static-3",
      src: "https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-special-event_q2r96c.webp",
      alt: "Special Event Celebration",
      category: "Events"
    },
    {
      id: "static-4",
      src: "https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/home-cafe-fausse_f7mvr1.webp",
      alt: "Restaurant Exterior and Ambiance",
      category: "Restaurant"
    },
    {
      id: "static-5",
      src: "https://res.cloudinary.com/duym3iexv/image/upload/v1753921362/cafe-fusse/desserts/fine-dinning-cafe-dessert-6_kqqudl.png",
      alt: "Artisanal Italian Dessert",
      category: "Desserts"
    },
    {
      id: "static-6",
      src: "https://res.cloudinary.com/duym3iexv/image/upload/v1753921569/cafe-fusse/starters/fine-dinning-cafe-starter-6_y2x8gh.png",
      alt: "Gourmet Italian Appetizer",
      category: "Starters"
    },
    {
      id: "static-7",
      src: "https://res.cloudinary.com/duym3iexv/image/upload/v1753922285/cafe-fusse/main/fine-dinning-cafe-main-course-1_agppl5.png",
      alt: "Signature Italian Main Course",
      category: "Main Courses"
    },
    {
      id: "static-8",
      src: "https://res.cloudinary.com/duym3iexv/image/upload/v1753922287/cafe-fusse/main/fine-dinning-cafe-main-course--2_raog8k.png",
      alt: "Chef's Special Pasta",
      category: "Pasta"
    }
  ]

  // Combine menu images with static gallery images
  const galleryImages = [...menuGalleryImages, ...fallbackImages]

  // Lightbox handlers
  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return
      
      switch (e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'ArrowLeft':
          prevImage()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

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
        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading gallery images...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <Card className="max-w-md mx-auto">
              <CardBody className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Unable to Load Gallery</h3>
                <p className="text-gray-600 mb-4">
                  We're having trouble loading our gallery. Showing fallback images instead.
                </p>
              </CardBody>
            </Card>
          </div>
        )}

        {/* Image Gallery */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="w-full h-80 bg-gray-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  radius="none"
                />
              </div>
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl mb-1 drop-shadow-lg">
                  {image.alt}
                </h3>
                <p className="text-white/80 text-sm font-medium">
                  {image.category}
                </p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
                      ))}
          </div>
        )}

        {/* Awards & Recognition */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Awards & Recognition</h2>
            <p className="text-lg text-gray-600 mb-16 leading-relaxed max-w-3xl mx-auto">
              Our commitment to culinary excellence has been recognized by industry leaders and food critics alike.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {achievements.map((achievement, index) => (
                <div key={index} className={`${achievement.bgColor} rounded-3xl p-8 h-full flex flex-col items-center text-center`}>
                  {/* Award Icon */}
                  <div className={`${achievement.iconBg} w-20 h-20 rounded-full flex items-center justify-center mb-6`}>
                    <span className="text-2xl text-white">{achievement.icon}</span>
                  </div>
                  
                  {/* Award Title */}
                  <h3 className={`text-xl font-bold ${achievement.titleColor} mb-2`}>
                    {achievement.name}
                  </h3>
                  
                  {/* Year */}
                  <p className={`text-lg font-semibold ${achievement.titleColor} mb-4 opacity-80`}>
                    {achievement.year}
                  </p>
                  
                  {/* Quote */}
                  <blockquote className={`${achievement.titleColor} italic leading-relaxed flex-1 flex items-center text-sm`}>
                    "{achievement.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Our Guests Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Read what food critics and our valued customers have to say about their dining experience at Café Fausse.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {customerReviews.map((review, index) => (
                <Card key={index} className="shadow-lg h-full">
                  <CardBody className="p-8 flex flex-col justify-between">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-orange-400 text-2xl">⭐</span>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-lg text-gray-700 italic text-center mb-6 flex-1 flex items-center justify-center leading-relaxed">
                      "{review.quote}"
                    </blockquote>
                    
                    {/* Source */}
                    <div className="text-center">
                      <p className="font-semibold text-gray-900">— {review.source}</p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>

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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main image */}
          <div className="max-w-7xl max-h-full p-8 flex flex-col items-center justify-center">
            <Image
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain"
              radius="none"
            />
            
            {/* Image info */}
            <div className="text-center mt-6 text-white">
              <h3 className="text-xl font-semibold mb-2">{galleryImages[currentImageIndex].alt}</h3>
              <p className="text-orange-400 text-sm">{galleryImages[currentImageIndex].category}</p>
              <p className="text-gray-300 text-sm mt-2">
                {currentImageIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Background click to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
          />
        </div>
      )}
    </div>
  )
} 