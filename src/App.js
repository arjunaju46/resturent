import './App.css';
import Header from './Header';
import Resturent from './Resturent';
import './Footer'
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Restview from './Restview';

function App() {
  return (
    <div className="App">
      <Header/>
<Routes>
       <Route path='/' element={<Resturent/>} />
        <Route path='/viewRest/:id' element={<Restview/>} />
  
</Routes>    
  <Footer/>
    </div>
  );
}

export default App;
