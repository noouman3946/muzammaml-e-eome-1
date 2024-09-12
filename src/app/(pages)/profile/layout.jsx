// components/ProfileSidebar.js
import Link from 'next/link';
// import { FaWallet, FaGift, FaShoppingCart, FaUser, FaHome, FaCreditCard, FaPhone, FaShareAlt, FaSignOutAlt } from 'react-icons/fa';

const ProfileSidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white text-gray-900 shadow-lg border-r border-gray-200">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Profile</h2>
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="ml-4">
            <p className="text-lg font-semibold">Username</p>
            <p className="text-sm text-gray-600">user@example.com</p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/profile/Mywallet" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md transition-colors">
                {/* <FaWallet className="mr-3 text-xl text-blue-600" /> */}
                <span>My Wallet</span>
              </Link>
            </li>
            <li>
              <Link href="/profile/Myreward" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md transition-colors">
                {/* <FaGift className="mr-3 text-xl text-green-600" /> */}
                <span>My Reward</span>
              </Link>
            </li>
            <li>
              <Link href="/profile/Myorders" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md transition-colors">
                {/* <FaShoppingCart className="mr-3 text-xl text-yellow-600" /> */}
                <span>My Order</span>
              </Link>
            </li>
            <li>
              <Link href="/profile/Personalinformation" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md transition-colors">
                {/* <FaUser className="mr-3 text-xl text-purple-600" /> */}
                <span>Personal Information</span>
              </Link>
            </li>
            <li>
              <Link href="/profile/Adresses" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md transition-colors">
                {/* <FaHome className="mr-3 text-xl text-teal-600" /> */}
                <span>Addresses</span>
              </Link>
            </li>
            <li>
              <Link href="/profile/Paymentmethods" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md transition-colors">
                {/* <FaCreditCard className="mr-3 text-xl text-indigo-600" /> */}
                <span>Payment Method</span>
              </Link>
            </li>
            <li>
              <Link href="/profile/Contactpreference" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md transition-colors">
                {/* <FaPhone className="mr-3 text-xl text-orange-600" /> */}
                <span>Contact Preferences</span>
              </Link>
            </li>
            <li>
              <Link href="/profile/Socialnetworks" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md transition-colors">
                {/* <FaShareAlt className="mr-3 text-xl text-red-600" /> */}
                <span>Social Network</span>
              </Link>
            </li>
            <li>
              <Link href="/profile/Logout" className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md transition-colors">
                {/* <FaSignOutAlt className="mr-3 text-xl text-gray-600" /> */}
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
