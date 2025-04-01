import { Link } from "react-router-dom";
import { useState } from "react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="#" className="hover:text-red-500">Account</Link>
        <span>/</span>
        <Link to="#" className="hover:text-red-500">My Account</Link>
        <span>/</span>
        <Link to="#" className="hover:text-red-500">Product</Link>
        <span>/</span>
        <Link to="#" className="hover:text-red-500">View Cart</Link>
        <span>/</span>
        <span className="font-medium text-black">CheckOut</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
          <div className="space-y-4">
            {["First Name *", "Company Name", "Street Address *", "Apartment, floor, etc. (optional)", "Town/City *", "Phone Number *", "Email Address *"].map((placeholder, index) => (
              <input
                key={index}
                placeholder={placeholder}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                required={placeholder.includes("*")}
              />
            ))}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="saveInfo" className="border rounded" />
              <label htmlFor="saveInfo" className="text-gray-600">
                Save this information for faster check-out next time
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="space-y-4">
            {/* Order Totals */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-medium">Rs.19400</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-medium">Rs.70</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span>Total:</span>
                <span className="font-medium">Rs.19470</span>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mt-6">
              <h3 className="font-medium mb-3">Payment Method</h3>
              <div className="flex flex-col gap-3">
                {[
                  { id: "bank", label: "Bank" },
                  { id: "esewa", label: <img src="https://th.bing.com/th/id/OIP.22AxOY5ROotj1UdjeDSNDwHaD4?w=345&h=181&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="eSewa" className="h-5 inline" /> },
                  { id: "khalti", label: <img src="https://www.bing.com/th/id/OIP.VVtFlQALfXztHjSXHmNQFgHaDE?w=263&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Khalti" className="h-5 inline" /> },
                  { id: "visa", label: <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-5 inline" /> },
                  { id: "mastercard", label: <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" className="h-5 inline" /> },
                  { id: "cash", label: "Cash on delivery" }
                ].map(({ id, label }) => (
                  <label
                    key={id}
                    className={`flex items-center gap-3 p-3 border rounded-md cursor-pointer transition-all ${
                      paymentMethod === id ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={id}
                      checked={paymentMethod === id}
                      onChange={() => setPaymentMethod(id)}
                      className="hidden"
                    />
                    <span className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center">
                      {paymentMethod === id && <span className="w-3 h-3 bg-red-500 rounded-full"></span>}
                    </span>
                    {label}
                  </label>
                ))}
              </div>
            </div>

            {/* Coupon Code */}
            <div className="mt-6 flex gap-2">
              <input
                placeholder="Coupon Code"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition">
                Apply Coupon
              </button>
            </div>

            {/* Place Order Button */}
            <div className="mt-4">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-md text-lg font-semibold transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
