import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Layout from '../components/layout/Layout'
import { CartProvider } from '../hooks/useCart.jsx'

export const Route = createRootRoute({
  component: () => (
    <>
      <CartProvider>
      <Layout>
        <Outlet />
      </Layout>
      </CartProvider>
      <TanStackRouterDevtools />
    </>
  ),
})