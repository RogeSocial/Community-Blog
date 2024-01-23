import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthProvider } from './GlobalContext'


function App() {

  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  )
}

export default App
