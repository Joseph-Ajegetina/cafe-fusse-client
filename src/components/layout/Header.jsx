import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link as HeroLink,
} from "@heroui/react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reservations", path: "/reservations" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-gray-700 hover:text-primary transition-colors"
        />
        <NavbarBrand>
          <Link to="/" className="focus-ring rounded-lg">
            <div className="flex items-center space-x-2">
              <img
                src="/src/assets/logo.png"
                alt="logo"
                className="w-10 h-10"
              />
              <p className="font-bold text-xl text-gray-900">CAFÉ FAUSSE</p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.path}>
            <Link
              to={item.path}
              activeProps={{
                className: "text-primary font-semibold",
              }}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-3">
        <NavbarItem className="hidden sm:flex">
          <Link
            to="/menu"
            className="text-gray-700 hover:text-primary transition-colors font-medium"
          >
            Order Online
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            to="/reservations"
            className="bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-full px-6"
            size="sm"
          >
            Book a Table
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              to={item.path}
              className="w-full text-lg text-gray-700 hover:text-primary transition-colors focus-ring rounded px-2 py-1"
              size="lg"
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
            color="primary"
            className="w-full transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Make Reservation
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
