
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  
  return (
    <>

   <Navbar title="TextUTILS" about="About TextUtils" />
   <div className="container">
   <TextForm title="Enter your text "/>

   </div>

    </>
  );
}

export default App;
