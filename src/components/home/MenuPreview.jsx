import { Card, CardBody, Button, Chip, Spinner } from '@heroui/react'
import { Link } from '@tanstack/react-router'
import { useFeaturedItems } from '../../hooks/useMenu'

const MenuPreview = () => {
  const { data: featuredData, isLoading } = useFeaturedItems()

  // Fallback featured dishes with real images
  const fallbackFeaturedDishes = [
    {
      id: 1,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables",
      price: "22.00",
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      popular: true
    },
    {
      id: 2,
      name: "Bruschetta",
      description: "Fresh tomatoes, basil, olive oil, and toasted baguette slices",
      price: "8.50",
      category: "Starter",
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Ribeye Steak",
      description: "12 oz prime cut with garlic mashed potatoes",
      price: "28.00",
      category: "Main Course", 
      image: "/src/assets/images/gallery-ribeye-steak.webp",
      chefSpecial: true
    },
    {
      id: 4,
      name: "Tiramisu",
      description: "Classic Italian dessert with mascarpone",
      price: "7.50",
      category: "Dessert",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ]

  const featuredDishes = featuredData?.items || fallbackFeaturedDishes

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <Spinner size="lg" />
            <p className="mt-4 text-gray-600">Loading featured dishes...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Dishes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover some of our most beloved dishes, crafted with passion and 
            the finest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredDishes.map((dish, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-0">
                <div className="relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {dish.popular && (
                      <Chip size="sm" color="danger" variant="solid">
                        Popular
                      </Chip>
                    )}
                    {dish.chefSpecial && (
                      <Chip size="sm" color="warning" variant="solid">
                        Chef's Special
                      </Chip>
                    )}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {dish.name}
                    </h3>
                    <span className="font-bold text-amber-600 text-lg">
                      ${parseFloat(dish.price).toFixed(2)}
                    </span>
                  </div>
                  
                  <Chip 
                    size="sm" 
                    variant="flat" 
                    color="default"
                    className="mb-3"
                  >
                    {dish.category}
                  </Chip>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            as={Link}
            to="/menu"
            size="lg"
            color="warning"
            className="bg-amber-600 text-white hover:bg-amber-700 px-8"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}

export default MenuPreview 