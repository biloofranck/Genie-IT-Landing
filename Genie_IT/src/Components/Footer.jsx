import visa from "../asset/visa.png";
import mastercard from "../asset/mstercard.jpg";
import paypal from "../asset/paypal.png";
import maestro from "../asset/Maestro_logo.png";
const Footer = () => {
  return (
    <div className="pt-24">
      <footer className="bg-[#1a4663] overflow-hidden mb-20 flex flex-col w-full max-w-[1100px] h-auto m-auto justify-between rounded-[40px] text-white pt-12">
        <div className="container mx-auto flex flex-wrap justify-between items-start text-left gap-8">
          {/* Column 1 */}
          <div className="flex-1 min-w-[250px] p-4">
            <h2 className="text-3xl font-bold mb-2">Genie iT</h2>
            <p className="mb-4 text-lg font-light">
              Find the best, be the best
            </p>
            <div className="flex justify-start space-x-4 text-xl">
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="Behance">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" aria-label="Dribbble">
                <i className="fab fa-dribbble"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 min-w-[250px] p-4">
            <h3 className="text-lg font-semibold mb-4">
              Become partner <span className="ml-2">&rsaquo;</span>
            </h3>
            <p className="text-gray-300 font-light mb-4">
              Earn some serious cash promoting Otoma.
            </p>
            <h3 className="text-lg font-semibold mb-4">
              Sell Products <span className="ml-2">&rsaquo;</span>
            </h3>
            <p className="text-gray-300 font-light">
              Earn 70% and more on all sales
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex-1 min-w-[250px] p-4">
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 font-light hover:text-white"
                >
                  Overview
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-300 font-light hover:text-white"
                >
                  Template
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 font-light hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex-1 min-w-[250px] p-4">
            <h3 className="text-lg font-semibold mb-4">
              Join our growing discord community
            </h3>
            <p className="text-gray-300 font-light mb-4">
              Exclusive offers, tips and goodies, you will find everything in
              our newsletter!
            </p>
            <form className="flex items-center justify-start">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email to get an invite"
                  className="w-full p-3 pl-10 rounded-full text-gray-800 shadow-lg"
                  style={{ border: "none" }}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="fab fa-discord text-blue-600"></i>
                </div>
              </div>
              <button
                type="submit"
                className="ml-4 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg"
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#00D7E8] to-[#099CF6] p-4 pt-8">
          <div className="flex justify-center space-x-8 flex-wrap">
            <div className="bg-white w-[100px] flex justify-center items-center mb-4 p-2 rounded-lg">
              <img src={visa} alt="Visa" className="h-8" />
            </div>

            <div className="bg-white p-2 w-[100px] flex justify-center items-center rounded-lg mb-4">
              <img src={mastercard} alt="Mastercard" className="h-8" />
            </div>
            <div className="bg-white p-2 rounded-lg mb-4">
              <img src={paypal} alt="Paypal" className="h-8" />
            </div>
            <div className="bg-white p-2 w-[100px] flex justify-center items-center rounded-lg mb-4">
              <img src={maestro} alt="Discover" className="h-8" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
