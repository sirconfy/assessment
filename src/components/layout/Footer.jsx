import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/homes-logo.png"

const Footer = () => {
  return (
    <footer className="bg-nav-bg text-white w-[100%] py-12 ">
      {/* <div className="container px-8 w-full"> */}
        <div className="flex lg:flex-row lg:justify-between items-center px-20 flex-col justify-center">
          {/* Column 1: Logo and Social Links */}
          <div className="mb-6">
            <img
              src={Logo} // Replace with your logo path
              alt="Logo"
              className="sm:mb-2"
            />
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-text hover:text-white transition-colors"
              >
                <FaXTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-text hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-text hover:text-white transition-colors"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-text hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Column 2: About Us */}
          <div className="mb-6">
            <h3 className="text-lg text-footer-text font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-base lg:text-start text-center">
              <li>
                <Link
                  to="/our-story" // Replace with your route
                  className="text-footer-text hover:text-custom-gray"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/team" // Replace with your route
                  className="text-footer-text hover:text-custom-gray"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Privacy Policy */}
          <div className="mb-6">
            <h3 className="text-lg text-footer-text font-semibold mb-4">Privacy Policy</h3>
            <ul className="space-y-2 text-base lg:text-start text-center">
              <li>
                <Link
                  to="/data-protection" // Replace with your route
                  className="text-footer-text hover:text-custom-gray"
                >
                  Data Protection
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy" // Replace with your route
                  className="text-footer-text hover:text-custom-gray"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Terms and Conditions */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-footer-text mb-4">Terms and Conditions</h3>
            <ul className="space-y-2 text-base lg:text-start text-center">
              <li>
                <Link
                  to="/user-agreement" // Replace with your route
                  className="text-footer-text hover:text-custom-gray"
                >
                  User Agreement
                </Link>
              </li>
              <li>
                <Link
                  to="/legal-notice" // Replace with your route
                  className="text-footer-text hover:text-custom-gray"
                >
                  Legal Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;