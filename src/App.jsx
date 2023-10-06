import { useState } from 'react'
import Machine from './Components/Machine'
import './App.css'

function App() {
  

  return (
    <div>
      <Machine 
        s1="🍒"
        s2="🍉"
        s3="🍇"/> 


        <Machine 
        s1="🍒"
        s2="🍉"
        s3="🍉"/> 



        <Machine 
        s1="🍉"
        s2="🍉"
        s3="🍉"/> 
    </div>
  )
}

export default App
