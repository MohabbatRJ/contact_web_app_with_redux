import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './components/Contacts';
import NavBar from './components/NavBar';
import EditContact from './components/EditContact'

function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Contacts />} />
        <Route path='/edit/:id' element={<EditContact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
