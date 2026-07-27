import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold">MyWebsite</h2>
            <p className="mt-3 text-sm text-gray-400">
              Build modern web applications with React, TypeScript, and
              Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Contact</h3>

            <p className="text-gray-400">📧 info@mywebsite.com</p>
            <p className="text-gray-400">📞 +91 98765 43210</p>
            <p className="text-gray-400">📍 New Delhi, India</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;