import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './components/layout/MainLayout/MainLayout'
import Home from './pages/Home/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
