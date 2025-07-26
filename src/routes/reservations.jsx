import { createFileRoute } from '@tanstack/react-router'
import { Card, CardHeader, CardBody, Button, Input, Select, SelectItem, Textarea, Spinner } from '@heroui/react'
import { useState } from 'react'
import { useCreateReservation, useAvailableSlots } from '../hooks/useReservations'

export const Route = createFileRoute('/reservations')({
  component: Reservations,
})

function Reservations() {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  })

  const createReservationMutation = useCreateReservation()
  const { data: availableSlots, isLoading: slotsLoading } = useAvailableSlots(
    formData.date,
    parseInt(formData.guests) || 2,
    !!formData.date && !!formData.guests
  )

  const guestCounts = ["1", "2", "3", "4", "5", "6", "7", "8+"]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      await createReservationMutation.mutateAsync({
        customer_name: formData.customerName,
        email: formData.email,
        phone_number: formData.phone || null,
        date: formData.date,
        time: formData.time,
        guests: parseInt(formData.guests),
        special_requests: formData.specialRequests || null
      })
      
      // Reset form on success
      setFormData({
        customerName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        specialRequests: ''
      })
    } catch (error) {
      console.error('Reservation failed:', error)
    }
  }

  const timeSlots = availableSlots?.available_slots?.map(slot => slot.time) || [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", 
    "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Make a Reservation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reserve your table at Café Fausse for an unforgettable dining experience. 
            We look forward to serving you.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="bg-amber-50">
            <h2 className="text-2xl font-bold text-amber-700">Reservation Details</h2>
          </CardHeader>
          <CardBody className="space-y-6">
            {/* Success Message */}
            {createReservationMutation.isSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                🎉 Your reservation has been confirmed! We'll send you a confirmation email shortly.
              </div>
            )}
            
            {/* Error Message */}
            {createReservationMutation.isError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                ❌ {createReservationMutation.error?.message || 'Failed to make reservation. Please try again.'}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Customer Name"
                    placeholder="Enter your full name"
                    variant="bordered"
                    value={formData.customerName}
                    onChange={(e) => handleInputChange('customerName', e.target.value)}
                    isRequired
                    isDisabled={createReservationMutation.isPending}
                  />
                  <Input
                    label="Email Address"
                    placeholder="Enter your email"
                    type="email"
                    variant="bordered"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    isRequired
                    isDisabled={createReservationMutation.isPending}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Input
                    label="Date"
                    placeholder="Select date"
                    type="date"
                    variant="bordered"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    isRequired
                    isDisabled={createReservationMutation.isPending}
                  />
                  <Select
                    label="Time"
                    placeholder={slotsLoading ? "Loading times..." : "Select time"}
                    variant="bordered"
                    selectedKeys={formData.time ? [formData.time] : []}
                    onSelectionChange={(keys) => handleInputChange('time', Array.from(keys)[0] || '')}
                    isRequired
                    isDisabled={createReservationMutation.isPending || slotsLoading}
                  >
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Number of Guests"
                    placeholder="Select guests"
                    variant="bordered"
                    selectedKeys={formData.guests ? [formData.guests] : []}
                    onSelectionChange={(keys) => handleInputChange('guests', Array.from(keys)[0] || '')}
                    isRequired
                    isDisabled={createReservationMutation.isPending}
                  >
                    {guestCounts.map((count) => (
                      <SelectItem key={count} value={count}>
                        {count}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                <Input
                  label="Phone Number (Optional)"
                  placeholder="Enter your phone number"
                  type="tel"
                  variant="bordered"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  isDisabled={createReservationMutation.isPending}
                />

                <Textarea
                  label="Special Requests"
                  placeholder="Any dietary restrictions or special occasions?"
                  variant="bordered"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  isDisabled={createReservationMutation.isPending}
                />

                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit"
                    color="warning"
                    size="lg"
                    className="bg-amber-600 text-white hover:bg-amber-700 px-12"
                    isLoading={createReservationMutation.isPending}
                    isDisabled={createReservationMutation.isPending}
                  >
                    {createReservationMutation.isPending ? (
                      <>
                        <Spinner size="sm" />
                        Making Reservation...
                      </>
                    ) : (
                      'Make Reservation'
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>For parties of 8 or more, please call us directly at (202) 555-4567</p>
        </div>
      </div>
    </div>
  )
} 