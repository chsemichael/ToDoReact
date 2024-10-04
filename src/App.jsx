import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation.jsx'
import LogIn from './components/LogIn/LogIn.jsx'
import Categories from './components/Categories/Categories.jsx'
import Todos from './components/Todos/Todos.jsx'
import AuthProvider from './Contexts/AuthContext.jsx'
import ProtectedRoute from './components/ProtectedRoute'
import Footer from './components/Footer/Footer.jsx'

function App() {
  

  return (
    <>
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<LogIn />}></Route>
          <Route path="/Login" element={<LogIn/>}></Route>
          <Route path="/Categories" element={<ProtectedRoute><Categories /></ProtectedRoute>}></Route>
          <Route path="/Todos" element={<Todos />}></Route>
        </Routes>
        <Footer />
      </Router>
      
      </AuthProvider>
    </>
  )
}

export default App
