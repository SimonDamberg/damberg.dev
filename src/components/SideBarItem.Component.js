import React from 'react'

const SideBarItem = (props) => {
  const { title, onClick, active } = props
  return (
    <div onClick={() => onClick()} className={'cursor-pointer text-2xl sm:text-8xl transistion ease-in-out transition-colors hover:text-gray-500 ' + (active ? 'text-gray-800' : 'text-white')}>{title}</div>
  )
}

export default SideBarItem