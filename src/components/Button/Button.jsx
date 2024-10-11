import React from 'react'

const Button = ({onClick, name, value}) => {
  return (
    <button onClick={onClick}  className="px-8 py-4 border-2 border-yellow-600 font-semibold text-yellow-600 rounded-lg transition-all 
    duration-1000 ease-in-out inline-block overflow-hidden relative capitalize shadow-md hover:bg-yellow-600 hover:text-white
    before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
before:bg-gradient-to-r before:from-transparent  before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear">
{name}
</button>
  )
}

export default Button
