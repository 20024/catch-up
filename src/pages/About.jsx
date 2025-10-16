import React from 'react'

function Homepage() {
  return (
    <div>
         <div className="py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-8">Why CatchUp?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img src="/icons/engage.svg" alt="Engage" className="mx-auto mb-4 w-12"/>
            <h3 className="text-xl font-bold mb-2 text-blue-500">Connect</h3>
            <p className="text-gray-600">Find and follow your friends to never miss a moment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img src="/icons/engage.svg" alt="Engage" className="mx-auto mb-4 w-12"/>
            <h3 className="text-xl font-bold mb-2 text-blue-500">Share</h3>
            <p className="text-gray-600">Post updates, pictures, and thoughts instantly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img src="/icons/engage.svg" alt="Engage" className="mx-auto mb-4 w-12"/>
            <h3 className="text-xl font-bold mb-2 text-blue-500">Explore</h3>
            <p className="text-gray-600">Discover what’s trending and join the conversation.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage