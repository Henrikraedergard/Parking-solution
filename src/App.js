import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Contact from './Contact'
import Error from './pages/Error'

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produkter" element={<Products />} />
                <Route path="/produkt/:id" element={<Product />} />
                <Route path="/prosjekter" element={<Projects />} />
                <Route path="/prosjekt/:id" element={<Project />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Contact />
            <Footer />
        </Router>
    );
}

export default App;