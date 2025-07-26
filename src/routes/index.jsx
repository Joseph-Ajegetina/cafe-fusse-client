import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      {/* Home page content will be built here */}
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Café Fausse</h1>
            <p className="text-xl text-gray-600 mb-8">Where tradition meets innovation</p>
            <div className="space-x-4">
              <a 
                href="/reservations"
                className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium inline-block"
              >
                Make Reservation
              </a>
              <a 
                href="/menu"
                className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg hover:bg-amber-600 hover:text-white transition-colors font-medium inline-block"
              >
                View Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}