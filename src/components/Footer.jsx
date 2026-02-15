import React from 'react'
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Leaf } from "lucide-react";
const Footer = () => {
  return (
    <>
    <footer className="bg-gradient-to-br from-green-50 to-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-green-600 w-7 h-7" />
              <h2 className="text-2xl font-bold text-green-800">
                Ayur<span className="text-green-500">DietCare</span>
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Ayurvedic DietCare blends Ayurveda and modern nutrition to deliver
              personalized, AI-powered diet plans. Helping doctors create holistic,
              accurate diet charts for better health and natural healing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Company
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-green-600 cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-green-600 cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-green-600 cursor-pointer transition">
                Contact Us
              </li>
              <li className="hover:text-green-600 cursor-pointer transition">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <div className="p-3 bg-white rounded-full shadow hover:bg-green-600 hover:text-white transition cursor-pointer">
                <Instagram />
              </div>
              <div className="p-3 bg-white rounded-full shadow hover:bg-green-600 hover:text-white transition cursor-pointer">
                <Twitter />
              </div>
              <div className="p-3 bg-white rounded-full shadow hover:bg-green-600 hover:text-white transition cursor-pointer">
                <Facebook />
              </div>
              <div className="p-3 bg-white rounded-full shadow hover:bg-green-600 hover:text-white transition cursor-pointer">
                <Youtube />
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AyurDietCare. All rights reserved.
        </div>

      </div>
    </footer>
    </>
  )
}

export default Footer
