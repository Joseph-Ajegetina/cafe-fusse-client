import { Button, Image } from '@heroui/react'
import { useCart } from '../../hooks/useCart.jsx'

// Import default image for fallback

const MenuCard = ({ 
  item, 
  categoryId, 
  onAddToCart,
  showPriceBadge = true,
  showBottomPrice = true,
  className = "",
  imageHeight = "h-48"
}) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    if (onAddToCart) {
      // Use custom handler if provided
      onAddToCart(item, categoryId)
    } else {
      // Default cart handling
      const consistentId = `${categoryId || 'default'}-${item.item_name?.replace(/\s+/g, '-').toLowerCase()}`
      const itemWithUniqueId = {
        ...item,
        id: item.id || consistentId,
        uniqueCartId: consistentId
      }
      addToCart(itemWithUniqueId)
    }
  }

  const price = parseFloat(item.price || 0).toFixed(0)

  return (
    <div className={`bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden ${className}`}>
      {/* Item Image */}
      <div className="relative">
        <div className={`w-full ${imageHeight} bg-gray-100 flex items-center justify-center`}>
          <Image
            src={item.image_url || item.image}
            alt={item.item_name || 'Menu item'}
            className="w-full h-full object-cover"
            radius="none"
          />
        </div>
        {/* Price Badge */}
        {showPriceBadge && (
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-md">
            <span className="text-lg font-bold text-gray-900">
              ${price}
            </span>
          </div>
        )}
      </div>

      {/* Item Info */}
      <div className="p-6 space-y-4 bg-white relative z-10">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {item.item_name}
          </h3>
          
          <p className="text-sm text-gray-600 leading-relaxed min-h-[60px]">
            {item.description}
          </p>
        </div>

        {/* Price and Add Button */}
        <div className="flex items-center justify-between border-gray-100">
          {showBottomPrice && (
            <div className="text-2xl font-bold text-orange-500">
              ${price}
            </div>
          )}
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2"
            size="sm"
            onPress={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MenuCard 