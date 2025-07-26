import { useMutation } from '@tanstack/react-query'
import { newsletterService } from '../lib/api'

// Hook for newsletter subscription
export const useNewsletterSubscription = () => {
  return useMutation({
    mutationFn: newsletterService.subscribe,
    onSuccess: (data) => {
      console.log('Newsletter subscription successful:', data)
    },
    onError: (error) => {
      console.error('Newsletter subscription failed:', error)
    },
  })
}

// Hook for newsletter unsubscription
export const useNewsletterUnsubscription = () => {
  return useMutation({
    mutationFn: newsletterService.unsubscribe,
    onSuccess: (data) => {
      console.log('Newsletter unsubscription successful:', data)
    },
    onError: (error) => {
      console.error('Newsletter unsubscription failed:', error)
    },
  })
} 