import { createLazyFileRoute } from '@tanstack/react-router'
import { Card, CardBody, Button, Image } from '@heroui/react'
import { useMenu } from '../hooks/useMenu'
import { useCart } from '../hooks/useCart.jsx'

// Import default image for fallback
import homeImage from '../assets/images/home-cafe-fausse.webp'

export const Route = createLazyFileRoute('/menu')({
  component: Menu,
})

function Menu() {
  const { data: menu, isLoading, error } = useMenu()
  const { addToCart } = useCart()

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





  const handleAddToCart = (item, categoryId) => {
    // Ensure each item has a consistent ID by combining category and item info (no timestamp)
    const consistentId = `${categoryId}-${item.item_name?.replace(/\s+/g, '-').toLowerCase()}`
    const itemWithUniqueId = {
      ...item,
      id: item.id || consistentId,
      uniqueCartId: consistentId
    }
    
    addToCart(itemWithUniqueId)
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
      {/* Header Image */}
      <div className="relative h-80 bg-cover bg-center" style={{
        backgroundImage: `url('https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-ribeye-steak_zzoddf.webp')`
      }}>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Menu Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our menu</h1>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.items?.length > 0 ? (
                category.items.map((item) => (
                  <div key={item.id} className="text-center p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Item Image */}
                    <div className="mb-4 flex justify-center">
                      <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                        <Image
                          src={item.image_url || item.image}
                          alt={item.item_name || 'Menu item'}
                          className="w-full h-full object-cover"
                          fallbackSrc={homeImage}
                          radius="full"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Item Info */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.item_name}
                      </h3>
                      
                      <p className="text-sm text-gray-600 leading-relaxed min-h-[60px]">
                        {item.description}
                      </p>

                      {/* Order Button */}
                      <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2"
                        size="sm"
                        onPress={() => handleAddToCart(item, category.id)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
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