import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { StateContextProvider } from './context/mainContext'

function App() {

  return (
    <>
    <StateContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StateContextProvider>
    </>
  )
}

export default App
