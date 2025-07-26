import { useQuery } from '@tanstack/react-query'
import { menuService } from '../lib/api'

// Query keys for caching
export const menuKeys = {
  all: ['menu'],
  full: () => ['menu', 'full'],
  category: (category) => ['menu', 'category', category],
  featured: () => ['menu', 'featured'],
}

// Hook for getting the full menu
export const useMenu = () => {
  return useQuery({
    queryKey: menuKeys.full(),
    queryFn: menuService.getMenu,
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook for getting menu by category
export const useMenuByCategory = (category, enabled = true) => {
  return useQuery({
    queryKey: menuKeys.category(category),
    queryFn: () => menuService.getMenuByCategory(category),
    enabled: enabled && !!category,
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook for getting featured menu items
export const useFeaturedItems = () => {
  return useQuery({
    queryKey: menuKeys.featured(),
    queryFn: menuService.getFeaturedItems,
    staleTime: 15 * 60 * 1000, // 15 minutes
  })
} 