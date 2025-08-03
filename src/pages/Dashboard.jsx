
import React from 'react'
import { getUser } from '../utils/auth'

const Dashboard = () => {
  const user = getUser()

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Welcome back, {user?.name}!
          </h3>
          <div className="mt-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900">Total Users</h4>
                <p className="text-3xl font-bold text-blue-600">1,234</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900">Active Sessions</h4>
                <p className="text-3xl font-bold text-green-600">892</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900">Pending Tasks</h4>
                <p className="text-3xl font-bold text-yellow-600">23</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
