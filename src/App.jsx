import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { StateContextProvider } from './context/mainContext'
import ErrorPage from './components/ErrorPage'

function App() {

  return (
    <>
    <ErrorBoundary fallback={<ErrorPage/>}>
    <StateContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StateContextProvider>
    </ErrorBoundary>
    </>
  )
}

export default App
