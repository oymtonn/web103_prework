import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ViewCreator from './pages/ViewCreator'
import Layout from './routes/Layout'
import EditCreator from './pages/EditCreator'
import CreateCreator from './pages/CreateCreator'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<App />}/>
                <Route path="/creator/:id" element={<ViewCreator/>}/>
                <Route path="/create" element={<CreateCreator/>}/>
                <Route path="/creator/edit/:id" element={<EditCreator/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
