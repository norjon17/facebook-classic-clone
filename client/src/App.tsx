import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './components/layout/MainLayout/MainLayout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
