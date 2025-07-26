import { createFileRoute } from '@tanstack/react-router'
import { Card, CardHeader, CardBody, Divider, Spinner, Chip } from '@heroui/react'
import { useMenu } from '../hooks/useMenu'

export const Route = createFileRoute('/menu')({
  component: Menu,
})

function Menu() {
  const { data: menuData, isLoading, isError, error } = useMenu()

  // Fallback menu data in case backend is not available
  const fallbackMenu = {
    menu: [
      {
        id: 1,
        name: "Starters",
        items: [
          {
            id: 1,
            name: "Bruschetta",
            description: "Fresh tomatoes, basil, olive oil, and toasted baguette slices",
            price: "8.50"
          },
          {
            id: 2,
            name: "Caesar Salad",
            description: "Crisp romaine with homemade Caesar dressing",
            price: "9.00"
          }
        ]
      },
      {
        id: 2,
        name: "Main Courses",
        items: [
          {
            id: 3,
            name: "Grilled Salmon",
            description: "Served with lemon butter sauce and seasonal vegetables",
            price: "22.00"
          },
          {
            id: 4,
            name: "Ribeye Steak",
            description: "12 oz prime cut with garlic mashed potatoes",
            price: "28.00"
          },
          {
            id: 5,
            name: "Vegetable Risotto",
            description: "Creamy Arborio rice with wild mushrooms",
            price: "18.00"
          }
        ]
      },
      {
        id: 3,
        name: "Desserts",
        items: [
          {
            id: 6,
            name: "Tiramisu",
            description: "Classic Italian dessert with mascarpone",
            price: "7.50"
          },
          {
            id: 7,
            name: "Cheesecake",
            description: "Creamy cheesecake with berry compote",
            price: "7.00"
          }
        ]
      },
      {
        id: 4,
        name: "Beverages",
        items: [
          {
            id: 8,
            name: "Red Wine (Glass)",
            description: "A selection of Italian reds",
            price: "10.00"
          },
          {
            id: 9,
            name: "White Wine (Glass)",
            description: "Crisp and refreshing",
            price: "9.00"
          },
          {
            id: 10,
            name: "Craft Beer",
            description: "Local artisan brews",
            price: "6.00"
          },
          {
            id: 11,
            name: "Espresso",
            description: "Strong and aromatic",
            price: "3.00"
          }
        ]
      }
    ]
  }

  const menu = menuData || fallbackMenu

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Spinner size="lg" />
          <p className="mt-4 text-gray-600">Loading our delicious menu...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes that blend traditional Italian flavors 
            with modern culinary innovation.
          </p>
          
          {/* Connection Status */}
          {isError && (
            <div className="mt-4">
              <Chip color="warning" variant="flat" size="sm">
                📡 Showing offline menu - {error?.message || 'Unable to connect to server'}
              </Chip>
            </div>
          )}
          
          {!isError && menuData && (
            <div className="mt-4">
              <Chip color="success" variant="flat" size="sm">
                ✅ Live menu updated
              </Chip>
            </div>
          )}
        </div>

        <div className="grid gap-8">
          {(menu.menu || menu.categories)?.map((category) => (
            <Card key={category.category_id || category.id} className="shadow-md">
              <CardHeader className="bg-amber-50">
                <h2 className="text-2xl font-bold text-amber-700">
                  {category.category_name || category.name}
                </h2>
              </CardHeader>
              <CardBody className="space-y-4">
                {category.items?.map((item, index) => (
                  <div key={item.item_id || item.id}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {item.item_name || item.name}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <span className="font-bold text-amber-600">
                        ${parseFloat(item.price).toFixed(2)}
                      </span>
                    </div>
                    {index < category.items.length - 1 && <Divider />}
                  </div>
                ))}
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 