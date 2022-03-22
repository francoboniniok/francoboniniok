import './App.css';
import NavBar from  './components/NavBar/NavBar';
import ListProducts from './components/ListProducts/ListProducts';





function App() {
  return (
    <div className='App'>


      <NavBar/>
      <h2>Productos Destacados</h2>
      <ListProducts/>

      

    </div>
  );
}

export default App;
