import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart from localStorage on initialization
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (item) => {
    setCartItems(prevItems => {
      // Use a more reliable identifier (item name + id combination)
      const itemIdentifier = item.uniqueCartId || item.id || item.item_name
      const existingItem = prevItems.find(cartItem => 
        (cartItem.uniqueCartId || cartItem.id || cartItem.item_name) === itemIdentifier
      )
      
      if (existingItem) {
        // Update quantity if item already exists
        return prevItems.map(cartItem =>
          (cartItem.uniqueCartId || cartItem.id || cartItem.item_name) === itemIdentifier
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      } else {
        // Add new item to cart
        return [...prevItems, { ...item, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => 
      (item.uniqueCartId || item.id || item.item_name) !== itemId
    ))
  }

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        (item.uniqueCartId || item.id || item.item_name) === itemId 
          ? { ...item, quantity } 
          : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (parseFloat(item.price) * item.quantity)
    }, 0)
  }

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 