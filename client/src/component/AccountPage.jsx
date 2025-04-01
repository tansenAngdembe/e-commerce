import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountPage = () => {
  const [formData, setFormData] = useState({
    firstName: 'Sahjad',
    lastName: 'Ansari',
    email: 'sahjaddon@gmail.com',
    address: 'Siraha, Nepal',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with breadcrumb and welcome message */}
      <div className="flex justify-between items-center mb-8">
        <div className="breadcrumb text-sm">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">My Account</span>
        </div>
        <div className="welcome">
          <span>Welcome! </span>
          <span className="text-red-500">Sahjad Ansari</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-1/4">
          <div className="mb-6">
            <h3 className="font-bold mb-3">Manage My Account</h3>
            <ul className="space-y-2 pl-2">
              <li>
                <Link to="/account/profile" className="text-red-500 hover:underline">My Profile</Link>
              </li>
              <li>
                <Link to="/account/address-book" className="text-gray-600 hover:text-gray-900">Address Book</Link>
              </li>
              <li>
                <Link to="/account/payment-options" className="text-gray-600 hover:text-gray-900">My Payment Options</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-bold mb-3">My Orders</h3>
            <ul className="space-y-2 pl-2">
              <li>
                <Link to="/account/returns" className="text-gray-600 hover:text-gray-900">My Returns</Link>
              </li>
              <li>
                <Link to="/account/cancellations" className="text-gray-600 hover:text-gray-900">My Cancellations</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-bold mb-3">My Wishlist</h3>
          </div>
        </div>

        {/* Main Content - Edit Profile Form */}
        <div className="w-full md:w-3/4">
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold text-red-500 mb-6">Edit Your Profile</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block mb-2">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Password Changes</h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    placeholder="Current Password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                  />
                </div>
                
                <div>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    placeholder="New Password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                  />
                </div>
                
                <div>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-4 mt-8">
              <button 
                type="button" 
                className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;