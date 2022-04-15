import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'

import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Error from './pages/Error'

function App() {
    return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
    );
}

export default App;