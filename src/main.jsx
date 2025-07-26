import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HeroUIProvider } from '@heroui/react'
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { routeTree } from "./routeTree.gen"

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
})

// Create a new router instance
const router = createRouter({ 
  routeTree,
  context: {
    queryClient,
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </HeroUIProvider>
    </QueryClientProvider>
  </StrictMode>
)
