import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Card, CardBody, Button, Input, Image } from "@heroui/react";
import { useCart } from "../hooks/useCart.jsx";
import { useMenu } from "../hooks/useMenu";
import { useState } from "react";
import MenuCard from "../components/common/MenuCard";

// Import default image for fallback
import homeImage from "../assets/images/home-cafe-fausse.webp";

export const Route = createLazyFileRoute("/checkout")({
  component: Checkout,
});

function Checkout() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } =
    useCart();
  const { data: menu } = useMenu();
  const [voucher, setVoucher] = useState("");
  const [appliedVoucher, setAppliedVoucher] = useState("");
  const [shippingFee] = useState(0);
  const [serviceFee] = useState(0);

  const subtotal = getCartTotal();
  const total = subtotal + shippingFee + serviceFee;

  const handleApplyVoucher = () => {
    if (voucher.toLowerCase() === "freeship") {
      setAppliedVoucher("freeship");
      // Could implement shipping fee discount here
    }
    setVoucher("");
  };

  // Get recommended items from menu (first 4 items from first category)
  const getRecommendedItems = () => {
    if (!menu) return [];

    // Handle different API response structures
    let categoriesArray = null;

    if (Array.isArray(menu)) {
      // Direct array response
      categoriesArray = menu;
    } else if (menu.menu && Array.isArray(menu.menu)) {
      // Object with menu property containing array
      categoriesArray = menu.menu;
    } else if (menu.categories && Array.isArray(menu.categories)) {
      // Already transformed data
      categoriesArray = menu.categories;
    } else {
      return [];
    }

    if (categoriesArray.length === 0) return [];

    const firstCategory = categoriesArray[0];
    const items = firstCategory.items || [];

    // Get first 4 items and ensure they have proper structure
    return items.slice(0, 4).map((item) => ({
      ...item,
      id:
        item.id ||
        `recommended-${item.item_name?.replace(/\s+/g, "-").toLowerCase()}`,
      price: item.price || "15",
    }));
  };

  const recommendedItems = getRecommendedItems();

  // Fallback recommended items if API data is not available
  const fallbackRecommendedItems = [
    {
      id: "dynamite-bowl",
      item_name: "Dynamite Bowl",
      description:
        "Tuna • Shrimp • Carrot • Mango • Jalapeno • Cucumber • Chili Flakes • Sesame Seeds",
      price: "20",
      image_url: homeImage,
    },
    {
      id: "duke-bowl",
      item_name: "The Duke Bowl",
      description:
        "Tuna • Salmon • Shrimp • Seaweed • Salad • Jalapeno • Sweet Onion • Edamame • Cucumber",
      price: "16",
      image_url: homeImage,
    },
    {
      id: "volcano-bowl",
      item_name: "Volcano Bowl",
      description:
        "Spicy Salmon • Spicy Tuna • Green Onion • Cabbage • Cucumber • Carrot • Jalapeno • Ginger",
      price: "12",
      image_url: homeImage,
    },
    {
      id: "salmon-bowl",
      item_name: "Salmon Bowl",
      description:
        "Spicy Salmon • Green Onion • Avocado • Cucumber • Ginger • House Sauce mixed with light sriracha • Furikake • Lemon",
      price: "15",
      image_url: homeImage,
    },
  ];

  const displayRecommendedItems =
    recommendedItems.length > 0 ? recommendedItems : fallbackRecommendedItems;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardBody className="p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Your cart is empty
            </h3>
            <p className="text-gray-600 mb-6">
              Add some delicious dishes to get started!
            </p>
            <Button
              as={Link}
              to="/menu"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Browse Menu
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Order Summary */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Order summary
            </h2>

            <div className="space-y-4 mb-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 bg-white p-4 rounded-xl"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                    <Image
                      src={item.image_url || item.image}
                      alt={item.item_name || 'Cart item'}
                      className="w-full h-full object-cover"
                      fallbackSrc={homeImage}
                      radius="full"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {item.item_name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    ${(parseFloat(item.price) * item.quantity).toFixed(0)}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                      <button
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded"
                        onClick={() =>
                          updateQuantity(
                            item.uniqueCartId || item.id,
                            item.quantity - 1
                          )
                        }
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded"
                        onClick={() =>
                          updateQuantity(
                            item.uniqueCartId || item.id,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="p-2 hover:bg-red-100 rounded text-red-500"
                      onClick={() =>
                        removeFromCart(item.uniqueCartId || item.id)
                      }
                      title="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Payment & Summary */}
          <div className="space-y-6">
            {/* Payment Method */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Payment method
              </h3>
              <div className="bg-white p-4 rounded-xl border-2 border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-5 bg-gradient-to-r from-red-500 to-orange-500 rounded-sm"></div>
                    <span className="font-medium">Mastercard</span>
                    <span className="text-gray-600">•••• 5987</span>
                  </div>
                </div>
              </div>
              <button className="text-orange-500 text-sm mt-2 hover:underline">
                Change payment methods
              </button>
            </div>

            {/* Voucher */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Voucher</h3>
              <div className="flex space-x-2">
                <Input
                  placeholder="freeship"
                  value={voucher}
                  onChange={(e) => setVoucher(e.target.value)}
                  className="flex-1"
                />
                <Button
                  onClick={handleApplyVoucher}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6"
                >
                  Apply
                </Button>
              </div>
              {appliedVoucher && (
                <div className="mt-2">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                    {appliedVoucher}
                  </span>
                </div>
              )}
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Summary</h3>
              <div className="bg-white p-6 rounded-xl space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Ship</span>
                  <span>${shippingFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fee</span>
                  <span>${serviceFee}</span>
                </div>
                <hr />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-orange-500">${total.toFixed(0)}</span>
                </div>
              </div>

              <Button 
                as={Link}
                to="/success"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4 py-3 text-lg font-medium"
              >
                Proceed to payment
              </Button>
            </div>
          </div>
        </div>

        {/* You might also like */}
        {displayRecommendedItems.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              You might also like
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayRecommendedItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  categoryId="recommended"
                  className="max-w-sm mx-auto"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
