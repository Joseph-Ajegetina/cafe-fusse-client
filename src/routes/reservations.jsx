import { createFileRoute } from '@tanstack/react-router'
import { Card, CardHeader, CardBody, Button, Input, Select, SelectItem, Textarea } from '@heroui/react'

export const Route = createFileRoute('/reservations')({
  component: Reservations,
})

function Reservations() {
  const timeSlots = [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", 
    "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"
  ]

  const guestCounts = ["1", "2", "3", "4", "5", "6", "7", "8+"]

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Customer Name"
                placeholder="Enter your full name"
                variant="bordered"
                isRequired
              />
              <Input
                label="Email Address"
                placeholder="Enter your email"
                type="email"
                variant="bordered"
                isRequired
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Date"
                placeholder="Select date"
                type="date"
                variant="bordered"
                isRequired
              />
              <Select
                label="Time"
                placeholder="Select time"
                variant="bordered"
                isRequired
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
                isRequired
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
            />

            <Textarea
              label="Special Requests"
              placeholder="Any dietary restrictions or special occasions?"
              variant="bordered"
              rows={3}
            />

            <div className="flex justify-center pt-4">
              <Button 
                color="warning"
                size="lg"
                className="bg-amber-600 text-white hover:bg-amber-700 px-12"
              >
                Make Reservation
              </Button>
            </div>
          </CardBody>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>For parties of 8 or more, please call us directly at (202) 555-4567</p>
        </div>
      </div>
    </div>
  )
} 