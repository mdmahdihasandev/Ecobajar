import React from "react";



const Checkout = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1320px] mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ================= Left Side ================= */}

          <div className="lg:col-span-8">

            <h2 className="text-[32px] font-semibold text-[#1A1A1A] mb-8">
              Billing Information
            </h2>

            {/* First Row */}

            <div className="grid md:grid-cols-3 gap-5">

              <div>
                <label className="text-sm text-[#1A1A1A]">
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="Your first name"
                  className="w-full h-12 border border-gray-300 rounded-md px-4 mt-2 outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm text-[#1A1A1A]">
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Your last name"
                  className="w-full h-12 border border-gray-300 rounded-md px-4 mt-2 outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm text-[#1A1A1A]">
                  Company Name
                  <span className="text-gray-400">
                    {" "}
                    (optional)
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full h-12 border border-gray-300 rounded-md px-4 mt-2 outline-none focus:border-green-500"
                />
              </div>

            </div>

            {/* Street Address */}

            <div className="mt-5">

              <label className="text-sm text-[#1A1A1A]">
                Street Address
              </label>

              <input
                type="text"
                placeholder="Email"
                className="w-full h-12 border border-gray-300 rounded-md px-4 mt-2 outline-none focus:border-green-500"
              />

            </div>

            {/* Country State Zip */}

            <div className="grid md:grid-cols-3 gap-5 mt-5">

              <div>

                <label className="text-sm">
                  Country / Region
                </label>

                <select className="w-full h-12 border border-gray-300 rounded-md px-4 mt-2 outline-none">

                  <option>Select</option>

                  <option>Bangladesh</option>

                  <option>India</option>

                  <option>USA</option>

                </select>

              </div>

              <div>

                <label className="text-sm">
                  States
                </label>

                <select className="w-full h-12 border border-gray-300 rounded-md px-4 mt-2 outline-none">

                  <option>Selects</option>

                  <option>Dhaka</option>

                  <option>Chittagong</option>

                  <option>Khulna</option>

                </select>

              </div>

              <div>

                <label className="text-sm">
                  Zip Code
                </label>

                <input
                  type="text"
                  placeholder="Zip Code"
                  className="w-full h-12 border border-gray-300 rounded-md px-4 mt-2 outline-none focus:border-green-500"
                />

              </div>

            </div>

            {/* Email Phone */}

            <div className="grid md:grid-cols-2 gap-5 mt-5">

              <div>

                <label className="text-sm">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-12 border border-gray-300 rounded-md px-4 mt-2 outline-none focus:border-green-500"
                />

              </div>

              <div>

                <label className="text-sm">
                  Phone
                </label>

                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full h-12 border border-gray-300 rounded-md px-4 mt-2 outline-none focus:border-green-500"
                />

              </div>

            </div>

            {/* Checkbox */}

            <div className="flex items-center gap-3 mt-8">

              <input
                type="checkbox"
                className="w-5 h-5 accent-green-600"
              />

              <p className="text-sm">
                Ship to a different address
              </p>

            </div>

            <hr className="my-10" />

            {/* Additional Info */}

            <h2 className="text-[30px] font-semibold mb-6">
              Additional Info
            </h2>

            <div>

              <label className="text-sm">
                Order Notes (Optional)
              </label>

              <textarea
                placeholder="Notes about your order, e.g. special notes for delivery"
                className="w-full h-[180px] border border-gray-300 rounded-lg p-4 mt-2 resize-none outline-none focus:border-green-500"
              ></textarea>

            </div>

          </div>

          {/* ================= Right Side ================= */}

          <div className="lg:col-span-4">

            <div className="border rounded-xl p-6 shadow-sm">

              <h2 className="text-2xl font-semibold mb-6">
                Order Summary
              </h2>              {/* Product 1 */}

              <div className="flex justify-between items-center mb-5">

                <div className="flex items-center gap-3">

                  <img
                    src={greenCapsicum}
                    alt="product"
                    className="w-16 h-16 object-cover"
                  />

                  <p className="text-sm">
                    Green Capsicum <span className="font-semibold">x5</span>
                  </p>

                </div>

                <span className="font-medium">$70.00</span>

              </div>

              {/* Product 2 */}

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">

                  <img
                    src={redCapsicum}
                    alt="product"
                    className="w-16 h-16 object-cover"
                  />

                  <p className="text-sm">
                    Red Capsicum <span className="font-semibold">x1</span>
                  </p>

                </div>

                <span className="font-medium">$14.00</span>

              </div>

              <hr className="my-6" />

              {/* Subtotal */}

              <div className="flex justify-between mb-4">

                <p className="text-gray-600">
                  Subtotal
                </p>

                <span className="font-semibold">
                  $84.00
                </span>

              </div>

              {/* Shipping */}

              <div className="flex justify-between mb-4">

                <p className="text-gray-600">
                  Shipping
                </p>

                <span className="font-semibold">
                  Free
                </span>

              </div>

              <hr className="my-6" />

              {/* Total */}

              <div className="flex justify-between text-lg font-semibold mb-8">

                <p>Total</p>

                <span>$84.00</span>

              </div>

              {/* Payment Method */}

              <h3 className="text-xl font-semibold mb-5">
                Payment Method
              </h3>

              <div className="space-y-4">

                <label className="flex items-center gap-3 cursor-pointer">

                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="accent-green-600"
                  />

                  <span>Cash on Delivery</span>

                </label>

                <label className="flex items-center gap-3 cursor-pointer">

                  <input
                    type="radio"
                    name="payment"
                    className="accent-green-600"
                  />

                  <span>Paypal</span>

                </label>

                <label className="flex items-center gap-3 cursor-pointer">

                  <input
                    type="radio"
                    name="payment"
                    className="accent-green-600"
                  />

                  <span>Amazon Pay</span>

                </label>

              </div>

              {/* Button */}

              <button
                className="w-full h-14 rounded-full bg-green-600 hover:bg-green-700 duration-300 text-white font-semibold mt-8"
              >
                Place Order
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Checkout;