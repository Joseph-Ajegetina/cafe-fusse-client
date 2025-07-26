import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Card, CardBody, CardHeader, Input, Select, SelectItem, Button, Chip } from '@heroui/react'
import { useCreateReservation, useAvailableSlots } from '../hooks/useReservations'

export const Route = createFileRoute('/reservations')({
  component: Reservations,
})

function Reservations() {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phoneNumber: '',
    date: '',
    time: '',
    guests: '2'
  })

  const createReservationMutation = useCreateReservation()
  const { data: availableSlots, isLoading: slotsLoading, error: slotsError } = useAvailableSlots(
    formData.date,
    parseInt(formData.guests)
  )

  // Fallback time slots when API is unavailable
  const fallbackSlots = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00']
  const timeSlots = availableSlots || fallbackSlots

  // Debug logging
  console.log('Time Slots Debug:', {
    date: formData.date,
    availableSlots,
    slotsError,
    slotsLoading,
    timeSlots,
    shouldShowSlots: !!formData.date
  })

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
        phone_number: formData.phoneNumber,
        reservation_datetime: `${formData.date} ${formData.time}`,
        num_of_guests: parseInt(formData.guests)
      })
      
      // Reset form on success
      setFormData({
        customerName: '',
        email: '',
        phoneNumber: '',
        date: '',
        time: '',
        guests: '2'
      })
    } catch (error) {
      console.error('Reservation error:', error)
    }
  }

  const guestOptions = Array.from({ length: 10 }, (_, i) => ({
    key: (i + 1).toString(),
    label: `${i + 1} ${i === 0 ? 'Guest' : 'Guests'}`
  }))

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Make a Reservation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reserve your table at Café Fausse and experience exceptional Italian cuisine 
            in an elegant atmosphere. We look forward to serving you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reservation Form */}
          <Card className="shadow-lg">
            <CardHeader className="bg-primary-50">
              <h2 className="text-2xl font-bold text-primary">Reservation Details</h2>
            </CardHeader>
            <CardBody className="p-8">
              {/* Success Message */}
              {createReservationMutation.isSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                  🎉 Your reservation has been confirmed! We'll send you a confirmation email shortly.
                </div>
              )}
              
              {/* Error Message */}
              {createReservationMutation.isError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                  ❌ {createReservationMutation.error?.message || 'Failed to make reservation. Please try again.'}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>
                  
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    value={formData.customerName}
                    onChange={(e) => handleInputChange('customerName', e.target.value)}
                    variant="bordered"
                    isRequired
                    isDisabled={createReservationMutation.isPending}
                  />
                  
                  <Input
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    variant="bordered"
                    isRequired
                    isDisabled={createReservationMutation.isPending}
                  />
                  
                  <Input
                    type="tel"
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    variant="bordered"
                    isRequired
                    isDisabled={createReservationMutation.isPending}
                  />
                </div>

                {/* Reservation Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">Reservation Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="date"
                      label="Date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      variant="bordered"
                      isRequired
                      isDisabled={createReservationMutation.isPending}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    
                    <Select
                      label="Number of Guests"
                      placeholder="Select guests"
                      selectedKeys={[formData.guests]}
                      onSelectionChange={(keys) => handleInputChange('guests', Array.from(keys)[0])}
                      variant="bordered"
                      isRequired
                      isDisabled={createReservationMutation.isPending}
                    >
                      {guestOptions.map((option) => (
                        <SelectItem key={option.key} value={option.key}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  {/* Available Time Slots */}
                  {formData.date && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Available Times {slotsLoading && <span className="text-sm text-gray-500">(loading...)</span>}
                      </label>
                      
                      {/* Debug info */}
                      <div className="text-xs text-gray-500 mb-2">
                        Debug: {timeSlots.length} slots available
                      </div>
                      
                      {timeSlots.length > 0 ? (
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => handleInputChange('time', slot)}
                              className={`p-2 text-sm rounded-lg border transition-colors ${
                                formData.time === slot
                                  ? 'bg-primary text-white border-primary'
                                  : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                              }`}
                              disabled={createReservationMutation.isPending}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="text-gray-500 text-sm">
                          {slotsLoading ? 'Loading available times...' : 'No time slots available for this date'}
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Debug: Show when no date selected */}
                  {!formData.date && (
                    <div className="text-xs text-gray-400">
                      Select a date to see available time slots
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    className="px-12"
                    isLoading={createReservationMutation.isPending}
                    isDisabled={createReservationMutation.isPending}
                  >
                    {createReservationMutation.isPending ? 'Making Reservation...' : 'Make Reservation'}
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>

          {/* Restaurant Information */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Restaurant Information</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <span className="w-6 h-6 flex items-center justify-center mr-3">📍</span>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm">1234 Culinary Ave, Suite 100, Washington, DC 20002</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-6 h-6 flex items-center justify-center mr-3">📞</span>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm">(202) 555-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-6 h-6 flex items-center justify-center mr-3">⏰</span>
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-sm">Monday-Thursday: 5:00 PM - 10:00 PM</p>
                      <p className="text-sm">Friday-Saturday: 5:00 PM - 11:00 PM</p>
                      <p className="text-sm">Sunday: 5:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="shadow-lg">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Reservation Policy</h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  <p>• Reservations are recommended and can be made up to 30 days in advance</p>
                  <p>• Please arrive within 15 minutes of your reservation time</p>
                  <p>• For parties of 8 or more, please call us directly</p>
                  <p>• Cancellations must be made at least 2 hours in advance</p>
                  <p>• We accommodate dietary restrictions with advance notice</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 