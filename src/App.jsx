import { BrowserRouter, Routes, Route } from "react-router-dom"
import NewsPage from './components/NewsPage'

function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NewsPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
