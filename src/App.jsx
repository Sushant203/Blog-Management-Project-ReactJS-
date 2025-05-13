
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import CreateBlog from './pages/CreateBlog'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {

  return (
  <main>
    <Router>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute> 
        } />

         <Route path="create-blog" element={
          <ProtectedRoute>
            <CreateBlog />
          </ProtectedRoute>
         } />
        <Route path='/signup' element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  </main>
  )
}

export default App
