//components
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser'

//router for routing on site
import { BrowserRouter, Routes, Route } from "react-router-dom";

//css
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<MainContent/>}/>
          <Route path='all' element={<AllUsers/>}/>
          <Route path='add' element={<AddUser/>}/>
        </Routes>
      </BrowserRouter>  
    </div> 
  );
}

export default App;
