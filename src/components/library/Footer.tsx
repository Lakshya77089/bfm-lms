import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {/* Left */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Web3 Library</h3>
          <p className="text-sm text-gray-400">
            Your gateway to comprehensive Web3 research and educational resources.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-medium mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-medium mb-2">Resources</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#">Research Papers</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Authors</a></li>
            <li><a href="#">Publishers</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-medium mb-2">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-2">
            Stay updated with the latest in Web3 research
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l bg-gray-800 text-white text-sm w-full"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © 2024 Web3 Library. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
