import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
    let myObj = {
      name: "superman",
      age: 30
    }
   
    let newarray= [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username = "amit" someObj={myObj} new={newarray}/>
      <Card username = "hero"/>

    </>
  )
}

export default App
