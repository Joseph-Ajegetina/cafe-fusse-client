import { createLazyFileRoute } from '@tanstack/react-router'
import { Card, CardBody, Button } from '@heroui/react'
import { useMenu } from '../hooks/useMenu'

// Import default image for fallback
import homeImage from '../assets/images/home-cafe-fausse.webp'

export const Route = createLazyFileRoute('/menu')({
  component: Menu,
})

function Menu() {
  const { data: menu, isLoading, error } = useMenu()

  // Transform API data to match expected structure
  const transformApiData = (apiData) => {
    if (!apiData) return null
    
    // Handle different API response structures
    let categoriesArray = null
    
    if (Array.isArray(apiData)) {
      // Direct array response
      categoriesArray = apiData
    } else if (apiData.menu && Array.isArray(apiData.menu)) {
      // Object with menu property containing array
      categoriesArray = apiData.menu
    } else {
      return null
    }
    
    return {
      categories: categoriesArray.map(category => ({
        id: category.category_id,
        name: category.category_name,
        description: category.description || "",
        items: category.items || []
      }))
    }
  }

  const menuData = transformApiData(menu)
  console.log(menuData)

  const getDietaryColor = (info) => {
    switch(info) {
      case 'vegetarian': return 'success'
      case 'vegan': return 'success'
      case 'gluten-free': return 'warning'
      case 'spicy': return 'danger'
      case 'customizable': return 'primary'
      default: return 'default'
    }
  }



  const handleAddToCart = (item) => { // eslint-disable-line no-unused-vars
    // TODO: Implement cart functionality
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading our delicious menu...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted selection of authentic dishes, 
            prepared with the finest ingredients and traditional techniques.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <Card className="max-w-md mx-auto">
              <CardBody className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Unable to Load Menu</h3>
                <p className="text-gray-600 mb-4">
                  We're having trouble loading our menu. Please try refreshing the page or contact us directly.
                </p>
                <Button 
                  color="primary" 
                  onClick={() => window.location.reload()}
                >
                  Try Again
                </Button>
              </CardBody>
            </Card>
          </div>
        )}

        {/* Categories */}
        {!error && menuData?.categories?.map((category) => (
          <section key={category.id} className="mb-16">
            {/* Category Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {category.name}
              </h2>
              {category.description && (
                <p className="text-gray-600 text-lg">{category.description}</p>
              )}
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.items?.length > 0 ? (
                category.items.map((item) => (
                  <Card key={item.id} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <CardBody className="p-6">
                      {/* Item Image */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                          <img
                            src={item.image_url || item.image || homeImage}
                            alt={item.item_name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Prevent infinite loop by only setting fallback once
                              if (e.target.src !== homeImage) {
                                e.target.src = homeImage
                              } else {
                                // If even the fallback fails, hide the image and show a placeholder
                                e.target.style.display = 'none'
                                e.target.parentElement.innerHTML = `
                                  <div class="w-full h-full bg-primary/10 flex items-center justify-center">
                                    <span class="text-primary text-2xl">🍽️</span>
                                  </div>
                                `
                              }
                            }}
                          />
                        </div>
                      </div>

                      {/* Item Info */}
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.item_name}
                        </h3>
                        
                        <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">
                          {item.description}
                        </p>

                        {/* Price */}
                        <div className="text-xl font-bold text-gray-900 mb-3">
                          ${parseFloat(item.price).toFixed(0)}
                        </div>

                        {/* Dietary Info */}
                        {item.dietary_info && item.dietary_info.length > 0 && (
                          <div className="flex flex-wrap justify-center gap-1 mb-4">
                            {item.dietary_info.map((info, index) => (
                              <Chip 
                                key={index}
                                size="sm"
                                color={getDietaryColor(info)}
                                variant="flat"
                                className="text-xs"
                              >
                                {info.charAt(0).toUpperCase() + info.slice(1).replace('-', ' ')}
                              </Chip>
                            ))}
                          </div>
                        )}

                        {/* Add to Cart Button */}
                        <Button
                          color="primary"
                          variant="flat"
                          size="sm"
                          className="w-full"
                          onPress={() => handleAddToCart(item)}
                        >
                          Add to cart
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="text-gray-500">
                    <p className="text-lg">No items available in this category at the moment.</p>
                    <p className="text-sm mt-2">Please check back soon for new additions.</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* No categories message */}
        {!error && (!menuData?.categories || menuData.categories.length === 0) && (
          <div className="text-center py-16">
            <Card className="max-w-md mx-auto">
              <CardBody className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Menu Not Available</h3>
                <p className="text-gray-600">
                  Our menu is currently being updated. Please check back soon or contact us directly for current offerings.
                </p>
              </CardBody>
            </Card>
          </div>
        )}

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-sm mt-16 border-t border-gray-200 pt-8">
          <p>Please inform your server of any allergies or dietary restrictions.</p>
          <p className="mt-2">Menu items and prices are subject to change based on seasonal availability.</p>
        </div>
      </div>
    </div>
  )
} 