import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <header></header>
      <main className='flex vertical'>
          <Routes>
              <Route path='/' element={<></>} />
          </Routes>
      </main>
      <footer></footer>
    </Router>
  )
}

export default App
