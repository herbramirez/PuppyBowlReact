import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const mockPlayers = [
  {
    name: "lorem",
    age: 10,
    id: 1
  },

  {
    name: "lorem",
    age: 33,
    id: 2
  },
  {
    name: "exet",
    age: 24,
    id: 3

  }
]
console.log("MOCK LIST:", mockPlayers);

function App() {
  const [user, setUser] = useState("")

  useEffect(() => {
    try {
      console.log("USEEFFECT:", user)

    } catch {
        console.log("Error")

    }
    useEffect()
  }, [user]);

  return (
    <>
      
    </>
  )
}

export default App
