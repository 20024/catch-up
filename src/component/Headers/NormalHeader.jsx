import React from 'react'

function NormalHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 flex justify-between items-center">
      
      <div className="text-xl font-bold cursor-pointer">Catch-up</div>

      <div className="flex items-right space-x-4">
       
     <img
          src="/avatar.png"
          alt="avatar"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
        
      </div>
    </div>
  )
}

export default NormalHeader