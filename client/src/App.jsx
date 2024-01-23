import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import CreatePostPage from './pages/CreatePostPage';

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
