import axios from 'axios'

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor for logging and auth (if needed in future)
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`)
    return config
  },
  (error) => {
    console.error('Request error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    
    // Handle specific error cases
    if (error.response?.status === 500) {
      throw new Error('Server error. Please try again later.')
    }
    
    if (error.response?.status === 404) {
      throw new Error('Service not found.')
    }
    
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. Please check your connection.')
    }
    
    throw error
  }
)

// API Service Functions
export const reservationService = {
  // Create a new reservation
  createReservation: async (reservationData) => {
    // Transform frontend data to match backend expectations
    const backendData = {
      customer_name: reservationData.customer_name,
      email: reservationData.email,
      phone_number: reservationData.phone_number || reservationData.phone,
      reservation_datetime: `${reservationData.date}T${convertTo24Hour(reservationData.time)}:00`,
      num_of_guests: parseInt(reservationData.number_of_guests || reservationData.guests)
    }
    const response = await api.post('/reservations', backendData)
    return response.data
  },
  
  // Get available time slots for a date
  getAvailableSlots: async (date, numGuests = 2) => {
    const response = await api.get(`/reservations/slots/available?date=${date}&num_of_guests=${numGuests}`)
    return response.data
  },
  
  // Check table availability
  checkAvailability: async (dateTime, numGuests) => {
    const response = await api.post('/reservations/check-availability', {
      reservation_datetime: dateTime,
      num_of_guests: parseInt(numGuests)
    })
    return response.data
  }
}

// Helper function to convert 12-hour to 24-hour format
function convertTo24Hour(time12h) {
  const [time, modifier] = time12h.split(' ')
  let [hours, minutes] = time.split(':')
  
  if (hours === '12') {
    hours = '00'
  }
  
  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12
  }
  
  return `${hours.toString().padStart(2, '0')}:${minutes || '00'}`
}

export const newsletterService = {
  // Subscribe to newsletter
  subscribe: async (email) => {
    const response = await api.post('/newsletter/subscribe', { email })
    return response.data
  },
  
  // Unsubscribe from newsletter
  unsubscribe: async (email) => {
    const response = await api.post('/newsletter/unsubscribe', { email })
    return response.data
  }
}

export const menuService = {
  // Get full menu
  getMenu: async () => {
    const response = await api.get('/menu')
    return response.data
  },
  
  // Get menu categories
  getCategories: async () => {
    const response = await api.get('/menu/categories')
    return response.data
  },
  
  // Get menu by category ID
  getMenuByCategory: async (categoryId) => {
    const response = await api.get(`/menu/category/${categoryId}`)
    return response.data
  },
  
  // Get specific menu item
  getMenuItem: async (itemId) => {
    const response = await api.get(`/menu/item/${itemId}`)
    return response.data
  },
  
  // Search menu items
  searchMenu: async (searchTerm) => {
    const response = await api.get(`/menu/search?q=${encodeURIComponent(searchTerm)}`)
    return response.data
  }
}

export const contactService = {
  // Send contact form
  sendMessage: async (messageData) => {
    const response = await api.post('/contact', messageData)
    return response.data
  }
}

// Export the configured axios instance for direct use if needed
export default api 