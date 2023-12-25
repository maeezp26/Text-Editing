import './App.css';
import Navbar from './Components/Navbar';
import  TextForm  from './Components/TextForm';

function App() {
  return (
    <>
   <Navbar nav2="Services"   nav3="About"  nav4="Contact" />

   <div className='container my-3'>
        <TextForm heading="Enter text to Analyze" />
       
 
   </div>
   </>
  );
}

export default App;
