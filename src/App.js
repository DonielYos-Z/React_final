import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Page404 from "./pages/Page404"
import Movies from "./pages/Movies"
import MovieInfo from "./pages/MovieInfo"

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<MovieInfo />} />
                <Route path="/*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
