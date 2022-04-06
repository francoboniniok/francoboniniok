import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

//components
import NavBar from  './components/NavBar/NavBar';

//pages
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import DetailPage from './pages/Detail';




function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path="/contacto" element={<ContactPage />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/:category/" element={<HomePage />}/>
        <Route path="/:category/:id" element={<DetailPage />}/>
      
      </Routes>
      <footer></footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
