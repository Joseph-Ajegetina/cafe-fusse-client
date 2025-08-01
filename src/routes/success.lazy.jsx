import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { Button, Image } from '@heroui/react'
import { useCart } from '../hooks/useCart.jsx'
import { useState } from 'react'

export const Route = createLazyFileRoute('/success')({
  component: Success,
})

function Success() {
  const { cartItems, getCartTotal, clearCart } = useCart()
  const [orderDetails] = useState({
    date: new Date().toLocaleDateString('en-GB'),
    customer: 'John Miller', // This would come from user auth
    orderNumber: Math.floor(Math.random() * 900000000) + 100000000,
    paymentMethod: 'Mastercard'
  })
  const [rating, setRating] = useState(0)
  const [cartCleared, setCartCleared] = useState(false)

  const total = getCartTotal()

  // Clear cart function that can be called from multiple places
  const handleClearCart = () => {
    if (!cartCleared) {
      clearCart()
      setCartCleared(true)
    }
  }

  const handleStarClick = (starRating) => {
    setRating(starRating)
    // Clear cart when user rates their experience
    handleClearCart()
  }

  const handleBackToHome = () => {
    // Clear cart when user goes back to home
    handleClearCart()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="https://res.cloudinary.com/duym3iexv/image/upload/v1753926638/cafe-fusse/logo_labmbf.png"
              alt="Café Fausse Logo"
              className="w-8 h-8"
              fallbackSrc="https://via.placeholder.com/32x32/f97316/ffffff?text=CF"
              radius="sm"
            />
            <span className="text-xl font-bold text-gray-900">CAFÉ FAUSSE</span>
          </div>
          <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-16">
        {/* Success Icon and Message */}
        <div className="text-center mb-12">
          <div className="relative mb-8">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden bg-gray-200">
              <Image
                src="https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-ribeye-steak_zzoddf.webp"
                alt="Your Order"
                className="w-full h-full object-cover"
                fallbackSrc="https://via.placeholder.com/256x256/f3f4f6/6b7280?text=Order"
                radius="full"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank you for your purchase!</h1>
          <p className="text-lg text-gray-600">Food is on its way to you</p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-orange-500">
                  📅
                </div>
                <span className="text-gray-600">Date</span>
              </div>
              <span className="font-medium text-gray-900">{orderDetails.date}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-orange-500">
                  👤
                </div>
                <span className="text-gray-600">Customer</span>
              </div>
              <span className="font-medium text-gray-900">{orderDetails.customer}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-orange-500">
                  💳
                </div>
                <span className="text-gray-600">Payment Method</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-5 bg-gradient-to-r from-red-500 to-orange-500 rounded-sm"></div>
                <span className="font-medium text-gray-900">{orderDetails.paymentMethod}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-orange-500">
                  📄
                </div>
                <span className="text-gray-600">Order Number</span>
              </div>
              <span className="font-medium text-gray-900">{orderDetails.orderNumber}</span>
            </div>

            <div className="flex items-center justify-between text-lg">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-orange-500">
                  💰
                </div>
                <span className="text-gray-600">Total</span>
              </div>
              <span className="font-bold text-gray-900">${total.toFixed(0)}</span>
            </div>
          </div>
        </div>

        {/* Order Line Items */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Order Line</h3>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image_url || item.image}
                    alt={item.item_name}
                    className="w-full h-full object-cover"
                    fallbackSrc="https://via.placeholder.com/64x64/f3f4f6/6b7280?text=Dish"
                    radius="full"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{item.item_name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm text-gray-500">x{item.quantity}</p>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  ${(parseFloat(item.price) * item.quantity).toFixed(0)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mb-12">
          <Button
            as={Link}
            to="/"
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3"
            size="lg"
            onClick={handleBackToHome}
          >
            Back to home
          </Button>
        </div>

        {/* Rating Section */}
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-4">How was your experience?</h3>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleStarClick(star)}
                className={`text-3xl transition-colors ${
                  star <= rating ? 'text-yellow-400' : 'text-gray-300'
                } hover:text-yellow-400`}
              >
                ⭐
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="mt-4 text-sm text-gray-600">
              Thank you for rating us {rating} star{rating !== 1 ? 's' : ''}!
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image
              src="https://res.cloudinary.com/duym3iexv/image/upload/v1753926638/cafe-fusse/logo_labmbf.png"
              alt="Café Fausse Logo"
              className="w-8 h-8"
              fallbackSrc="https://via.placeholder.com/32x32/f97316/ffffff?text=CF"
              radius="sm"
            />
            <span className="text-xl font-bold">CAFÉ FAUSSE</span>
          </div>
          <p className="text-sm text-gray-400">
            Washington DC, 1234 Culinary Ave, Suite 100
          </p>
        </div>
      </footer>
    </div>
  )
} 