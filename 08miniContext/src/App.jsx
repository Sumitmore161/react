
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import { Login, Profile } from './components'
function App() {
  return (
    <UserContextProvider>
        <Login />
        <Profile />
    </UserContextProvider>
  )
}

export default App
