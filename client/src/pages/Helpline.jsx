import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaGavel, FaHome, FaHeartbeat, FaChevronDown, FaChevronUp, FaGlobe, FaHandHoldingHeart, FaFlag } from "react-icons/fa";

function Helpline() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 py-10">
        <div className="max-w-7xl mx-auto text-center py-12">
          <h1 className="text-4xl font-bold text-blue-500">Women&apos;s Safety & Helpline Services in India</h1>
          <p className="mt-4 text-lg text-blue-900">
            We help women in India to get access to emergency contact numbers, legal assistance, counseling services, and much more.
          </p>
        </div>
        <img 
  src="/issues.png" 
  className="w-3/4 h-32 object-cover mx-auto mb-8" 
  alt="Issues"
/>



        {/* Helplines */}
        <div className="max-w-5xl mx-auto p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-blue-50 transform transition duration-300 ease-in-out hover:scale-100 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-blue-900">National Commission for Women (NCW)</h2>
            <p className="mt-4 text-blue-600">
              The National Commission for Women (NCW) is a statutory body of the Government of India, tasked with advising on policy matters affecting women and ensuring their protection and empowerment.
            </p>
          </div>
          <div className="relative">
            <button
              className="flex items-center justify-between w-full text-left bg-blue-200 px-4 py-3 rounded-lg text-blue-900 font-semibold shadow-md"
              onClick={toggleDropdown}
            >
              <span><FaPhoneAlt className="text-blue-600 text-2xl mr-3 inline-block" aria-label="Phone icon" />Women Helpline (All India): 1091</span>
              {isDropdownOpen ? <FaChevronUp className="text-blue-600 text-2xl" /> : <FaChevronDown className="text-blue-600 text-2xl" />}
            </button>

            {isDropdownOpen && (
              <div className="bg-white mt-4 rounded-lg shadow-lg p-4">
                <ul className="space-y-2 text-md">
                  <li><FaPhoneAlt className="text-gray-600 mr-2 inline-block" /> <strong>National Emergency Number:</strong> <a href="tel:112" className="text-blue-500">112</a></li>
                  <li><FaPhoneAlt className="text-gray-600 mr-2 inline-block" /> <strong>Police:</strong> <a href="tel:100" className="text-blue-500">100</a></li>
                  <li><FaPhoneAlt className="text-gray-600 mr-2 inline-block" /> <strong>Delhi Women Helpline:</strong> <a href="tel:181" className="text-blue-500">181</a></li>
                  <li><FaPhoneAlt className="text-gray-600 mr-2 inline-block" /> <strong>Domestic Abuse Helpline:</strong> <a href="tel:181" className="text-blue-500">181</a></li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">Other helplines:</p>
                <ul className="mt-2 space-y-1 text-sm text-gray-400">
                  <li><a href="tel:1098" className="text-blue-500 hover:underline">Child Helpline: 1098</a></li>
                  <li><a href="tel:14567" className="text-blue-500 hover:underline">Senior Citizen Helpline: 14567</a></li>
                  <li><a href="tel:08046110007" className="text-blue-500 hover:underline">Mental Health Helpline: 08046110007</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Counseling */}
        <div className="bg-white max-w-5xl mx-auto p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-blue-50 transform transition duration-300 ease-in-out hover:scale-100 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-blue-900">iCall Counseling Helpline</h2>
            <p className="mt-4 text-gray-600">
              iCall (Indian Centre for Advancement of Community Mental Health) provides psychological support and counseling services for mental health issues. They offer helplines for immediate support and guidance.
              <a href="https://icallhelpline.org" className="text-black underline hover:no-underline hover:text-blue-800"> Read more</a>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <p className="text-gray-600">Get support via email:</p>
              <ul className="mt-4 space-y-2 text-lg">
                <li><strong><FaEnvelope className="text-blue-600 text-3xl mr-3 inline-block" aria-label="Email icon" />iCall (TISS) Counseling Helpline:</strong> <a href="mailto:icall@tiss.edu" className="text-blue-500">icall@tiss.edu</a></li>
              </ul>
            </div>
            <div>
              <p className="text-gray-600">Mental health and counseling services:</p>
              <ul className="mt-4 space-y-2 text-lg">
                <li><strong><FaHeartbeat className="text-blue-600 text-3xl mr-3 inline-block" aria-label="Heart icon" />iCall (TISS) Counseling Helpline:</strong> <a href="tel:02225521111" className="text-blue-500">022-25521111</a></li>
                <li><strong><FaGlobe className="text-blue-600 text-3xl mr-3 inline-block" aria-label="Globe icon" />iCall Website:</strong> <a href="https://icallhelpline.org" className="text-blue-500" target="_blank" rel="noopener noreferrer">icallhelpline.org</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Section */}

      </div>
    </>
  );
}

export default Helpline;
