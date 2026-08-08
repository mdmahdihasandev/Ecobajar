import React, { useState } from 'react'
import Container from '../Components/Layuots/Container'

const Checkout = () => {

  const [payment, setPayment] = useState("cod");
  const [shipDiff, setShipDiff] = useState(false);
 
  const items = [
    { name: "Green Capsicum", 
      qty: 5,
       price: "$70.00",
        emoji: "🫑" },

    { name: "Red Capsicum",
       qty: 1,
        price: "$14.00",
         emoji: "🍅" },
         
  ];


  return (
    <div>
      <Container>
        <div className=" bg-white p-6 md:p-10">
      <div className=" mx-auto flex flex-row gap-10 items-start">
        {/* Billing Information */}
        <div className="flex-1 min-w-0">
          <h1 className="text-[24px] font-medium font-poppins text-gray-900 mb-6">
            Billing Information
          </h1>
 
          <div className="grid grid-cols-3 gap-4 mb-5">

            <div>
              <label className="block text-sm text-gray-600 mb-1.5">
                First name
              </label>
              <input type="text"  placeholder="Your first name"  className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1.5">
                Last name
              </label>
              <input
                type="text"
                placeholder="Your last name"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1.5">
                Company Name{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

          </div>


 
          <div className="mb-5">
            <label className="block text-sm text-gray-600 mb-1.5">
              Street Address
            </label>
            <input
              type="text"
              placeholder="Email"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
 
          <div className="grid grid-cols-3 gap-4 mb-5">

            <div>
              <label className="block text-sm text-gray-600 mb-1.5">
                Country / Region
              </label>
              <select className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500  bg-white">
                <option>Select</option>
                <option>Bangladesh</option>
                <option>India</option>
                <option>Pakistan</option>
                <option>japan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1.5">
                States
              </label>
              <select className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500  bg-white">
                <option>Selects</option>
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Rajshahi</option>
                <option>Khulna</option>
                <option>Barishal</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1.5">
                Zip Code
              </label>
              <input
                type="text"
                placeholder="Zip Code"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

          </div>


 
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm text-gray-600 mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1.5">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          
 
          <label className="flex items-center gap-2 mb-6 text-sm text-gray-800 cursor-pointer">
            <input
              type="checkbox"
              checked={shipDiff}
              onChange={(e) => setShipDiff(e.target.checked)}
              className="w-4 h-4 accent-green-600"
            />
            Ship to a different address
          </label>
 
          <hr className="border-gray-200 mb-6" />

        
 
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Additional Info
          </h2>
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">
              Order Notes (Optional)
            </label>
            <textarea
              placeholder="Notes about your order, e.g. special notes for delivery"
              rows={4}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 resize-y"
            />
          </div>
        </div>
 
        {/* Order Summary */}
        <div className="w-80 flex-shrink-0 border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-5">
            Order Summary
          </h2>
 
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-md bg-gray-50 flex items-center justify-center text-lg flex-shrink-0">
                {item.emoji}
              </div>
              <div className="flex-1 text-sm text-gray-800">
                {item.name}{" "}
                <span className="text-gray-400">x{item.qty}</span>
              </div>
              <div className="text-sm font-semibold text-gray-900">
                {item.price}
              </div>
            </div>
          ))}
 
          <hr className="border-gray-200 my-4" />
 
          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <span>Subtotal:</span>
            <span>$84.00</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-[15px] font-bold text-gray-900 mt-4">
            <span>Total:</span>
            <span>$84.00</span>
          </div>
 
          <h2 className="text-lg font-bold text-gray-900 mt-6 mb-4">
            Payment Method
          </h2>
 
          {[
            { id: "cod", label: "Cash on Delivery" },
            { id: "paypal", label: "Paypal" },
            { id: "amazon", label: "Amazon Pay" },
          ].map((opt) => (
            <label
              key={opt.id}
              className="flex items-center gap-2.5 mb-3 text-sm text-gray-800 cursor-pointer"
            >
              <span
                className={
                  "w-[18px] h-[18px] rounded-full border-2 border-green-500 flex items-center justify-center flex-shrink-0"
                }
              >
                {payment === opt.id && (
                  <span className="w-[9px] h-[9px] rounded-full bg-green-500" />
                )}
              </span>
              <input
                type="radio"
                name="payment"
                className="hidden"
                checked={payment === opt.id}
                onChange={() => setPayment(opt.id)}
              />
              {opt.label}
            </label>
          ))}
 
          <button className="w-full mt-4 py-3.5 bg-green-500 hover:bg-green-600 text-white text-[15px] font-semibold rounded-lg transition-colors">
            Place Order
          </button>
        </div>
      </div>
    </div>
      </Container>
    </div>
  )
}

export default Checkout