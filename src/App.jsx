import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [characterallowed, setCharacterallowed] = useState(false);
  

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='border rounded-xl p-4 shadow-2xl bg-gray-800'>
          <h1 className='text-gray-200 mb-5 text-center text-3xl'>Password Generator</h1>
          <input type='text' placeholder='password' className='rounded-xl p-2' ></input>
          <button className='bg-blue-500 p-2 ml-2 rounded-xl text-white'>Copy</button>
          <div className='flex flex-col mb-1 mt-3 p-2'>
            <label className='text-white'>Length</label>
            <input type='range' min={6} max={100} className='cursor-pointer'></input>
          </div>
          <div className='mb-2 p-2'>
            <input type='checkbox' className='mr-2'></input>
            <label className='text-white'>Number</label>
          </div>
          <div className='p-2'>
            <input type='checkbox' className='mr-2'></input>
            <label className='text-white'>Symbols</label>
          </div>
        </div>
      </div>
    </> 
  )
}

export default App
