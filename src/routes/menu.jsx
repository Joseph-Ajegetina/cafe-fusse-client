import { createFileRoute } from '@tanstack/react-router'
import { Card, CardHeader, CardBody, Divider } from '@heroui/react'

export const Route = createFileRoute('/menu')({
  component: Menu,
})

function Menu() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes that blend traditional Italian flavors 
            with modern culinary innovation.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Starters */}
          <Card className="shadow-md">
            <CardHeader className="bg-amber-50">
              <h2 className="text-2xl font-bold text-amber-700">Starters</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Bruschetta</h3>
                  <p className="text-gray-600">Fresh tomatoes, basil, olive oil, and toasted baguette slices</p>
                </div>
                <span className="font-bold text-amber-600">$8.50</span>
              </div>
              <Divider />
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Caesar Salad</h3>
                  <p className="text-gray-600">Crisp romaine with homemade Caesar dressing</p>
                </div>
                <span className="font-bold text-amber-600">$9.00</span>
              </div>
            </CardBody>
          </Card>

          {/* Main Courses */}
          <Card className="shadow-md">
            <CardHeader className="bg-amber-50">
              <h2 className="text-2xl font-bold text-amber-700">Main Courses</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Grilled Salmon</h3>
                  <p className="text-gray-600">Served with lemon butter sauce and seasonal vegetables</p>
                </div>
                <span className="font-bold text-amber-600">$22.00</span>
              </div>
              <Divider />
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Ribeye Steak</h3>
                  <p className="text-gray-600">12 oz prime cut with garlic mashed potatoes</p>
                </div>
                <span className="font-bold text-amber-600">$28.00</span>
              </div>
              <Divider />
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Vegetable Risotto</h3>
                  <p className="text-gray-600">Creamy Arborio rice with wild mushrooms</p>
                </div>
                <span className="font-bold text-amber-600">$18.00</span>
              </div>
            </CardBody>
          </Card>

          {/* More sections can be added here */}
        </div>
      </div>
    </div>
  )
} 