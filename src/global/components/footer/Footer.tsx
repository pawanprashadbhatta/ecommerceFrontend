import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gray-300 text-black-500">
      {/* SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 z-0"
        style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#FEC8D8', stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: '#FDE2E4', stopOpacity: 0.8 }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad1)"
          fillOpacity="1"
          d="M0,96L34.3,117.3C68.6,139,137,181,206,186.7C274.3,192,343,160,411,138.7C480,117,549,107,617,101.3C685.7,96,754,96,823,117.3C891.4,139,960,181,1029,181.3C1097.1,181,1166,139,1234,128C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            keyTimes="0; 0.5; 1"
            values="M0,160L30,138.7C60,117,120,75,180,80C240,85,300,139,360,170.7C420,203,480,213,540,202.7C600,192,660,160,720,149.3C780,139,840,149,900,138.7C960,128,1020,96,1080,101.3C1140,107,1200,149,1260,170.7C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z;
           M0,96L30,85.3C60,75,120,53,180,64C240,75,300,117,360,138.7C420,160,480,160,540,149.3C600,139,660,117,720,106.7C780,96,840,96,900,128C960,160,1020,224,1080,224C1140,224,1200,160,1260,138.7C1320,117,1380,139,1410,149.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z;
           M0,96L30,96C60,96,120,96,180,101.3C240,107,300,117,360,122.7C420,128,480,128,540,122.7C600,117,660,107,720,96C780,85,840,75,900,64C960,53,1020,43,1080,53.3C1140,64,1200,96,1260,112C1320,128,1380,128,1410,128L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </path>
      </svg>
      {/* End of SVG Background */}

      {/* Content */}
      <div className="container mx-auto py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-black-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum tellus at orci ultricies volutpat. Nullam accumsan metus in maximus venenatis.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/products" className="hover:text-gray-400">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-black-300">
              Email: Bazar@example.com
              <br />
              Phone: +9812779599
              <br />
              Address: 26 Ratopul, kathmandu, Nepal
            </p>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-8 text-center">
          <p className="text-black-300">&copy; 2024 Bazar. All rights reserved.</p>
        </div>
      </div>
      {/* End of Content */}
    </footer>
  );
};

export default Footer;
