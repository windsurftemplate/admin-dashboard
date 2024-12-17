import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './theme/theme'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Products from './pages/Products'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings';
import Marketing from './pages/Marketing'; // Importing the Marketing page
import ComparativeAnalytics from './pages/ComparativeAnalytics'; // Importing the Comparative Analytics page

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
            <Route path="marketing" element={<Marketing />} /> {/* Adding the Marketing route */}
            <Route path="comparative-analytics" element={<ComparativeAnalytics />} /> {/* Adding the Comparative Analytics route */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
