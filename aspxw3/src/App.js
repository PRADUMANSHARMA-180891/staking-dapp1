import './App.css';
import Firstpage from './components/Firstpage';
import Tokenpage from './components/Tokenpage';
import {Routes,Route} from "react-router-dom";
// import Accountdata from './components/Accountdata';
import Main from './components/Main';
import Platfrom from './components/Platfrom';


function App() {
  return (
    <div className="App">
       <Routes>
         
          <Route path='/' element={<Firstpage/>}/>
          <Route path='create' element={<Tokenpage/>}>
            <Route path="Main" element={<Main/>}/>
            <Route path="Platfrom" element={<Platfrom/>}/>
          </Route>
        </Routes>
       {/* <Accountdata/> */}

    </div>
  );
}

export default App;
