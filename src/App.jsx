import Navbar from './components/Navbar'
import Home from './pages/Home'
import { useSFMC } from './hooks/useSFMC'

export default function App() {
  useSFMC()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Home />
    </div>
  )
}
