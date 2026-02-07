 import React, { useState } from 'react';

const AccountProfile = () => {
  const [skillsProgress, setSkillsProgress] = useState(30);

  const navigationItems = [
    'Dashboard',
    'Layouts',
    'WIDGET',
    'Statistics',
    'Data',
    'Chart',
    'Admin Panel',
    'Online Courses',
    'Membership',
    'Helpdesk',
    'Invoice',
    'UI COMPONENTS'
  ];

  const personalDetails = [
    { field: 'Full Name', value: 'Anshan Handgun' },
    { field: 'Father Name', value: 'Mr. Deepen Handgun' },
    { field: 'Phone', value: '(+1-876) 8654 239 581' },
    { field: 'Country', value: 'New York' },
    { field: 'Email', value: 'anshan.dh81@gmail.com' },
    { field: 'Address', value: 'Street 110-B Kalians Bag, Dewan, M.P. New York' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - SCREENSHOT EXACT */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-6">
            {/* Account Profile Title */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Account Profile</h1>
              <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
            </div>

            {/* Navigation */}
            <div className="mb-8">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Navigation</h2>
              <ul className="space-y-1">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className={`block p-3 rounded-md text-sm transition-colors ${index === 0 
                        ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-500' 
                        : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 pt-6 space-y-6">
              {/* About Me */}
              <div>
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">About me</h2>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Hello, I'm Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website, 
                    I create digital Products a more Beautiful and usable place.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Morbid accusant ipsum. Nam nec tellus at.
                  </p>
                </div>
              </div>

              {/* Personal Details - Table */}
              <div>
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Personal Details</h2>
                <div className="overflow-hidden border border-gray-200 rounded-md">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {personalDetails.map((detail, index) => (
                        <tr key={index} className="text-sm hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-500 whitespace-nowrap border-r border-gray-200">
                            {detail.field}
                          </td>
                          <td className="px-4 py-3 text-gray-700">
                            {detail.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Skills</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-800">{skillsProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${skillsProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Buy Now Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md text-sm shadow-sm hover:shadow transition-colors mt-6">
                Buy Now
              </button>
            </div>
          </div>

          {/* Right Side - Dashboard Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Dashboard Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                  <p className="text-gray-600 mt-1">Welcome back, Anshan! Here's what's happening today.</p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-3">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Export
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    + Add New
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Revenue</p>
                      <p className="text-xl font-bold text-gray-800 mt-1">$24,580</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-green-600 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    +12.5% from last month
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">New Users</p>
                      <p className="text-xl font-bold text-gray-800 mt-1">1,248</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-green-600 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    +8.2% from last week
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Active Projects</p>
                      <p className="text-xl font-bold text-gray-800 mt-1">36</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-red-600 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    -2.1% from yesterday
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Avg. Response Time</p>
                      <p className="text-xl font-bold text-gray-800 mt-1">2.4s</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-green-600 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    +15.3% faster
                  </div>
                </div>
              </div>

              {/* Charts & Tables Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Activity Chart */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">Monthly Activity</h3>
                    <select className="text-sm border border-gray-300 rounded-md px-3 py-1 bg-white">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 3 months</option>
                    </select>
                  </div>
                  <div className="h-64 flex items-end space-x-2">
                    {[65, 40, 75, 50, 85, 60, 95, 70, 80, 55, 90, 65].map((height, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-gray-500 mt-2">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span>Website Visits</span>
                    </div>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Recent Orders</h3>
                  <div className="space-y-4">
                    {[
                      { id: '#ORD-7841', customer: 'John Smith', amount: '$248.50', status: 'Delivered' },
                      { id: '#ORD-7842', customer: 'Emma Johnson', amount: '$1,248.00', status: 'Processing' },
                      { id: '#ORD-7843', customer: 'Michael Brown', amount: '$589.90', status: 'Pending' },
                      { id: '#ORD-7844', customer: 'Sarah Davis', amount: '$324.75', status: 'Delivered' },
                      { id: '#ORD-7845', customer: 'David Wilson', amount: '$1,589.00', status: 'Shipped' },
                    ].map((order, index) => (
                      <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">{order.id}</p>
                          <p className="text-sm text-gray-500">{order.customer}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-800">{order.amount}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <a href="#" className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 text-center transition-colors">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Analytics</span>
                  </a>
                  
                  <a href="#" className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 text-center transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Payments</span>
                  </a>
                  
                  <a href="#" className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 text-center transition-colors">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Users</span>
                  </a>
                  
                  <a href="#" className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 text-center transition-colors">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Reports</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;