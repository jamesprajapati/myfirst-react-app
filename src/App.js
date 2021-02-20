import Avatar from './img/wenzix.png'
import './App.css';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      
      <Router>
        <Navbar/>
         <Switch>
            <Route path='/' />
         </Switch>
      </Router>    
      <center>
        <div>
        { //<h1>Hello I am Gaurav Prajapati</h1>/
        }
        </div>
      </center>
      
    
    </>
  
    
  );
}

export default App;
