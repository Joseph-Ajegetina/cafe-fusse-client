import { Card, CardBody, Chip, Button } from '@heroui/react'
import { Link } from '@tanstack/react-router'
import { useFeaturedItems } from '../../hooks/useMenu'

const MenuPreview = () => {
  const { data: featuredItems, isLoading, error } = useFeaturedItems()

  // Fallback data for when API is not available
  const fallbackFeaturedDishes = [
    {
      name: "Ribeye Steak",
      description: "Premium cut ribeye with truffle butter, roasted vegetables, and red wine reduction.",
      price: "32.00",
      image: "https://res.cloudinary.com/duym3iexv/image/upload/v1753922657/cafe-fusse/signatures/Ribeye%20Steak.png",
      category: "Main Course",
      popular: true,
      chefSpecial: false
    },
    {
      name: "Lobster Ravioli",
      description: "House-made pasta filled with fresh lobster in a creamy tomato basil sauce.",
      price: "28.00",
      image: "https://res.cloudinary.com/duym3iexv/image/upload/v1753922674/cafe-fusse/signatures/Lobster%20Ravioli.png",
      category: "Pasta",
      popular: false,
      chefSpecial: true
    },
    {
      name: "Duck Confit",
      description: "Slow-cooked duck leg with garlic mashed potatoes and cherry gastrique.",
      price: "26.00",
      image: "https://res.cloudinary.com/duym3iexv/image/upload/v1753922824/cafe-fusse/signatures/Duck%20confit.png",
      category: "Main Course",
      popular: true,
      chefSpecial: false
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, vanilla ice cream, and berry coulis.",
      price: "12.00",
      image: "https://res.cloudinary.com/duym3iexv/image/upload/v1753922945/cafe-fusse/signatures/lava%20cake.png",
      category: "Dessert",
      popular: true,
      chefSpecial: false
    }
  ]

  // Use API data if available, otherwise use fallback
  const featuredDishes = featuredItems?.length > 0 ? featuredItems : fallbackFeaturedDishes

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Signature Dishes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredDishes.map((dish, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-100 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {dish.popular && (
                  <div className="absolute top-2 right-8">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Popular
                    </span>
                  </div>
                )}
                {dish.chefSpecial && (
                  <div className="absolute top-2 right-8">
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                      Chef's Special
                    </span>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <h3 className="font-bold text-xl text-gray-900">
                  {dish.name}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed px-4">
                  {dish.description}
                </p>
                
                <Button 
                  as={Link}
                  to="/menu"
                  color="primary"
                  className="rounded-full px-6 py-2 font-medium"
                  size="sm"
                >
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            as={Link}
            to="/menu"
            variant="bordered"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8"
            size="lg"
          >
            Explore more
          </Button>
        </div>
      </div>
    </section>
  )
}

export default MenuPreview 