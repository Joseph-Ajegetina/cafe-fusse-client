import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle, 
  NavbarMenu, 
  NavbarMenuItem,
  Button,
  Link as HeroLink
} from '@heroui/react'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' }
  ]

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white/95 backdrop-blur-md border-b border-gray-200"
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/">
            <p className="font-bold text-2xl text-amber-600">Café Fausse</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.path}>
            <Link 
              to={item.path}
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              activeProps={{
                className: "text-amber-600 font-semibold"
              }}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={Link} 
            to="/reservations"
            color="warning"
            variant="solid"
            className="bg-amber-600 text-white hover:bg-amber-700"
          >
            Make Reservation
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              to={item.path}
              className="w-full text-lg text-gray-700 hover:text-amber-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button 
            as={Link} 
            to="/reservations"
            color="warning"
            variant="solid"
            className="w-full mt-4 bg-amber-600 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Make Reservation
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default Header 