import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { reservationService } from '../lib/api'

// Query keys for caching
export const reservationKeys = {
  all: ['reservations'],
  availability: (date, time, guests) => ['reservations', 'availability', { date, time, guests }],
  availableSlots: (date) => ['reservations', 'available-slots', date],
}

// Hook for creating a reservation
export const useCreateReservation = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: reservationService.createReservation,
    onSuccess: (data) => {
      // Invalidate and refetch availability queries
      queryClient.invalidateQueries({ queryKey: reservationKeys.all })
      console.log('Reservation created successfully:', data)
    },
    onError: (error) => {
      console.error('Failed to create reservation:', error)
    },
  })
}

// Hook for checking availability
export const useCheckAvailability = (date, time, guests, enabled = false) => {
  return useQuery({
    queryKey: reservationKeys.availability(date, time, guests),
    queryFn: () => reservationService.checkAvailability(date, time, guests),
    enabled: enabled && !!date && !!time && !!guests,
    staleTime: 2 * 60 * 1000, // 2 minutes
  })
}

// Hook for getting available time slots
export const useAvailableSlots = (date, numGuests = 2, enabled = false) => {
  return useQuery({
    queryKey: [...reservationKeys.availableSlots(date), numGuests],
    queryFn: () => reservationService.getAvailableSlots(date, numGuests),
    enabled: enabled && !!date,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
} 