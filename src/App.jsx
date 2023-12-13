import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
    <SignUpForm token={token} setToken={setToken}/> 
    <Authenticate token={token} setToken={setToken}/>
    </>
  )
}

export default App


// Pass the setToken function to your SignUpForm component, and then pass the token value to your Authenticate component. This will allow us to set the token with our API response, and read/send the token back in our Authenticate component.