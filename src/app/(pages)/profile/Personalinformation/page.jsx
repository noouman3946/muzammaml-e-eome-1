import React from 'react';

const PersonalInfoForm = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First name"
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div className="mb-4 flex items-center">
          <select className="p-3 border rounded-lg mr-4">
            <option value="+33">🇫🇷 +33</option>
            {/* Add other country codes here */}
          </select>
          <input
            type="tel"
            placeholder="Phone number"
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="date"
            className="p-3 border rounded-lg w-full"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Gender</label>
          <div className="flex items-center">
            <div className="mr-4">
              <input type="radio" id="male" name="gender" value="male" className="mr-2" />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="female" className="mr-2" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Save
          </button>
          <button
            type="button"
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          In order to access some features of the Service, you will have to fill out your account details.
          You may use it for buying things and for the shipping process. For more details{' '}
          <a href="#" className="text-blue-500">click here</a>.
        </p>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
